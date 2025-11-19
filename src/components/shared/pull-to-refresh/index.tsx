'use client';

import { useRef, useState, ReactNode } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { Refresh } from '@mui/icons-material';
import { StyledPullContainer, classes } from './styles';
import { colors } from '@/theme';
import text from '@/content/text.json';

interface PullToRefreshProps {
  onRefresh: () => Promise<void> | void;
  children: ReactNode;
  pullThreshold?: number;
  refreshDuration?: number;
  indicatorColor?: string;
  indicatorBgColor?: string;
  textColor?: string;
  pullText?: string;
  releaseText?: string;
  refreshingText?: string;
}

const PullToRefresh: React.FC<PullToRefreshProps> = ({
  onRefresh,
  children,
  pullThreshold = 80,
  refreshDuration = 1000,
  indicatorColor = colors.primary,
  indicatorBgColor = colors.shadow,
  textColor = colors.darkGrey,
  pullText = text.pullToRefresh.pull,
  releaseText = text.pullToRefresh.release,
  refreshingText = text.pullToRefresh.refreshing,
}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const isPulling = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (containerRef.current && containerRef.current.scrollTop === 0) {
      startY.current = e.touches[0].clientY;
      isPulling.current = true;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isPulling.current || isRefreshing) return;

    const currentY = e.touches[0].clientY;
    const distance = currentY - startY.current;

    if (distance > 0 && containerRef.current && containerRef.current.scrollTop === 0) {
      const resistance = Math.min(distance * 0.5, 150);
      setPullDistance(resistance);
    }
  };

  const handleTouchEnd = async () => {
    if (pullDistance > pullThreshold && !isRefreshing) {
      setIsRefreshing(true);
      try {
        await onRefresh();
      } catch (error) {
        console.error('Refresh error:', error);
      }
      setTimeout(() => {
        setIsRefreshing(false);
        setPullDistance(0);
      }, refreshDuration);
    } else {
      setPullDistance(0);
    }
    isPulling.current = false;
  };

  const progress = Math.min((pullDistance / pullThreshold) * 100, 100);
  const iconRotation = progress * 3.6;

  return (
    <StyledPullContainer
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      indicatorBgColor={indicatorBgColor}
      indicatorColor={indicatorColor}
      textColor={textColor}
      pullDistance={pullDistance}
      isRefreshing={isRefreshing}
    >
      <Box className={classes.indicator}>
        {pullDistance > 0 && (
          <Box className={classes.indicatorContent}>
            <Box className={classes.spinnerContainer}>
              {isRefreshing ? (
                <CircularProgress size={40} sx={{ color: indicatorColor }} />
              ) : (
                <>
                  <CircularProgress
                    variant="determinate"
                    value={100}
                    size={40}
                    thickness={3}
                    className={classes.backgroundCircle}
                  />
                  <CircularProgress
                    variant="determinate"
                    value={progress}
                    size={40}
                    thickness={3}
                    className={classes.progressCircle}
                  />
                  <Refresh
                    className={classes.icon}
                    sx={{
                      transform: `rotate(${iconRotation}deg)`,
                    }}
                  />
                </>
              )}
            </Box>
            <Typography variant="body2" className={classes.text}>
              {isRefreshing
                ? refreshingText
                : pullDistance > pullThreshold
                  ? releaseText
                  : pullText}
            </Typography>
          </Box>
        )}
      </Box>
      <Box className={classes.content}>{children}</Box>
    </StyledPullContainer>
  );
};

export default PullToRefresh;
