import { styled } from '@mui/material/styles';
import { colors } from '@/theme/colors';

export const classes = {
  iconActive: 'iconActive',
  iconInactive: 'iconInactive',
  textActive: 'textActive',
  textInactive: 'textInactive',
};

export const StyledBottomNavigation = styled('nav')(() => ({
  position: 'fixed',
  width: '100%',
  right: 0,
  left: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  zIndex: 10,
  borderStyle: 'solid',
  borderWidth: '1px 0 0 0',
  borderColor: colors.shadow,
  backgroundColor: colors.white,
  padding: '8px 16px',
  borderTopLeftRadius: '32px',
  borderTopRightRadius: '32px',
  boxShadow: '0px -4px 12px rgba(0, 0, 0, 0.08)',

  [`& .${classes.iconActive}`]: {
    color: colors.primary,
  },

  [`& .${classes.iconInactive}`]: {
    color: colors.text.disabled,
  },

  [`& .${classes.textActive}`]: {
    color: colors.primary,
    fontWeight: 500,
  },

  [`& .${classes.textInactive}`]: {
    color: colors.text.secondary,
  },
}));
