"use client"

import { useCounter } from '@/hooks/useCounter'
import { Button } from '@/components/ui/Button'

export function Counter() {
  const { count, increment, decrement } = useCounter()
  
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">Counter: {count}</h2>
      <div className="flex gap-2">
        <Button onClick={decrement}>Decrease</Button>
        <Button onClick={increment}>Increase</Button>
      </div>
    </div>
  )
}