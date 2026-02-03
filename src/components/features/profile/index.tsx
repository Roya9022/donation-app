'use client';

import { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import type { User } from '@supabase/supabase-js';
import AuthForm from '@/components/features/auth-form';
import { SimpleHeader } from '@/components/shared';
import { authService } from '@/lib/supabase/auth';
import ProfileWelcome from './ProfileWelcome';
import ProfileView from './ProfileView';
// import { colors } from '@/theme';

type ProfileState = 'loading' | 'welcome' | 'signIn' | 'signUp' | 'profile';

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [state, setState] = useState<ProfileState>('loading');

  useEffect(() => {
    // Get initial user
    authService.getCurrentUser().then(currentUser => {
      setUser(currentUser);
      setState(currentUser ? 'profile' : 'welcome');
    });

    // Subscribe to auth changes
    const subscription = authService.onAuthStateChange(updatedUser => {
      setUser(updatedUser);
      if (updatedUser) {
        setState('profile');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await authService.signOut();
      setUser(null);
      setState('welcome');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const renderContent = () => {
    switch (state) {
      case 'loading':
        return (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <CircularProgress />
          </Box>
        );

      case 'welcome':
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <ProfileWelcome
              onSignIn={() => setState('signIn')}
              onSignUp={() => setState('signUp')}
            />
          </Box>
        );

      case 'signIn':
      case 'signUp':
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <AuthForm
              initialMode={state}
              onBack={() => setState('welcome')}
              onSuccess={() => setState('profile')}
            />
          </Box>
        );

      case 'profile':
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            {user && <ProfileView user={user} onLogout={handleLogout} />}
          </Box>
        );
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        // bgcolor: colors.background,
      }}
    >
      <SimpleHeader pageTitle="Profile" />
      {renderContent()}
    </Box>
  );
};

export default Profile;
