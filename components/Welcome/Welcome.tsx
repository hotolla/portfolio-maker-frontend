'use client';

import { Typography, Divider, Container } from '@mui/material';
import { LoginPage } from '@/components/LoginPage';
import { SignIn } from '@/components/ui/SignIn';
import { auth } from '@/server/auth';
import { SignOut } from '@/components/ui/SignOut';

export const Welcome = async () => {
 // const session = await auth();
 //  console.log(session);
  return (
    <Container maxWidth="md">
      <Typography variant="h4" color="primary" align="center" mb={1}>
        Welcome to Portfolio Maker!
      </Typography>

      <Typography variant="body1" color="textSecondary" align="center" mt={4} mb={4}>
        Create the portfolio of your dreams with ease and joy. Your projects deserve the best showcase!
      </Typography>

      <SignIn />
      <Divider sx={{ mt: 3 }}>OR:</Divider>
      <LoginPage />
    </Container>
  );
};

