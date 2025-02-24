'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

import Header from '@/components/Header'
import { useTodoItem } from '@/hooks/useTodoItem'
import { RoutePath } from '@/RoutePath/ RoutePath'

export default function Detail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { todos } = useTodoItem()
  const router = useRouter()

  // React.use()を利用して非同期のparamsを解決React.useについてもっと調べる
  const { id } = React.use(params)

  // 該当のTodoデータからIDをしゅとく
  const todo = todos.find((todo) => todo.id === Number(id))

  if (!todo) {
    return <div>Todo not found</div>
  }

  // ユーザーがボタンを押下した時更新画面に画面遷移
  const HandleAddUpdateButtonClick = () => {
    console.log(todos)
    router.push(RoutePath.TODO_UPDATE)
  }

  // ユーザーがボタンを押下した時削除画面に画面遷移
  const HandleAddDeleteButtonClick = () => {
    router.push(RoutePath.TODO_DELETE)
  }

  return (
    <div className='flex flex-col h-screen'>
      <Header isHidden={true} />
      <main className='flex items-center justify-center h-screen bg-gray-100'>
        <div className='w-96 p-6 bg-white rounded-2xl'>
          <h2 className='text-xl text-orange-950 font-semibold mb-4'>
            TODO詳細画面
          </h2>
          <label htmlFor='' className='mb-4'>
            <span>title:</span>
            {todo.title}
          </label>
          <label htmlFor='' className='mb-4'>
            <span>content:</span>
            {todo.content}
          </label>
          <div className='flex justify-between w-full p-4'>
            <button
              className='text-orange-950'
              onClick={HandleAddUpdateButtonClick}
            >
              更新
            </button>

            <button
              className='text-orange-950'
              onClick={HandleAddDeleteButtonClick}
            >
              削除
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
