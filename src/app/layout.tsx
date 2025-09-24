import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '@/theme/theme';
import { AuthProvider } from '@/contexts/AuthContext';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./globals.css";



export const metadata: Metadata = {
  title: "IMF Africa | International Ministers Forum Africa",
  description: "International Ministers Forum Africa - Empowering ministers and strengthening churches across the African continent through fellowship, training, and spiritual development programs.",
  keywords: "IMF Africa, International Ministers Forum, Africa ministry, church training, pastoral development, African churches",
  authors: [{ name: "IMF Africa" }],
  openGraph: {
    title: "IMF Africa - International Ministers Forum",
    description: "Empowering ministers and strengthening churches across Africa",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthProvider>
              {children}
            </AuthProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
