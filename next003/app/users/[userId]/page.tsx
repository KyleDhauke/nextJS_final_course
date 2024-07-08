import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts"
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import { notFound } from "next/navigation";

type Params = {
  params: {
    userId: string
  }
}

export async function generateMetadata({ params: { userId } }:Params): Promise<Metadata> {
  const userData:Promise<User> = getUser(userId);
  const user:User = await userData

  if (!user.name) {
    return {
      title: "User Not Found"
    }
  }

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

  if (!user.name) return notFound();
  
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


// For 'app router' apps, for each path returned by the function, getStaticProps()
// is used, causing the page the page to be pre-built each time.
export async function generateStaticParams(){
  const usersData:Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map(user => ({
    userId: user.id.toString()
  }))
}
