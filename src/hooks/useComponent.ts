"use client"

import { useComponents } from '@/store/userComponents'

export const useCounter = () => {
  const page = useComponents((state) => state.page)
  const pageContent = useComponents((state) => state.pageContent)

  return { page, pageContent }
}