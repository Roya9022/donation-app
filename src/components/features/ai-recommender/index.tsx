'use client';
import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import CharityCard from '../home/charity-card';
import type { Charity } from '@/lib/charities';
import text from '@/content/text.json';

export default function AIRecommender({ initialCharities }: { initialCharities?: Charity[] }) {
  const [q, setQ] = useState('');
  const [results, setResults] = useState<Array<Charity & { score?: number }>>([]);
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState<string | null>(null);

  async function runSearch(explain = false) {
    if (!q.trim()) return;
    setLoading(true);
    setExplanation(null);
    try {
      const res = await fetch('/api/ai/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ q, explain }),
      });
      const json = await res.json();
      if (json.error) {
        alert('Error: ' + json.error);
      } else {
        setResults(json.results || []);
        if (json.explanation) setExplanation(json.explanation);
      }
    } catch (e) {
      console.error(e);
      alert('Search failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <TextField
          placeholder="Ask for recommendations (example: 'help refugees in MENA')"
          value={q}
          onChange={e => setQ(e.target.value)}
          fullWidth
          InputProps={{
            startAdornment: <Search sx={{ mr: 1 }} />,
          }}
        />
        <Button variant="contained" onClick={() => runSearch(true)} disabled={loading}>
          {loading ? 'Searching…' : 'Recommend'}
        </Button>
      </Box>

      {explanation && (
        <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
          {explanation}
        </Typography>
      )}

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {results.map(r => (
          <CharityCard key={r.id} charity={r} />
        ))}
      </Box>
    </Box>
  );
}
