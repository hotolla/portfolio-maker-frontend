import React from 'react';
import { CssBaseline } from '@mui/material';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CssBaseline />
      <div>{children}</div>
    </>
  );
};
