import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "./lib/db";
import Nodemailer from "next-auth/providers/nodemailer";

export const { auth, handlers, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  adapter: MongoDBAdapter(client),
  ...authConfig,
  providers: [
    ...authConfig.providers,
    Nodemailer({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      name: "Email",
    }),
  ],
});
