import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { lazy } from 'react';
//Contexts
import { AuthProvider } from '@/contexts/auth/authProvider';
import { PostProvider } from '@/contexts/post/postProvider';
//Components
const NavigationBar = lazy(() => import('@/components/NavigationBar'));
const Footer = lazy(() => import('@/components/Footer'));

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Stablo',
  description: 'Stablo - Blog Website',
  viewport: 'width=device-width, initial-scale=1'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <PostProvider>
            <NavigationBar />
            <main>{children}</main>
            <Footer />
          </PostProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
