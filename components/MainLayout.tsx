import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@/themes/themes';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>{children}</div>
    </ThemeProvider>
  );
};
