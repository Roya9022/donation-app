import { AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colors } from '@/theme/colors';

export const classes = {
  toolbar: 'toolbar',
  backButton: 'backButton',
  title: 'title',
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
  },
});
