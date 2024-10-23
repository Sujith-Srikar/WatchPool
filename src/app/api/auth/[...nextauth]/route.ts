import { prismaClient } from "@/lib/db";
import NextAuth, { type DefaultSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

declare module "next-auth"{
  interface Session{
    user:{
      id: string
    } & DefaultSession["user"]
  }
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET ?? "secret",
  callbacks: {
    async signIn(params) {
      if (!params.user.email) {
        return false;
      }

      try {
        const existingUser = await prismaClient.user.findUnique({
          where: {
            email: params.user.email,
          },
        });
        if (existingUser) {
          return true;
        }
        await prismaClient.user.create({
          data: {
            email: params.user.email,
            provider: "Google",
          },
        });
        return true;
      } catch (e) {
        return false;
      }
    },
    async session({ session, token, user }) {

      console.log("Session:", session);
      console.log("Token:", token);
      console.log("User:", user);

      const dbUser = await prismaClient.user.findUnique({
        where: {
          email: session.user.email as string,
        },
      });
      
      console.log("DB User:", dbUser);
      if (!dbUser) {
        return session;
      }

      return {
        ...session,
        user: {
          ...session.user, // Keep the existing session user info
          id: dbUser.id, // Attach the database ID to the session
        },
      };
    },
  },
});


export { handler as GET, handler as POST }