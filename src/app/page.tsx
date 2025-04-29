'use client'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Counter } from '@/components/features/Counter'
import { Main } from '@/components/features/Main'

import { ReactNode } from 'react'
import { Dashboard } from '@/components/features/Dashboard';
import { useComponents } from '@/store/userComponents'

export default function Home() {
  const { page } = useComponents();

  const renderContent = (params: string): ReactNode => {
    console.log('params', params);
    switch (params) {
      case 'home':
        return <div><Main /></div>
      case 'dashboard':     
        return <div><Dashboard /></div>
      case 'profile':
        return <div>Profile</div>
      case 'table':
        return <div>Table</div>
      case 'transactions':
        return <div>Transactions</div>
      default:
        return <div>Page not found</div>
    }
  }

  return (
    <MainLayout>
      <div className="py-12">
        {/* <h1 className="text-3xl font-bold text-center mb-8">
          Welcome to My Next App { page }
        </h1> */}
        <div className="flex justify-center">
          {/* <Counter /> */}
          { renderContent(page) }
        </div>
      </div>
    </MainLayout>
  )
}