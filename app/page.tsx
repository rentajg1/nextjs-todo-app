'use client'

import Link from 'next/link'

import Header from '@/components/Header'
import { useTodoItem } from '@/hooks/useTodoItem'
import { RoutePath } from '@/RoutePath/ RoutePath'

export default function listHome() {
  //画面遷移の変数
  const { todos } = useTodoItem()

  return (
    <div className='flex flex-col h-screen'>
      <Header isHidden={false} />
      <main className='w-full flex-1 bg-gray-100 p-4 overflow-auto'>
        <div className='space-y-2 max-w-screen-md mx-auto'>
          {todos.map((todo) => (
            <div className='bg-white p-4 shadow rounded' key={todo.id}>
              <Link href={RoutePath.TODO_DETAIL(todo.id.toString())}>
                <span className='text-xl font-bold text-black'>
                  {todo.title}
                </span>
              </Link>
              <p className='px-2 text-black'>{todo.content}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className='w-full py-4 text-center'>
        <p>©︎copylight</p>
      </footer>
    </div>
  )
}
