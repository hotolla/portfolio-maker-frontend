'use client';

import { PropsWithChildren } from 'react';
import { MainLayout } from '@/components/MainLayout';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
    <head>
      <title>Portfolio maker</title>
      <meta name="description" content="Portfolio maker" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </head>

    <body>
      <MainLayout>{children}</MainLayout>
    </body>
    </html>
  );
}
