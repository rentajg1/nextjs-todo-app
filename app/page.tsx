'use client'
import { useRouter } from 'next/router'
import { useState } from 'react'
useRouter

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

  const handleaddtoodoButtonClick = ()  =>{
    console.log("aas");
  }
  return (
    <div className="flex flex-col h-screen">
    <header className="flex justify-between items-center w-full px-20  py-4">
      <h1 className="text-2xl ">TODOアプリ</h1>
      <button onClick={handleaddtoodoButtonClick} className="bg-white text-blue-500 px-4 py-2 rounded-md shadow hover:bg-green-200">
        todo追加する
      </button>
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

