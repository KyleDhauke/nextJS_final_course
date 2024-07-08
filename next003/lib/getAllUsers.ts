export default async function getAllUsers() {
  // const res = await fetch('http://127.0.0.1:3000/api/users', { next: { revalidate: 10 }})
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 10 }})
  console.log("Are you winning, son?")
  if (!res.ok) throw new Error('failed to fetch data')

  return res.json()
}
