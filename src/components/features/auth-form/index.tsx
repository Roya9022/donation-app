'use client';

import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  Alert,
  CircularProgress,
} from '@mui/material';
import { Google, ArrowBackOutlined } from '@mui/icons-material';
import { authService } from '@/lib/supabase/auth';
import { colors } from '@/theme';

interface AuthFormProps {
  initialMode: 'signIn' | 'signUp';
  onBack: () => void;
  onSuccess?: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ initialMode, onBack, onSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(initialMode === 'signUp');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      if (isSignUp) {
        await authService.signUp(email, password, fullName);
        setSuccess('Check your email to confirm your account!');
        setEmail('');
        setPassword('');
        setFullName('');
      } else {
        await authService.signIn(email, password);
        onSuccess?.();
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setError(null);
    setLoading(true);

    try {
      await authService.signInWithGoogle();
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      setLoading(false);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 400, mx: 'auto', p: 3 }}>
      <Button
        startIcon={<ArrowBackOutlined />}
        onClick={onBack}
        sx={{ mb: 2, color: colors.text.secondary, textTransform: 'none' }}
      >
        Back
      </Button>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, textAlign: 'center' }}>
        {isSignUp ? 'Create Account' : 'Welcome Back'}
      </Typography>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {success}
        </Alert>
      )}
      <Button
        fullWidth
        variant="outlined"
        startIcon={<Google />}
        onClick={handleGoogleAuth}
        disabled={loading}
        sx={{
          mb: 3,
          py: 1.5,
          textTransform: 'none',
          //   borderColor: colors.border,
          color: colors.text.primary,
          '&:hover': {
            borderColor: colors.primary,
            bgcolor: 'rgba(0, 0, 0, 0.02)',
          },
        }}
      >
        Continue with Google
      </Button>
      <Divider sx={{ mb: 3 }}>
        <Typography variant="body2" color="text.secondary">
          or
        </Typography>
      </Divider>
      <Box component="form" onSubmit={handleEmailAuth}>
        {isSignUp && (
          <TextField
            fullWidth
            label="Full Name"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            disabled={loading}
            sx={{ mb: 2 }}
          />
        )}
        <TextField
          fullWidth
          type="email"
          label="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          disabled={loading}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          disabled={loading}
          sx={{ mb: 3 }}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{
            py: 1.5,
            textTransform: 'none',
            bgcolor: colors.primary,
            '&:hover': {
              bgcolor: colors.primary,
              opacity: 0.9,
            },
          }}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : isSignUp ? (
            'Sign Up'
          ) : (
            'Sign In'
          )}
        </Button>
      </Box>
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Button
          onClick={() => {
            setIsSignUp(!isSignUp);
            setError(null);
            setSuccess(null);
          }}
          disabled={loading}
          sx={{ textTransform: 'none', color: colors.primary }}
        >
          {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
        </Button>
      </Box>
    </Box>
  );
};
export default AuthForm;
