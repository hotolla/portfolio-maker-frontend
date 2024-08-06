import { PropsWithChildren } from 'react';
import { auth } from '@/server/auth';
import { redirect } from 'next/navigation';

export default async function AuthGuardLayout({ children }: PropsWithChildren) {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  return children;
}
