"use client"

import { useState } from "react"

export function NavBar() {
  const [widthSideBar, setWidthSideBar] = useState(true)

  return (
    <div
      className={`${widthSideBar ? 'w-[300px]' : 'w-[80px]'} h-screen bg-yellow-500 transition-all duration-200`}
    >
      <div className="flex flex-col items-center gap-4">
        Nav Bar
        <button
          onClick={() => setWidthSideBar(!widthSideBar)}
          className="cursor-pointer bg-blue-900 text-white p-1 rounded-2xl">
          0
        </button>
      </div>
    </div>
  )
}