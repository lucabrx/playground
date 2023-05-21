import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";



export async function GET(request: NextRequest) {


    const posts = await db
    .selectFrom("Post")
    .innerJoin("User", "User.id", "Post.userId")
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