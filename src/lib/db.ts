// Generated by prisma/post-generate.ts

import { Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";

import {
  Generated,
  ColumnType,
} from 'kysely'



export type Account = {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string | null;
  refresh_token_expires_in: number | null;
  access_token: string | null;
  expires_at: number | null;
  token_type: string | null;
  scope: string | null;
  id_token: string | null;
  session_state: string | null
}

export type Session = {
  id: string;
  sessionToken: string;
  userId: string;
  expires: ColumnType<Date, Date | string, Date | string>
}

export type User = {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: ColumnType<Date | null, Date | null | string, Date | null | string>;
  image: string | null;
  role: string;
  createdAt: ColumnType<Date | null, Date | string, Date | string>;
  updatedAt: ColumnType<Date, Date | string, Date | string>
}

export type VerificationToken = {
  identifier: string;
  token: string;
  expires: ColumnType<Date, Date | string, Date | string>
}

export type Post = {
  id: string;
  title: string;
  content: string;
  userId: string | null;
  createdAt: ColumnType<Date | null, Date | string, Date | string>;
  updatedAt: ColumnType<Date, Date | string, Date | string>
}

export type Database = {
  Account: Account;
  Session: Session;
  User: User;
  VerificationToken: VerificationToken;
  Post: Post;
}

export const db = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL,
  }),
});