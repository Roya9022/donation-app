'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';
import CharityCard from '@/components/features/home/charity-card';
import { getAllCharities } from 'lib/charities';
import { getFavorites } from '@/utils/favorites';
import type { Charity } from 'lib/charities';
import { SimpleHeader } from '@/components/features';
import { StyledFavoritesBox, classes } from './styles';
import text from '@/content/text.json';

const Favorites = () => {
  const [favoriteCharities, setFavoriteCharities] = useState<Charity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const favoriteIds = getFavorites();
    const allCharities = getAllCharities();
    const favorites = allCharities.filter(charity => favoriteIds.includes(charity.id));
    setFavoriteCharities(favorites);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const handleFocus = () => {
      const favoriteIds = getFavorites();
      const allCharities = getAllCharities();
      const favorites = allCharities.filter(charity => favoriteIds.includes(charity.id));
      setFavoriteCharities(favorites);
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  if (isLoading) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  return (
    <StyledFavoritesBox>
      <SimpleHeader pageTitle={text.favorites.favoriteTitle} />
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
    </StyledFavoritesBox>
  );
};

export default Favorites;
