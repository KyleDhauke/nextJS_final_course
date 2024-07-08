import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import React from 'react';
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Users'
}

export default async function UsersPage() {
  const usersData:Promise<User[]> = getAllUsers();
  const users = await usersData

  // console.log('Hello')

  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {users.map(user => {
        return (
          <React.Fragment key={user.id}>
            <p>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </React.Fragment>
        )
      })}
    </section>
  )
  return content;
}
