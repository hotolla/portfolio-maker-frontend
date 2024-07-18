import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const HeaderTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  textAlign: 'center',
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  fontWeight: 600,
  fontSize: '2.2rem'
}));
