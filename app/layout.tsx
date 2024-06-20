'use client';

import { PropsWithChildren } from 'react';
import Head from 'next/head';
import { MainLayout } from '@/components/MainLayout';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
    <Head>
      <title>Portfolio maker</title>
      <meta name="description" content="Portfolio maker" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>

    <body>
      <MainLayout>{children}</MainLayout>
    </body>
    </html>
  );
}
