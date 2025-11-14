'use client';

import { useRouter } from 'next/navigation';
import { Toolbar, IconButton, Typography } from '@mui/material';
import { ArrowBackRounded } from '@mui/icons-material';
import { StyledAppBar, classes } from './styles';

interface SimpleHeaderProps {
  pageTitle: string;
}

const SimpleHeader: React.FC<SimpleHeaderProps> = ({ pageTitle }) => {
  const router = useRouter();

  return (
    <StyledAppBar position="sticky" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" onClick={() => router.back()} className={classes.backButton}>
          <ArrowBackRounded />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {pageTitle}
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default SimpleHeader;
