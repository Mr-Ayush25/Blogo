import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/connect";
import { User } from "@/models/User";
import bcrypt from "bcrypt";

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect();

        try {
          // check wheather the user is available or not
          const user = await User.findOne({ email: credentials.email });

          if (!user) {
            throw new Error("User not found");
          }
          // Check password
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordCorrect) {
            throw new Error("Try to login with correct Credentials");
          }
          return user;
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],

  pages: {
    error: "/dashboard/login",
  },
});

export { handler as GET, handler as POST };
