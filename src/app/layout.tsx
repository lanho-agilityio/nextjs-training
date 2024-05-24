import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

// Contexts
import { AuthProvider } from '../contexts';

// Components
import { Footer, Header, ToastProvider } from '@/components';

// Styles
import './globals.css';
import theme from '../theme';

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
        <AuthProvider>
          <ToastProvider>
            <AppRouterCacheProvider options={{ key: 'css' }}>
              <ThemeProvider theme={theme}>
                <Box
                  sx={{
                    paddingBottom: {
                      xs: '20px',
                      sm: '20px',
                      lg: '32px',
                    },
                    paddingX: {
                      xs: '32px',
                      lg: '20px',
                    },
                    maxWidth: '1024px',
                    flex: '1',
                  }}
                >
                  <Header />
                  <Box>{children}</Box>
                  <Footer />
                </Box>
              </ThemeProvider>
            </AppRouterCacheProvider>
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
