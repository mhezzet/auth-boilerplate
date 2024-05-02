import type { NextAuthConfig } from "next-auth";
// import GitHub from "next-auth/providers/github";
// import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "./data/user";
import bcrypt from "bcryptjs";

export default {
  providers: [
    Credentials({
      async authorize(credentials, request) {
        const validatedFields = await LoginSchema.safeParseAsync(credentials);

        if (!validatedFields.success) return null;

        const { email, password } = validatedFields.data;

        const user = await getUserByEmail(email);

        if (!user || !user.password) return null;

        const passwordMatched = await bcrypt.compare(password, user.password);

        if (!passwordMatched) return null;

        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
