'use client'

import { RoutePath } from '@/RoutePath/ RoutePath'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ADDtodo() {
  const Screenstans = useRouter()

  const HandleBackButton = () => {
    Screenstans.push(RoutePath.TODOLIST)
  }

  const HandleAddTodoButton = () => {
    alert('登録完了しました')
    Screenstans.push(RoutePath.TODOLIST)
  }

  return (
    <div className='flex flex-col h-screen'>
      <header className='flex justify-between items-center w-full px-20  py-4'>
        <Link href={RoutePath.TODOLIST}>
          <span>TODOLIST</span>
        </Link>
      </header>
      <div className='flex items-center justify-center h-screen bg-gray-100'>
        <div className='w-96 p-6 bg-white rounded-2xl'>
          <h2 className='text-xl text-orange-950 font-semibold mb-4'>
            TODO登録
          </h2>
          <form action=''>
            <input placeholder='タイトルを入力' className='mb-4' />
            <textarea placeholder='内容を入力' className='mb-4' />
          </form>
          <button className='text-orange-950' onClick={HandleAddTodoButton}>
            登録
          </button>
        </div>
      </div>
    </div>
  )
}
