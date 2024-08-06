import NextAuth from 'next-auth';
import clientPromise from '@/server/lib/db';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import Resend from '@auth/core/providers/resend';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.AUTH_SECRET,
  providers: [
    Resend({
      apiKey: process.env.AUTH_RESEND_KEY,
      from: process.env.AUTH_RESEND_FROM
    })
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    }
  }
});
