import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@/themes/themes';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box display="flex" flexDirection="column" height="100vh">
          <Header/>

          <Box flexGrow={1} overflow="auto" mt={10}>
            {children}
          </Box>

          <Box flexShrink={0}>
            <Footer />
          </Box>
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
