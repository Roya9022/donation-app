import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colors } from '@/theme/colors';

export const classes = {
  innerBoxWithData: 'innerBox',
  innerBoxWithoutData: 'innerBoxWithoutData',
  favoriteBorder: 'FavoriteBorder',
  noFavoritesText: 'noFavoritesText',
  noFavoritesDesc: 'noFavoritesDesc',
};

export const StyledFavoritesBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',

  [`& .${classes.innerBoxWithData}`]: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    flexGrow: 1,
    padding: '16px 16px 72px 16px',
  },

  [`& .${classes.innerBoxWithoutData}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    marginBottom: '30vh',
    padding: 16,
  },

  [`& .${classes.favoriteBorder}`]: {
    fontSize: 80,
    color: colors.text.disabled,
    marginBottom: theme.spacing(2),
  },

  [`& .${classes.noFavoritesText}`]: {
    color: colors.text.secondary,
    marginBottom: theme.spacing(1),
  },

  [`& .${classes.noFavoritesDesc}`]: {
    color: colors.text.disabled,
  },
}));
