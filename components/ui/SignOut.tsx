import { Button } from '@mui/material';
import { signOut } from 'next-auth/react';

export function SignOut() {
  return <Button onClick={() => signOut({ callbackUrl: '/home' })}>Log out</Button>;
}
