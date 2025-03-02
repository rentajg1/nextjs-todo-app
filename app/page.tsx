'use client'
import { RoutePath } from '@/RoutePath/ RoutePath'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTodoItem } from '@/hooks/useTodoItem'
import { useEffect, useState } from 'react'

export default function ListTodo() {
  //画面遷移の変数
  const Screentrans = useRouter()
  const { todos, setTodos } = useTodoItem()

  // ユーザーがボタンを押下した時登録画面に画面遷移
  const HandleAddTodoButtonClick = () => {
    Screentrans.push(RoutePath.TODOADD)
  }
  return (
    <div className='flex flex-col h-screen'>
      <header className='flex justify-between items-center w-full px-20  py-4'>
        <Link href={RoutePath.TODOLIST}>
          <span>TODOLIST</span>
        </Link>
        <button
          onClick={HandleAddTodoButtonClick}
          className='bg-white text-blue-500 px-4 py-2 rounded-md shadow hover:bg-green-200'
        >
          TODO登録画面
        </button>
      </header>
      <main className='flex-1 bg-gray-100 p-4 overflow-auto'>
        <div className='space-y-2'>
          {todos.map((todo) => (
            <div className='bg-white p-4 shadow rounded' key={todo.id}>
              <Link href={`/detail/${todo.id}`}>
                <span className='text-bold text-black'>{todo.title}</span>
              </Link>
              <p className='text-black'>{todo.content}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className='w-full py-4 text-center'>
        <p>©︎COPY Light </p>
      </footer>
    </div>
  )
}
