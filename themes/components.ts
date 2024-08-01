import { palette } from '@/themes/palette';

export const components = {
  MuiButton: {
    styleOverrides: {
      textPrimary: {
        '&:hover': {
          color: palette.error.main
        }
      }
    }
  }
};
