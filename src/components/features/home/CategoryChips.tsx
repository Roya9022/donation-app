'use client';

import { useMemo } from 'react';
import { Box, Chip } from '@mui/material';
import { colors } from '@/theme';
import type { Charity } from 'lib/charities';

type CategoryName = string;
interface CategoryChipsProps {
  charities: Charity[];
  selectedCategory: CategoryName | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryName | null>>;
}

const CategoryChips: React.FC<CategoryChipsProps> = ({
  charities,
  selectedCategory,
  setSelectedCategory,
}) => {
  const dynamicCategories: CategoryName[] = useMemo(() => {
    const allCategories = charities.map(c => c.category);
    const uniqueCategories = [...new Set(allCategories)];
    const sortedCategories = uniqueCategories.sort();
    return ['All', ...sortedCategories];
  }, [charities]);

  const handleChipClick = (category: CategoryName) => {
    if (category === 'All') {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(prev => (prev === category ? null : category));
    }
  };

  const activeCategory = selectedCategory || 'All';

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        paddingTop: 1.5,
        overflowX: 'auto',
        pb: 1,
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {dynamicCategories.map(category => (
        <Chip
          key={category}
          label={category}
          onClick={() => handleChipClick(category)}
          clickable
          variant={activeCategory === category ? 'outlined' : 'filled'}
          color="default"
          sx={{
            backgroundColor: colors.secondaryLight,
            color: colors.secondaryPale,
            fontSize: '0.75rem',
            height: 32,
            borderRadius: 3,
            flexShrink: 0,
          }}
        />
      ))}
    </Box>
  );
};

export default CategoryChips;
