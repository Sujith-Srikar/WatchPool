import { prismaClient } from "@/lib/db";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { z } from "zod";

const emailSchema = z
  .string({ message: "Email is required" })
  .email({ message: "Invalid email" });

const passwordSchema = z
  .string({ message: "Password is required" })
  .min(8, { message: "Password must be at least 8 characters" })
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
    message:
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
  });

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? " ",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? " ",
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<any> {
            try {
                const user = await prismaClient.user.findUnique({
                  where: {
                    email: credentials?.email,
                  },
                });
            } catch (err: any) {
                throw new Error(err)
            }
      }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET ?? "secret",
  callbacks: {
    async signIn(params) {
      if (!params.user.email) return false;

      try {
        const user = await prismaClient.user.create({
          data: {
            email: params.user.email,
            provider: "Google",
          },
        });
      } catch (e) {}
      return true;
    },
  },
};