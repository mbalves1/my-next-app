"use client"

import { useCounter } from '@/hooks/useCounter'

export function Main() {
  const { count } = useCounter()
  
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">Main Counter: {count}</h2>
    </div>
  )
}