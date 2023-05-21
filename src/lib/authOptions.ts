import { type NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { KyselyAdapter } from "./kyselyAdapter";
import {env} from "@env"

export const authOptions: NextAuthOptions = {
  adapter: KyselyAdapter,
  providers: [
    GithubProvider({
    clientId: env.GITHUB_CLIENT_ID,
    clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
};