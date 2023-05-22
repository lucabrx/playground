import { randomUUID } from "crypto";
import {s3} from "@/lib/s3"
import { NextResponse } from "next/server";
import { env } from "@/env.mjs";

export async function GET(request: Request) {

   const ex = new URL(request.url).searchParams.get("fileType")
   console.log("ex", ex);
   
   const Key = `${randomUUID()}.${ex}`;
  
    const s3Params = {
      Bucket: env.AWS_BUCKET_NAME,
      Key,
      Expires: 60,
      ContentType: `image/${ex}`,
    };
  
    const uploadUrl = await s3.getSignedUrl("putObject", s3Params);
  
    console.log("uploadUrl", uploadUrl);
  
   return NextResponse.json({ 
    uploadUrl,
    key: Key,
    });
}