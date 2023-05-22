import { env } from "@/env.mjs";
import S3 from "aws-sdk/clients/s3";

export const s3 = new S3({
  apiVersion: "2006-03-01",
  accessKeyId: env.AWS_ACCESS_KEY_ID,
  secretAccessKey: env.AWS_SECRET_KEY_ID,
  region: env.AWS_REGION,
  signatureVersion: "v4",
});