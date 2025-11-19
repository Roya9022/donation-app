'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import {
  ArrowBackRounded,
  MoreVertRounded,
  ShareRounded,
  FavoriteRounded,
  FavoriteBorderRounded,
} from '@mui/icons-material';
import { colors } from '@/theme';
import text from '@/content/text.json';

interface CharityDetailsHeaderProps {
  title: string;
}

const CharityDetailsHeader: React.FC<CharityDetailsHeaderProps> = ({ title }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const open = Boolean(anchorEl);

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
    setIsFavorite(!isFavorite);
    handleMenuClose();
    // TODO: Save to localStorage or database
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: colors.secondary,
        borderBottom: `1px solid ${colors.shadow}`,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton edge="start" onClick={() => router.back()} sx={{ color: colors.secondaryPale }}>
          <ArrowBackRounded />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            color: colors.secondaryPale,
            fontWeight: 600,
            fontSize: '16px',
            flex: 1,
            textAlign: 'center',
            px: 2,
          }}
        >
          {text.details.details}
        </Typography>
        <IconButton edge="end" onClick={handleMenuClick} sx={{ color: colors.secondaryPale }}>
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
          <MenuItem onClick={handleShare}>
            <ShareRounded sx={{ mr: 1.5, fontSize: 20 }} />
            {text.details.share}
          </MenuItem>
          <MenuItem onClick={handleToggleFavorite}>
            {isFavorite ? (
              <FavoriteRounded sx={{ mr: 1.5, fontSize: 20, color: colors.primary }} />
            ) : (
              <FavoriteBorderRounded sx={{ mr: 1.5, fontSize: 20 }} />
            )}
            {isFavorite ? text.details.removeFavorite : text.details.addFavorite}
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default CharityDetailsHeader;
