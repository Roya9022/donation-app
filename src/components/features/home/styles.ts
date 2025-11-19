import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colors } from '@/theme/colors';

export const classes = {
  headerContainer: 'headerContainer',
  searchField: 'searchField',
  contentContainer: 'contentContainer',
  cardsContainer: 'cardsContainer',
  emptyState: 'emptyState',
  emptyTitle: 'emptyTitle',
  emptySubtitle: 'emptySubtitle',
};

export const StyledHomeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  overflow: 'hidden',

  [`& .${classes.headerContainer}`]: {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    backgroundColor: colors.secondary,
    position: 'sticky',
    top: 0,
    zIndex: 100,
    [theme.breakpoints.up('sm')]: {
      padding: 24,
    },
    [theme.breakpoints.up('md')]: {
      padding: 32,
    },
  },

  [`& .${classes.searchField}`]: {
    backgroundColor: colors.secondaryLight,
    borderRadius: 16,
    '& .MuiFilledInput-root': {
      backgroundColor: colors.secondaryLight,
      borderRadius: 20,
      padding: '10px 12px',
      '&:before, &:after': { display: 'none' },
    },
    '& .MuiInputBase-input::placeholder': {
      color: colors.secondaryTextLight,
      opacity: 1,
    },
    '& .MuiFilledInput-input': {
      padding: '0 !important',
      caretColor: colors.secondaryPale,
      color: colors.secondaryPale,
    },
  },

  [`& .${classes.contentContainer}`]: {
    padding: 16,
    [theme.breakpoints.up('sm')]: {
      padding: 24,
    },
    [theme.breakpoints.up('md')]: {
      padding: 32,
    },
  },

  [`& .${classes.cardsContainer}`]: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    paddingBottom: 64,
  },

  [`& .${classes.emptyState}`]: {
    textAlign: 'center',
    paddingTop: 64,
    paddingBottom: 64,
  },

  [`& .${classes.emptyTitle}`]: {
    color: colors.text.secondary,
  },

  [`& .${classes.emptySubtitle}`]: {
    color: colors.text.secondary,
    marginTop: 8,
  },
}));
