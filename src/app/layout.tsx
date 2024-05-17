import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import './globals.css';
import { Footer, NavBar } from '@/components';
import { Box } from '@mui/material';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home',
  description: 'Post Management',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          {' '}
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                paddingBottom:{
                  xs: '20px',
                  sm: '20px',
                  lg: '32px',
                },
                paddingX:{
                  xs: '32px',
                  lg: '20px',
                },
               
                maxWidth:"1024px",
                flex: '1'
              }}
              
            >
              <NavBar />
              <div>{children}</div>
              <Footer />
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
