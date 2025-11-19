import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colors } from '@/theme/colors';

export const classes = {
  scrollableContent: 'scrollableContent',
  imageBox: 'imageBox',
  chipContainer: 'chipContainer',
  chip: 'chip',
  cardTitle: 'cardTitle',
  description: 'description',
  buttonContainer: 'buttonContainer',
  donateButton: 'donateButton',
  visitButton: 'visitButton',
  disclaimer: 'disclaimer',
};

export const StyledDetailsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',

  [`& .${classes.scrollableContent}`]: {
    flex: 1,
    overflowY: 'auto',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 24,
      paddingRight: 24,
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: 32,
      paddingRight: 32,
    },
  },

  [`& .${classes.imageBox}`]: {
    position: 'relative',
    width: '100%',
    height: 250,
    borderRadius: 32,
    overflow: 'hidden',
    backgroundColor: colors.secondaryPale,
    marginBottom: 24,
    [theme.breakpoints.up('sm')]: {
      height: 300,
    },
    [theme.breakpoints.up('md')]: {
      height: 350,
    },
  },

  [`& .${classes.chipContainer}`]: {
    marginBottom: 16,
  },

  [`& .${classes.chip}`]: {
    backgroundColor: colors.primary,
    color: colors.white,
    fontSize: 12,
    height: 20,
    borderRadius: 20,
    [theme.breakpoints.up('sm')]: {
      height: 24,
    },
  },

  [`& .${classes.cardTitle}`]: {
    fontWeight: 700,
    marginBottom: 12,
    fontSize: 20,
    color: colors.text.primary,
    lineHeight: 1.2,
  },

  [`& .${classes.description}`]: {
    marginBottom: 32,
    color: colors.text.secondary,
    fontSize: 14,
  },

  [`& .${classes.buttonContainer}`]: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: colors.white,
    boxShadow: '0 -4px 12px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 24,
      paddingRight: 24,
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: 32,
      paddingRight: 32,
    },
  },

  [`& .${classes.donateButton}`]: {
    backgroundColor: colors.primary,
    color: colors.white,
    textTransform: 'none',
    fontSize: 16,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 16,
    fontWeight: 600,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: colors.pastel.green.dark,
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    },
  },

  [`& .${classes.visitButton}`]: {
    color: colors.primary,
    borderColor: colors.primary,
    textTransform: 'none',
    fontSize: 16,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 16,
    fontWeight: 500,
    borderWidth: 2,
    '&:hover': {
      borderColor: colors.primary,
      backgroundColor: colors.primaryShadow,
      borderWidth: 2,
    },
  },

  [`& .${classes.disclaimer}`]: {
    marginTop: 16,
    color: colors.text.disabled,
    lineHeight: 1.5,
  },
}));
