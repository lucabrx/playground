import { getCurrentSession } from "@/action/getCurrentSession";
import { db } from "@/lib/db";
import { NewPostType } from "@/schema/post.schema";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";



export async function GET(request: NextRequest) {
    const url3 = new URL(request.url).searchParams.get("fileType")
    console.log(url3)
    const url = new URL(request.nextUrl).searchParams.get("page")
    const url2= new URL(request.nextUrl).searchParams.get("limit")
  
    const posts = await db
    .selectFrom("Post")
    .innerJoin("User", "User.id", "Post.userId")
    .limit(Number(url2))
    .offset(Number(url))
    .select("Post.id")
    .select("Post.content")
    .select("Post.createdAt")
    .select("User.email")
    .select("User.name")
    .select("User.image")
    .select("Post.userId")
    .orderBy("Post.createdAt", "desc")
    .execute()

   const joinedPosts = posts.map((post) => {
    return {
        
        id: post.id,
        userId: post.userId,
        content: post.content,
        createdAt: post.createdAt,
        email: post.email,
        name: post.name,
        userImage: post.image
    }
    })
    return NextResponse.json(joinedPosts)
}

