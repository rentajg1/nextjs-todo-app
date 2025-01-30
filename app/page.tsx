'use client'
import { useState } from 'react'

// TODOのデータ型
interface Todo {
  id: number
  title: string
  content: string
}

export default function listHome() {
  // 初期のTODOデータ
  const [todos] = useState<Todo[]>([
    { id: 1, title: '筋トレ', content: '１８時に胸トレ' },
    { id: 2, title: '資格取得', content: '２時間資格勉強' },
    { id: 3, title: 'マラソン', content: '5km走る' },
  ])
  return (
    <div className="flex flex-col h-screen">
    <header className="w-full h-1/8 ">
      <h1 className="px-8 text-2xl ">TODOアプリ</h1>
    </header>
    <main className="flex-1 bg-gray-100 p-4 overflow-auto">
      <div className="space-y-2">
        {todos.map((todo) => (
          <div
            className="bg-white p-4 shadow rounded"
            key={todo.id}
            >
            <h1 className='text-bold'>{todo.title}</h1>
            <p>{todo.content}</p>
          </div>
        ))}
      </div>
    </main>
    <footer className='w-full text-white py-4 text-center'>
      <p>@COPY Light </p>
    </footer>
  </div>
  )
}

