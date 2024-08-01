'use client';

import { signIn } from 'next-auth/react';
import { Button, Container, Stack, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export function SignIn() {
  const handleSubmit = (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email');

    signIn('resend', {
      email,
      callbackUrl: '/create-portfolio'
    });
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField type="email" name="email" placeholder="Email" />
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            request sign in link
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
