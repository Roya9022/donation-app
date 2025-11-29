import { NextResponse } from 'next/server';
import { semanticSearch, generateExplanation } from '@/lib/ai';

export async function POST(req: Request) {
  try {
    const { q, explain } = await req.json();
    if (!q || typeof q !== 'string' || q.trim() === '') {
      return NextResponse.json({ error: 'Missing query' }, { status: 400 });
    }

    const results = await semanticSearch(q, 6);
    let explanation = null;
    if (explain) {
      const topContexts = results.slice(0, 3).map(r => `${r.title}: ${r.description}`);
      explanation = await generateExplanation(q, topContexts);
    }

    return NextResponse.json({ results, explanation });
  } catch (err: any) {
    console.error('AI search error', err);
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 });
  }
}
