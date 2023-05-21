import { authOptions } from "@/lib/authOptions";
import { User, db } from "@/lib/db";
import { getServerSession } from "next-auth";


export async function getSession() {
    return await getServerSession(authOptions)
}

export async function getCurrentSession() {
    try {
        const session = await getSession()

        if(!session?.user?.email) return null

        const user = await db
        .selectFrom("User")
        .selectAll()
        .where("email", "=", session.user?.email)
        .executeTakeFirstOrThrow()

        return user 

    } catch(error) {
        console.error(error)
        return null
    }
}