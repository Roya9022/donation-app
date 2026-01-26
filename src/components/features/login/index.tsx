import { useState } from 'react';
import { Button, Card, CardContent } from '@mui/material';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = async () => {
    setLoading(true);
    try {
      // TODO: Supabase email/password login
      console.log('Login with', email, password);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      // TODO: Supabase Google OAuth
      console.log('Login with Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="p-6 space-y-4">
          <h1 className="text-2xl font-semibold text-center">Welcome back</h1>

          <Button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2"
            disabled={loading}
          >
            Continue with Google
          </Button>

          <div className="flex items-center gap-2">
            <div className="h-px bg-gray-200 flex-1" />
            <span className="text-sm text-gray-400">or</span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full rounded border px-3 py-2"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full rounded border px-3 py-2"
          />

          <Button onClick={handleEmailLogin} className="w-full" disabled={loading}>
            Sign in
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
