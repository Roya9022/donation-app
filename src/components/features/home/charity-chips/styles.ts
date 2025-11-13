import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colors } from '@/theme/colors';

export const classes = {
  chip: 'chip',
};

export const StyledChipsContainer = styled(Box)({
  display: 'flex',
  gap: 8,
  paddingTop: 12,
  overflowX: 'auto',
  paddingBottom: 8,
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },

  [`& .${classes.chip}`]: {
    backgroundColor: colors.secondaryLight,
    color: colors.secondaryPale,
    fontSize: 12,
    height: 32,
    borderRadius: 10,
    flexShrink: 0,
    '&:hover': {
      backgroundColor: colors.secondaryLight,
    },
  },
});
