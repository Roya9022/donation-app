import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const classes = {
  indicator: 'indicator',
  indicatorContent: 'indicatorContent',
  spinnerContainer: 'spinnerContainer',
  backgroundCircle: 'backgroundCircle',
  progressCircle: 'progressCircle',
  icon: 'icon',
  text: 'text',
  content: 'content',
};

interface StyledPullContainerProps {
  indicatorBgColor: string;
  indicatorColor: string;
  textColor: string;
  pullDistance: number;
  isRefreshing: boolean;
}

export const StyledPullContainer = styled(Box, {
  shouldForwardProp: prop =>
    prop !== 'indicatorBgColor' &&
    prop !== 'indicatorColor' &&
    prop !== 'textColor' &&
    prop !== 'pullDistance' &&
    prop !== 'isRefreshing',
})<StyledPullContainerProps>(
  ({ indicatorBgColor, indicatorColor, textColor, pullDistance, isRefreshing }) => ({
    height: '100%',
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
    position: 'relative',

    [`& .${classes.indicator}`]: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: pullDistance,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: indicatorBgColor,
      zIndex: 10,
      transition: isRefreshing ? 'none' : 'height 0.3s ease',
      overflow: 'visible',
    },

    [`& .${classes.indicatorContent}`]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      opacity: Math.min(pullDistance / 80, 1),
    },

    [`& .${classes.spinnerContainer}`]: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
    },

    [`& .${classes.backgroundCircle}`]: {
      color: 'rgba(0, 0, 0, 0.1)',
      position: 'absolute',
    },

    [`& .${classes.progressCircle}`]: {
      color: indicatorColor,
      position: 'absolute',
      transform: 'rotate(-90deg) !important',
    },

    [`& .${classes.icon}`]: {
      color: indicatorColor,
      fontSize: 24,
      transition: 'transform 0.1s ease',
      position: 'absolute',
    },

    [`& .${classes.text}`]: {
      color: textColor,
      fontSize: 12,
      fontWeight: 500,
    },

    [`& .${classes.content}`]: {
      paddingTop: Math.max(pullDistance, 0),
      transition: isRefreshing ? 'none' : 'padding-top 0.3s ease',
    },
  }),
);
