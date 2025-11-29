'use client';

import { useState, useMemo } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import { colors } from '@/theme';
import Greeting from './greeting';
import CharityCard from './charity-card';
import CategoryChips from './charity-chips';
import type { Charity } from '@/lib/charities';
import { PullToRefresh } from '@/components/shared';
import text from '@/content/text.json';
import { StyledHomeContainer, classes } from './styles';
// import AIRecommender from '../ai-recommender';
interface CharitiesListProps {
  charities: Charity[];
}

const Home: React.FC<CharitiesListProps> = ({ charities: initialCharities }) => {
  const [filter, setFilter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [charities, setCharities] = useState<Charity[]>(initialCharities);

  const filtered = useMemo(() => {
    return charities.filter(charity => {
      const matchesCategory = selectedCategory ? charity.category === selectedCategory : true;
      const matchesFilter =
        charity.title.toLowerCase().includes(filter.toLowerCase()) ||
        charity.category.toLowerCase().includes(filter.toLowerCase()) ||
        charity.description.toLowerCase().includes(filter.toLowerCase());
      return matchesCategory && matchesFilter;
    });
  }, [charities, filter, selectedCategory]);

  const handleRefresh = async () => {
    setCharities([...initialCharities]);
  };

  return (
    <StyledHomeContainer>
      <Box className={classes.headerContainer}>
        <Greeting />
        {/* <AIRecommender /> */}
        <TextField
          label=""
          placeholder={text.home.search}
          variant="filled"
          fullWidth
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className={classes.searchField}
          slotProps={{
            input: {
              startAdornment: (
                <Search fontSize="small" sx={{ color: colors.secondaryTextLight, mr: 1 }} />
              ),
            },
          }}
        />
        <CategoryChips
          charities={charities}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box sx={{ flex: 1, overflow: 'hidden' }}>
        <PullToRefresh
          onRefresh={handleRefresh}
          indicatorColor={colors.primary}
          indicatorBgColor="rgba(255, 255, 255, 0.95)"
          textColor={colors.text.primary}
          pullText={text.pullToRefresh.pull}
          releaseText={text.pullToRefresh.release}
          refreshingText={text.pullToRefresh.refreshing}
        >
          <Box className={classes.contentContainer}>
            <Box className={classes.cardsContainer}>
              {filtered.map(charity => (
                <CharityCard key={charity.id} charity={charity} />
              ))}
            </Box>
            {filtered.length === 0 && (
              <Box className={classes.emptyState}>
                <Typography variant="h6" className={classes.emptyTitle}>
                  {text.home.notFound}
                </Typography>
                <Typography variant="body2" className={classes.emptySubtitle}>
                  {text.home.adjustSearch}
                </Typography>
              </Box>
            )}
          </Box>
        </PullToRefresh>
      </Box>
    </StyledHomeContainer>
  );
};

export default Home;
