'use client';

import { useState, useMemo } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import { colors } from '@/theme';
import type { Charity } from 'lib/charities';
import Greeting from './Greeting';
import CharityCard from './CharityCard';
import text from '@/content/text.json';
import CategoryChips from './CategoryChips';

interface CharitiesListProps {
  charities: Charity[];
}

const Home: React.FC<CharitiesListProps> = ({ charities }) => {
  const [filter, setFilter] = useState('');
  type CategoryName = string;
  const [selectedCategory, setSelectedCategory] = useState<CategoryName | null>(null);

  const filtered = useMemo(() => {
    return charities.filter(charity => {
      // const isKnownCategory = CATEGORIES.includes(charity.category as CategoryName);

      const matchesCategory = selectedCategory ? charity.category === selectedCategory : true;
      const matchesFilter =
        charity.title.toLowerCase().includes(filter.toLowerCase()) ||
        charity.category.toLowerCase().includes(filter.toLowerCase()) ||
        charity.description.toLowerCase().includes(filter.toLowerCase());
      return matchesCategory && matchesFilter;
    });
  }, [charities, filter, selectedCategory]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <Box
        sx={{
          p: { xs: 2, sm: 3, md: 4 },
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          backgroundColor: colors.secondary,
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <Greeting />
        <TextField
          label=""
          placeholder={text.home.search}
          variant="filled"
          fullWidth
          value={filter}
          onChange={e => setFilter(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <Search fontSize="small" sx={{ color: colors.secondaryTextLight, mr: 1 }} />
              ),
            },
          }}
          sx={{
            backgroundColor: colors.secondaryLight,
            borderRadius: 2,
            '& .MuiFilledInput-root': {
              backgroundColor: colors.secondaryLight,
              borderRadius: 2.5,
              padding: '10px 12px',
              '&:before, &:after': { display: 'none' },
            },
            '& .MuiInputBase-input::placeholder': {
              color: colors.secondaryTextLight,
              opacity: 1,
            },
            '& .MuiFilledInput-input': {
              padding: '0 !important',
              caretColor: colors.secondaryPale,
              color: colors.secondaryPale,
            },
          }}
        />
        <CategoryChips
          charities={charities}
          selectedCategory={selectedCategory}
          setSelectedCategory={
            setSelectedCategory as React.Dispatch<React.SetStateAction<string | null>>
          }
        />
      </Box>
      <Box sx={{ flex: 1, overflowY: 'auto', p: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pb: 8 }}>
          {filtered.map(charity => (
            <CharityCard key={charity.id} charity={charity} />
          ))}
        </Box>
        {filtered.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              {text.home.notFound}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {text.home.adjustSearch}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
