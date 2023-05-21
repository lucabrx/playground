import { getCurrentSession } from "@/action/getCurrentSession";
import { db } from "@/lib/db";
import { NewPostType } from "@/schema/post.schema";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";


export async function POST(request:Request) {
    const body: NewPostType = await request.json()
    const session = await getCurrentSession(); 

    if (!session) {
        return NextResponse.redirect('/login')
    }
    if(!body.content) {
        return NextResponse.json({error: "Post can't be empty."}, {status: 400})
    }

     await db 
    .insertInto("Post")
    .values({
        id: nanoid(),
        content: body.content,
        userId: session.id,
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    .executeTakeFirstOrThrow()

    return NextResponse.json({message: "Post created."}, {status: 201})
}