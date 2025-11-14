'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import {
  ArrowBackRounded,
  MoreVertRounded,
  ShareRounded,
  FavoriteRounded,
  FavoriteBorderRounded,
} from '@mui/icons-material';
import text from '@/content/text.json';
import { isFavorite, toggleFavorite } from '@/utils/favorites';
import { StyledAppBar, classes } from './styles';

interface CharityDetailsHeaderProps {
  title: string;
  charityId: string;
}

const CharityDetailsHeader: React.FC<CharityDetailsHeaderProps> = ({ title, charityId }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isFav, setIsFav] = useState<boolean>(false);
  const open = Boolean(anchorEl);

  useEffect(() => {
    setIsFav(isFavorite(charityId));
  }, [charityId]);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleShare = async () => {
    handleMenuClose();
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: window.location.href,
        });
      } catch (err) {
        console.log(text.details.cancelled);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(text.details.copied);
    }
  };

  const handleToggleFavorite = () => {
    const newState = toggleFavorite(charityId);
    setIsFav(newState);
    handleMenuClose();
  };

  return (
    <StyledAppBar position="sticky" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" onClick={() => router.back()} className={classes.backButton}>
          <ArrowBackRounded />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {text.details.details}
        </Typography>
        <IconButton edge="end" onClick={handleMenuClick} className={classes.menuButton}>
          <MoreVertRounded />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleShare} className="d-flex gap-2">
            <ShareRounded className={classes.menuIcon} />
            {text.details.share}
          </MenuItem>
          <MenuItem onClick={handleToggleFavorite} className="d-flex gap-2">
            {isFav ? (
              <FavoriteRounded className={classes.favoriteIcon} />
            ) : (
              <FavoriteBorderRounded className={classes.menuIcon} />
            )}
            {isFav ? text.details.removeFavorite : text.details.addFavorite}
          </MenuItem>
        </Menu>
      </Toolbar>
    </StyledAppBar>
  );
};

export default CharityDetailsHeader;
