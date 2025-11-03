'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import { EmotionCacheProvider } from '@/providers/EmotionCache';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <EmotionCacheProvider>
          {children}
        </EmotionCacheProvider>
      </body>
    </html>
  );
}
