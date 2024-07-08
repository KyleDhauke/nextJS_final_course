export default async function getUser(userId:string) {
  // const res = await fetch(`http://127.0.0.1:3000/api/users/${userId}`, { next: { revalidate: 10 }})
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

  if (!res.ok) throw new Error('failed to fetch user')

  return res.json()
}
