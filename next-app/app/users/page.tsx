import React from 'react'

interface User {
  id: number;
  name: string;
}

interface Point {
  x: number;
  y: number;
}

interface SetPoint {
  (x: number, y: number): void;
}

const hello:SetPoint = () => {}

const UsersPage = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    {cache: 'no-store'}
  );

  const users: User[] = await res.json();
  
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default UsersPage