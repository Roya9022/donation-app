'use client';

import { Poppins } from 'next/font/google';
import { EmotionCacheProvider } from '@/providers/EmotionCache';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // adjust as needed
  variable: '--font-poppins',
});

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <EmotionCacheProvider>{children}</EmotionCacheProvider>
      </body>
    </html>
  );
}
