'use client';

import { Box, Typography, Avatar, Button, Paper } from '@mui/material';
import { LogoutOutlined, EmailOutlined } from '@mui/icons-material';
import type { User } from '@supabase/supabase-js';
import { colors } from '@/theme';

interface ProfileViewProps {
  user: User;
  onLogout: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ user, onLogout }) => {
  const displayName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'User';
  const avatarUrl = user.user_metadata?.avatar_url;

  return (
    <Box sx={{ width: '100%', maxWidth: 500, mx: 'auto', p: 3 }}>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: 2,
          //   border: `1px solid ${colors.border}`,
          textAlign: 'center',
        }}
      >
        <Avatar
          src={avatarUrl}
          sx={{
            width: 100,
            height: 100,
            mx: 'auto',
            mb: 2,
            bgcolor: colors.primary,
            fontSize: '2.5rem',
          }}
        >
          {displayName[0]?.toUpperCase()}
        </Avatar>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
          {displayName}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            mb: 3,
          }}
        >
          <EmailOutlined sx={{ fontSize: 18, color: colors.text.secondary }} />
          <Typography variant="body2" color="text.secondary">
            {user.email}
          </Typography>
        </Box>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<LogoutOutlined />}
          onClick={onLogout}
          sx={{
            py: 1.5,
            textTransform: 'none',
            // borderColor: colors.border,
            color: colors.text.primary,
            '&:hover': {
              borderColor: 'red',
              color: 'red',
              bgcolor: 'rgba(211, 47, 47, 0.04)',
            },
          }}
        >
          Log Out
        </Button>
      </Paper>
    </Box>
  );
};
export default ProfileView;
