import React from 'react'
import Link from 'next/link'


export default function About() {
  const dummyError = true;
  if (dummyError){
    throw new Error('Not today buckaroo!');
  }
  return (
    <>
        <h1>About</h1>
        <Link href = "/"> Link to Home Page </Link>
    </>
    
  )
}
