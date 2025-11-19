'use client';

import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

type Props = { children: React.ReactNode };

const theme = createTheme({
  palette: {
    primary: {
      main: '#9caf',
    },
    secondary: {
      main: '#96b9d0',
    },
    text: {
      primary: '#212121',
      secondary: '#616161',
      disabled: '#9e9e9e',
    },
  },
  typography: {
    fontFamily: `${geistSans.variable}, ${geistMono.variable}, Arial, sans-serif`,
  },
});

export function ThemeProvider({ children }: Props) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
