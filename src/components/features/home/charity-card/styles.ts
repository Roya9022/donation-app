import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colors } from '@/theme/colors';

export const classes = {
  favoriteIconComponent: 'favoriteIconComponent',
  favoriteIconEnabled: 'favoriteIconEnabled',
  favoriteIconDisabled: 'favoriteIconDisabled',
  mainOuterBox: 'mainOuterBox',
  chip: 'chip',
  imageBox: 'imageBox',
  cardContent: 'cardContent',
  cardContentText: 'cardContentText',
  cardContentDesc: 'cardContentDesc',
};

export const StyledCharityCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: 16,
  padding: 16,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  borderRadius: 32,
  position: 'relative',
  '&:hover': {
    boxShadow: theme.shadows[6],
    transform: 'translateY(-4px)',
  },

  [`& .${classes.favoriteIconComponent}`]: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 10,
    backgroundColor: colors.white,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    '&:hover': {
      backgroundColor: colors.white,
      transform: 'scale(1.1)',
    },
    transition: 'all 0.2s ease',
  },

  [`& .${classes.favoriteIconEnabled}`]: {
    fontSize: 20,
    color: colors.primary,
  },

  [`& .${classes.favoriteIconDisabled}`]: {
    fontSize: 20,
    color: colors.text.secondary,
  },

  [`& .${classes.mainOuterBox}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
    flexShrink: 0,
  },

  [`& .${classes.chip}`]: {
    backgroundColor: colors.primary,
    color: colors.white,
    fontSize: 12,
    height: 20,
    borderRadius: 10,
    [theme.breakpoints.up('sm')]: {
      height: 24,
    },
  },

  [`& .${classes.imageBox}`]: {
    position: 'relative',
    width: 80,
    height: 80,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: colors.secondaryPale,
    [theme.breakpoints.up('sm')]: {
      width: 100,
      height: 100,
    },
    [theme.breakpoints.up('md')]: {
      width: 120,
      height: 120,
    },
  },

  [`& .${classes.cardContent}`]: {
    alignSelf: 'center',
    flex: 1,
    padding: 0,
    paddingRight: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    '&:last-child': { paddingBottom: 0 },
  },

  [`& .${classes.cardContentText}`]: {
    color: colors.text.primary,
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 1.3,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },

  [`& .${classes.cardContentDesc}`]: {
    color: colors.text.secondary,
    fontSize: 12,
    lineHeight: 1.4,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      WebkitLineClamp: 3,
    },
  },
}));
