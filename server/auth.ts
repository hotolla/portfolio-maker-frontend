// import NextAuth from 'next-auth';
// import { db } from '@/server';
// import { DrizzleAdapter } from '@auth/drizzle-adapter';
// import { accounts, verificationTokens, users } from '@/server/schema';
// import Github from 'next-auth/providers/github';
// import Resend from 'next-auth/providers/resend';
//
// export const { handlers, signIn, signOut, auth } = NextAuth({
//   adapter: DrizzleAdapter(db, {
//     verificationTokensTable: verificationTokens,
//     accountsTable: accounts,
//     usersTable: users
//   }),
//   secret:process.env.AUTH_SECRET,
//   providers: [ Github, Resend({
//     // from: 'koltsova.tech'
//     from: 'hotolla@gmail.com'
//   }) ]
// });
