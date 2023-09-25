import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import { AuthProvider } from '../contexts/auth/authProvider';
import { PostProvider } from '../contexts/post/postProvider';

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
            <main>
              <NavigationBar />
              {children}
              <Footer />
            </main>
          </PostProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
