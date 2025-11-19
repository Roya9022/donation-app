'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CardContent, Typography, Chip, Box, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import type { Charity } from '@/lib/charities';
import { isFavorite, toggleFavorite } from '@/utils/favorites';
import { StyledCharityCard, classes } from './styles';

interface CharityCardProps {
  charity: Charity;
}

const CharityCard: React.FC<CharityCardProps> = ({ charity }) => {
  const router = useRouter();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(isFavorite(charity.id));
  }, [charity.id]);

  const handleClick = () => router.push(`/charities/${charity.id}`);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newState = toggleFavorite(charity.id);
    setIsFav(newState);
  };

  return (
    <StyledCharityCard onClick={handleClick} variant="elevation" elevation={0}>
      <IconButton
        onClick={handleFavoriteClick}
        className={classes.favoriteIconComponent}
        size="small"
      >
        {isFav ? (
          <Favorite className={classes.favoriteIconEnabled} />
        ) : (
          <FavoriteBorder className={classes.favoriteIconDisabled} />
        )}
      </IconButton>
      <Box className={classes.mainOuterBox}>
        <Chip label={charity.category} size="small" className={classes.chip} />
        <Box className={classes.imageBox}>
          <Image
            src={`/images/foundations/${charity.image}`}
            alt={charity.title}
            fill
            priority={parseInt(charity.id) <= 6}
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 600px) 80px, (max-width: 900px) 100px, 120px"
          />
        </Box>
      </Box>
      <CardContent className={classes.cardContent}>
        <Typography variant="h6" className={classes.cardContentText}>
          {charity.title}
        </Typography>
        <Typography variant="body2" className={classes.cardContentDesc}>
          {charity.description}
        </Typography>
      </CardContent>
    </StyledCharityCard>
  );
};

export default CharityCard;
