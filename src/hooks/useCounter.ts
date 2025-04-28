"use client"

import { useStore } from '@/store'

export const useCounter = () => {
  const count = useStore((state) => state.count)
  const increment = useStore((state) => state.increment)
  const decrement = useStore((state) => state.decrement)

  return { count, increment, decrement }
}