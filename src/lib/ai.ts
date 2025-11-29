import fs from 'fs';
import path from 'path';

const HF_API_KEY = process.env.HF_API_KEY;
if (!HF_API_KEY) {
  console.warn('HF_API_KEY missing. Add it to .env.local');
}

const EMBEDDING_MODEL = 'sentence-transformers/all-MiniLM-L6-v2';
const GENERATION_MODEL = 'google/flan-t5-small';

const CHARITIES_PATH = path.resolve(process.cwd(), 'data/charities.json');
const CACHE_DIR = path.resolve(process.cwd(), '.cache');
const EMBEDDINGS_CACHE = path.join(CACHE_DIR, 'charity-embeddings.json');

type Charity = {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  website?: string;
  donateLink?: string;
};

type EmbeddingRecord = {
  id: string;
  embedding: number[];
};

async function fetchHFEmbeddings(model: string, texts: string[]) {
  const res = await fetch(`https://api-inference.huggingface.co/embeddings/${model}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${HF_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(texts),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`HF embeddings failed: ${res.status} ${txt}`);
  }
  const data = await res.json();
  return data.map((d: any) => (Array.isArray(d) ? d : d.embedding));
}

function dot(a: number[], b: number[]) {
  let s = 0;
  for (let i = 0; i < a.length; i++) s += a[i] * b[i];
  return s;
}
function norm(a: number[]) {
  let s = 0;
  for (let i = 0; i < a.length; i++) s += a[i] * a[i];
  return Math.sqrt(s);
}
function cosine(a: number[], b: number[]) {
  return dot(a, b) / (norm(a) * norm(b) + 1e-10);
}

export async function ensureEmbeddingsCached(): Promise<EmbeddingRecord[]> {
  try {
    if (fs.existsSync(EMBEDDINGS_CACHE)) {
      const raw = fs.readFileSync(EMBEDDINGS_CACHE, 'utf-8');
      const parsed: EmbeddingRecord[] = JSON.parse(raw);
      if (parsed && parsed.length) return parsed;
    }
  } catch (e) {
    /* fallthrough to rebuild */
  }

  if (!fs.existsSync(CHARITIES_PATH)) {
    throw new Error(`Charities file not found at ${CHARITIES_PATH}`);
  }
  const charities: Charity[] = JSON.parse(fs.readFileSync(CHARITIES_PATH, 'utf-8'));
  const texts = charities.map(c => `${c.title}. ${c.category}. ${c.description}`);
  const embeddings = await fetchHFEmbeddings(EMBEDDING_MODEL, texts);

  const records: EmbeddingRecord[] = charities.map((c, i) => ({
    id: c.id,
    embedding: embeddings[i],
  }));

  if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR);

  fs.writeFileSync(EMBEDDINGS_CACHE, JSON.stringify(records), 'utf-8');
  return records;
}

export async function semanticSearch(query: string, topK = 6) {
  const recs = await ensureEmbeddingsCached();

  const qEmbArr = await fetchHFEmbeddings(EMBEDDING_MODEL, [query]);
  const qEmb = qEmbArr[0];

  const scored = recs.map(r => ({ id: r.id, score: cosine(qEmb, r.embedding) }));
  scored.sort((a, b) => b.score - a.score);

  const top = scored.slice(0, topK);
  const charities: Charity[] = JSON.parse(fs.readFileSync(CHARITIES_PATH, 'utf-8'));
  const byId = new Map(charities.map(c => [c.id, c]));
  return top.map(t => ({ ...byId.get(t.id)!, score: t.score }));
}

export async function generateExplanation(prompt: string, contexts: string[]) {
  const contextText = contexts.map((c, i) => `Context ${i + 1}:\n${c}`).join('\n\n');
  const fullPrompt = `You are a helpful assistant that recommends charities. User asked: "${prompt}". Use the contexts below to explain why the following charities match the user's request.\n\n${contextText}\n\nProvide 2-3 concise sentences explaining why these recommendations match.`;

  const res = await fetch(`https://api-inference.huggingface.co/models/${GENERATION_MODEL}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${HF_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      inputs: fullPrompt,
      parameters: { max_new_tokens: 120, temperature: 0.2 },
    }),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`HF generation failed: ${res.status} ${txt}`);
  }
  const data = await res.json();
  if (Array.isArray(data) && data[0]?.generated_text) return data[0].generated_text;
  if (data?.generated_text) return data.generated_text;
  if (typeof data === 'string') return data;
  return JSON.stringify(data);
}
