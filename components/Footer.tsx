import { Divider, Typography, Paper } from '@mui/material';

export const Footer = () => {
  return (
    <Paper color="secondary">
      <Divider/>
      <Typography variant="h6" align="center" color="primary">
        Portfolio Maker © {new Date().getFullYear()}
      </Typography>
    </Paper>
  );
};
