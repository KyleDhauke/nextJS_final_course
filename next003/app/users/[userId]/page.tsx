import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts"
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";
import { getServerSideProps } from "next/dist/build/templates/pages";

type Params = {
  params: {
    userId: string
  }
}

export async function generateMetadata({ params: { userId } }:Params): Promise<Metadata> {
  const userData:Promise<User> = getUser(userId);
  const user:User = await userData

  return {
    title: user.name,
    description: `This is the page of ${user.name}`
  }
}

// export async function getServerSideProps({params: {userId}}:Params){
  
// }

export default async function UserPage({ params: { userId } }: Params) {
  const userData:Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);


  // Fetching data using Promise.all. Makes multiple requests simultaneously.
  // const [user, userPosts] = await Promise.all([userData, userPostsData])

  // Use Loading UI, Streaming and Suspense to progressively make requests.
  const user = await userData

  
  return (
    <>
    <h2>{user.name}</h2>
    <br />
    <Suspense fallback={<h2>Loading...</h2>}>
      <UserPosts promise = {userPostsData} />
    </Suspense>
    
    </>
  )
}
