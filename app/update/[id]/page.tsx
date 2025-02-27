'use client'

import { TodoItem } from '@/hooks/useTodoItem'
import { RoutePath } from '@/RoutePath/ RoutePath'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function UpdateTodo({
  params,
}: {
  params: Promise<{ id: number }>
}) {
  const { todos, UpdateTodo } = TodoItem()
  const ScreenTrans = useRouter()

  // React.use()を利用して非同期のparamsを解決React.useについてもっと調べる(詳細画面からコピペ)
  const { id } = React.use(params)
  // 該当のTodoデータからIDをしゅとく
  const todo = todos.find((todo) => todo.id === Number(id))

  const [title, setTitle] = useState(todo?.title || '')
  const [content, setContent] = useState(todo?.title || '')

  useEffect(() => {
    if (todo) {
      setTitle(todo.title)
      setContent(todo.content)
    }
  }, [todo])

  const HandleUpdateButtonClick = () => {
    if (!title || !content) return alert('項目を更新してください')
    UpdateTodo(id, title, content)
    console.log(UpdateTodo)
    alert('更新完了')
    ScreenTrans.push(RoutePath.TODOLIST)
  }

  if (!todo) {
    return <div>Todo not found</div>
  }

  return (
    <div className='flex flex-col h-screen'>
      <header className='flex justify-between items-center w-full px-20  py-4'>
        <Link href={RoutePath.TODOLIST}>
          <span>TODOLIST</span>
        </Link>
        <button className='hidden bg-white text-blue-500 px-4 py-2 rounded-md shadow hover:bg-green-200'>
          仮ボタン
        </button>
      </header>
      <main className='flex items-center justify-center h-screen bg-gray-100'>
        <div className='w-96 p-6 bg-white rounded-2xl'>
          <h2 className='text-xl text-orange-950 font-semibold mb-4'>
            TODO更新画面
          </h2>
          <input
            placeholder={todo.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='mb-4 text-black'
          />
          <textarea
            placeholder={todo.content}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='mb-4 text-black'
          ></textarea>
          <div className='flex justify-between w-full p-4'>
            <button
              className='text-orange-950'
              onClick={HandleUpdateButtonClick}
            >
              確定
            </button>
            <Link href={`/detail/${todo.id}`}>
              <button className='text-orange-950'>戻る</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
