'use client';

import { useMemo } from 'react';
import { Chip } from '@mui/material';
import type { Charity } from 'lib/charities';
import { StyledChipsContainer, classes } from './styles';

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
    <StyledChipsContainer>
      {dynamicCategories.map(category => (
        <Chip
          key={category}
          label={category}
          onClick={() => handleChipClick(category)}
          clickable
          variant={activeCategory === category ? 'outlined' : 'filled'}
          color="default"
          className={classes.chip}
        />
      ))}
    </StyledChipsContainer>
  );
};

export default CategoryChips;
