"use client"

import { ReactNode } from 'react'
import { Notification } from '../ui/Notification'
import { useNotificationStore } from '@/store/useNotification'
import { NavBar } from '../features/NavBar'

type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {

  const { notifications, showNotification } = useNotificationStore()

  const clickHere = () => {
    // Assuming your store has an addNotification method
    showNotification('Vai', 'error', 2000)
  }

  return (
    <div
      className="min-h-screen bg-gray-50 flex flex-col justify-between">
      
      <main className="flex flex-1">
        <NavBar />
        <div className="flex flex-col w-full">
          <header className="bg-white shadow-sm">
            <div>
              {notifications.map((notification, index) => {
                return (
                  <Notification
                    key={index}
                    message={notification.message}
                    type={notification.type}
                    onClick={() => {
                      // Handle notification click
                      console.log("Notification clicked")
                    }}
                  />
                )
              })}
            </div>
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
              <h1 className="text-xl font-bold text-gray-900">My Next App</h1>
            </div>
          </header>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
            <button onClick={clickHere} className='bg-blue-200 text-black p-4'>Aqui</button>
          </div>
        </div>
      </main>
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          © {new Date().getFullYear()} My Next App
        </div>
      </footer>
    </div>
  )
}