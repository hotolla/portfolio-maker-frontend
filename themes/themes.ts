import { createTheme } from '@mui/material';
import { palette } from '@/themes/palette';
import { components } from '@/themes/components';
import { typography } from '@/themes/typography';

export const theme = createTheme({
  palette,
  typography,
  components
});
