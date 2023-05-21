import { getCurrentSession } from "@/action/getCurrentSession"
import AllPosts from "@/components/AllPosts"
import AuthBtn from "@/components/AuthBtn"
import PostForm from "@/components/PostForm"

export default async function Home() {
  const session = await getCurrentSession()
    return (
      <div className="min-h-screen w-screen flex justify-center items-center ">
        <div className="flex w-full justify-center items-center flex-col space-y-2 ">
        <h1>Home</h1>
        <p>This is the home page.</p>
        <AuthBtn session={session} />
        <h2 className="text-lg font-medium">{session?.email}</h2>
        <h2 className="text-lg font-medium">{session?.name}</h2>
        <h2 className="text-lg font-medium">{session?.id}</h2>
        <h2 className="text-lg font-medium">{session?.role}</h2>
        </div>
       
       <PostForm session={session} />
       <AllPosts  />


      </div>
    )
}