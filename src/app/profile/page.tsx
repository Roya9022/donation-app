'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Construction } from '@mui/icons-material';
import { colors } from '@/theme/colors';

const ProfilePage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '80vh',
          textAlign: 'center',
          gap: 2,
        }}
      >
        <Construction sx={{ fontSize: 48, color: colors.text.disabled }} />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600, color: colors.text.primary }}>
            Profile coming soon
          </Typography>
          <Typography variant="body2" sx={{ color: colors.text.secondary }}>
            Working on this page. Check back later!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfilePage;
