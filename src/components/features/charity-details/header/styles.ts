import { AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colors } from '@/theme/colors';

export const classes = {
  toolbar: 'toolbar',
  backButton: 'backButton',
  title: 'title',
  menuButton: 'menuButton',
  menuIcon: 'menuIcon',
  favoriteIcon: 'favoriteIcon',
};

export const StyledAppBar = styled(AppBar)({
  backgroundColor: colors.secondary,
  borderBottom: `1px solid ${colors.shadow}`,

  [`& .${classes.toolbar}`]: {
    justifyContent: 'space-between',
  },

  [`& .${classes.backButton}`]: {
    color: colors.secondaryPale,
  },

  [`& .${classes.title}`]: {
    color: colors.secondaryPale,
    fontWeight: 600,
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: '0 !important',
  },

  [`& .${classes.menuButton}`]: {
    color: colors.secondaryPale,
  },

  [`& .${classes.menuIcon}`]: {
    marginRight: 12,
    fontSize: 20,
  },

  [`& .${classes.favoriteIcon}`]: {
    marginRight: 12,
    fontSize: 20,
    color: colors.primary,
  },
});
