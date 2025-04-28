// src/app/page.tsx
import { MainLayout } from '@/components/layouts/MainLayout'
import { Counter } from '@/components/features/Counter'
import { Main } from '@/components/features/Main'

export default function Home() {
  return (
    <MainLayout>
      <div className="py-12">
        <h1 className="text-3xl font-bold text-center mb-8">
          Welcome to My Next App
        </h1>
        <div className="flex justify-center">
          <Counter />
          <Main />
        </div>
      </div>
    </MainLayout>
  )
}