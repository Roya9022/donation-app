'use client';

import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';
import CharityCard from '@/components/features/home/charity-card';
import { PullToRefresh } from '@/components/shared';
import { getAllCharities } from '@/lib/charities';
import { getFavorites } from '@/utils/favorites';
import type { Charity } from '@/lib/charities';
import { SimpleHeader } from '@/components/shared';
import { colors } from '@/theme';
import { StyledFavoritesBox, classes } from './styles';
import text from '@/content/text.json';

const Favorites: React.FC = () => {
  const [favoriteCharities, setFavoriteCharities] = useState<Charity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadFavorites = () => {
    const favoriteIds = getFavorites();
    const allCharities = getAllCharities();
    const favorites = allCharities.filter(charity => favoriteIds.includes(charity.id));
    setFavoriteCharities(favorites);
  };

  useEffect(() => {
    loadFavorites();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const handleFocus = () => {
      loadFavorites();
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const handleRefresh = async () => {
    loadFavorites();
  };

  if (isLoading) {
    return (
      <StyledFavoritesBox>
        <SimpleHeader pageTitle={text.favorites.favoriteTitle} />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Typography>Loading...</Typography>
        </Box>
      </StyledFavoritesBox>
    );
  }

  return (
    <StyledFavoritesBox>
      <SimpleHeader pageTitle={text.favorites.favoriteTitle} />
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
          {favoriteCharities.length > 0 ? (
            <Box className={classes.innerBoxWithData}>
              {favoriteCharities.map(charity => (
                <CharityCard key={charity.id} charity={charity} />
              ))}
            </Box>
          ) : (
            <Box className={classes.innerBoxWithoutData}>
              <FavoriteBorder className={classes.favoriteBorder} />
              <Typography variant="h6" className={classes.noFavoritesText} textAlign="center">
                {text.favorites.noFavorites}
              </Typography>
              <Typography variant="body2" className={classes.noFavoritesDesc} textAlign="center">
                {text.favorites.noFavoritesDesc}
              </Typography>
            </Box>
          )}
        </PullToRefresh>
      </Box>
    </StyledFavoritesBox>
  );
};

export default Favorites;
