'use client'

import { RoutePath } from "@/RoutePath/ RoutePath"
import Link from "next/link"

export default function UpdateTodo() {
  return (
    <div className='flex flex-col h-screen'>
      <header className='flex justify-between items-center w-full px-20  py-4'>
        <Link href={RoutePath.TODOLIST}>
          <span>TODOLIST</span>
        </Link>
        <button
          className='hidden bg-white text-blue-500 px-4 py-2 rounded-md shadow hover:bg-green-200'
        >
          仮ボタン
        </button>
      </header>
      <div>
        <p>更新画面</p>
      </div>
    </div>
  )
}
