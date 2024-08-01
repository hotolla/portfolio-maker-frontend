import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import clientPromise from '@/server/lib/db';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import Resend from '@auth/core/providers/resend';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.AUTH_SECRET,
  providers: [
    GitHub,
    Resend({
      apiKey: process.env.AUTH_RESEND_KEY,
      from: 'olla@koltsova.tech'
    })
  ]
});
