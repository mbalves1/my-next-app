"use client"
import React from 'react'

type NotificationsProps = {
  onClick?: () => void
  type?: 'success' | 'error' | 'info' | 'warning'
  message?: string
  className?: string
}

export function Notification({ message = "Sucesso!", onClick, type = 'success' }: NotificationsProps) {
  const baseStyles = "fixed top-4 right-4 p-4 rounded shadow-lg text-white transition-opacity z-50 px-4 py-2 rounded-md font-medium w-[500px]"
  const variantStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-200 text-gray-800",
    info: "bg-blue-200 text-gray-800",
    warning: "bg-orange-200 text-gray-800",
  }
  
  return (
    <div>
      <div 
        className={`${baseStyles} ${variantStyles[type]}`}
        onClick={onClick}
      >
        {message}
      </div>
    </div>
  )
}