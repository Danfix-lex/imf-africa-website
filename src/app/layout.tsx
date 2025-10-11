import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { CssBaseline, Box } from '@mui/material';
import { AuthProvider } from '@/contexts/AuthContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "IMF Africa | International Ministers Forum",
    template: "%s | IMF Africa"
  },
  description: "International Ministers Forum Africa - Empowering ministers and strengthening ministries across the African continent through fellowship, training, and spiritual development programs.",
  keywords: "IMF Africa, International Ministers Forum, Africa ministry, pastoral development, African ministries",
  authors: [{ name: "IMF Africa" }],
  creator: "IMF Africa",
  publisher: "IMF Africa",
  openGraph: {
    title: "IMF Africa - International Ministers Forum",
    description: "Empowering ministers and strengthening ministries across Africa",
    type: "website",
    siteName: "IMF Africa",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/favicon-16x16.png' },
      { url: '/favicon-32x32.png' },
      { url: '/favicon-48x48.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <CssBaseline />
            <AuthProvider>
              <Box component="main" sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {children}
              </Box>
            </AuthProvider>
            <PerformanceMonitor />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}