'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function search() {
  const [search, setSearch] = useState('');
  const router = useRouter()
  return (
    <div>search</div>

  )
}
