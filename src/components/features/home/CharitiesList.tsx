'use client';

import { useState } from 'react';
import type { Charity } from 'data/charities';
import CharityCard from './CharityCard';
import { TextField } from '@mui/material';

interface CharitiesListProps {
  charities: Charity[];
}

const CharitiesList: React.FC<CharitiesListProps> = ({ charities }) => {
  const [filter, setFilter] = useState('');

  const filtered = charities.filter(c => c.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="p-4">
      <TextField
        label="Search charities..."
        variant="outlined"
        fullWidth
        value={filter}
        onChange={e => setFilter(e.target.value)}
        className="mb-4"
      />
      <div className="flex flex-wrap justify-start gap-2">
        {filtered.map(charity => (
          <CharityCard key={charity.id} charity={charity} />
        ))}
      </div>
    </div>
  );
};

export default CharitiesList;
