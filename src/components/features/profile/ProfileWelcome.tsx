'use client';

import { Box, Typography, Button } from '@mui/material';
import { PersonAddOutlined, LoginOutlined } from '@mui/icons-material';
import { colors } from '@/theme';

interface ProfileWelcomeProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

const ProfileWelcome: React.FC<ProfileWelcomeProps> = ({ onSignIn, onSignUp }) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 400,
        mx: 'auto',
        p: 3,
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
        Welcome
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Sign in or create an account to save your favorites and more
      </Typography>
      <Button
        fullWidth
        variant="contained"
        startIcon={<LoginOutlined />}
        onClick={onSignIn}
        sx={{
          py: 1.5,
          mb: 2,
          textTransform: 'none',
          bgcolor: colors.primary,
          '&:hover': {
            bgcolor: colors.primary,
            opacity: 0.9,
          },
        }}
      >
        Sign In
      </Button>
      <Button
        fullWidth
        variant="outlined"
        startIcon={<PersonAddOutlined />}
        onClick={onSignUp}
        sx={{
          py: 1.5,
          textTransform: 'none',
          //   borderColor: colors.border,
          color: colors.text.primary,
          '&:hover': {
            borderColor: colors.primary,
          },
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};
export default ProfileWelcome;
