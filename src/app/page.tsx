"use client"
import { signIn } from "next-auth/react"
export default function Home() {
    return (
      <div>
        <h1>Home</h1>
        <p>This is the home page.</p>

        <button onClick={() => signIn("github")}>signin</button>

      </div>
    )
}