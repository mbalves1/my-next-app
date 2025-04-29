"use client"

import { useState } from "react"
import { Camera } from 'lucide-react';
import { useComponents } from "@/store/userComponents";

export function NavBar() {
  const { pageContent } = useComponents();
  const [widthSideBar, setWidthSideBar] = useState(true)
  const [click, setClicked] = useState('home')

  const handleClickRouter = (params: string) => {
    pageContent(params)
    setClicked(params)
  }

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

        <ul className="flex flex-col gap-4">
          <li
            className={`${!widthSideBar ? 'mx-auto bg-blue-900 p-2 rounded-2xl' : `${click === 'home' ? 'w-[230px] rounded-l-2xl' : 'w-[200px] rounded-2xl'} ml-[15px] bg-blue-900 text-white px-4 py-1 flex items-center gap-2}`}`}
            onClick={() => handleClickRouter('home')}
          >
            <Camera color="red" size={16} />
            {widthSideBar ? (
              <span>
                Main
              </span>
            ) : ''}
          </li>
          <li
            className={`
              ${!widthSideBar ? 'mx-auto bg-blue-900 p-2 rounded-2xl' : `${click === 'dashboard' ? 'w-[230px] rounded-l-2xl' : 'w-[200px] rounded-2xl'} ml-[15px] bg-blue-900 text-white px-4 py-1 flex items-center gap-2}`}`}
            onClick={() => handleClickRouter('dashboard')}
          >
            <Camera color="red" size={16} />
            {widthSideBar ? (
              <span>
                Dashboard
              </span>
            ) : ''}
          </li>
          <li
            className={`${click === 'table' ? 'w-[230px] rounded-l-2xl' : 'w-[200px] rounded-2xl'} ml-[15px] bg-blue-900 text-white  px-4 py-1 flex items-center gap-2`}
            onClick={() => handleClickRouter('table')}>
            <Camera color="red" size={16} />
            <span>
              Table
            </span>
          </li>
          <li
            className={`${click === 'transactions' ? 'w-[230px] rounded-l-2xl' : 'w-[200px] rounded-2xl'} ml-[15px] bg-blue-900 text-white  px-4 py-1 flex items-center gap-2`}
            onClick={() => handleClickRouter('transactions')}>
            <Camera color="red" size={16} />
            <span>
              Transactions
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}