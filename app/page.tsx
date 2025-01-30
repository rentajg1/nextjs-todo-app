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
    <>
      <div className='w-full'>
        <header className='w-full text-white py-4'>
          <h1 className='text-2xl font-bold px-8'>Next.js</h1>
        </header>
        <div className='flex flex-col items-center w-full'>
          <div className='px-8'>
            {todos.map((todo) => (
              <div
                className='border rounded px-2 py-1 max-w-80 mb-10'
                key={todo.id}
              >
                <h1>{todo.title}</h1>
                <p>{todo.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className='w-full text-white py-4 text-center'>
        <p>@COPY Light </p>
      </footer>
    </>
  )
}

