'use client'

import { useState } from 'react'

type Todo = {
  id: string
  title: string
  content: string
  completedAt: Date | null
}

const dummyTodos: Todo[] = [
  {
    id: '1',
    title: 'todo1',
    content: 'todo1の内容',
    completedAt: null,
  },
  {
    id: '2',
    title: 'todo2',
    content: 'todo2の内容',
    completedAt: new Date(),
  },
]

const Page = () => {
  const [todos, setTodos] = useState<Todo[]>(dummyTodos)

  return (
    <div className='w-full min-h-screen space-y-4'>
      <div className='p-4 max-w-screen-lg mx-auto'>
        <h1 className='text-3xl font-semibold'>todo一覧</h1>
      </div>
      <div className='max-w-screen-md mx-auto'>
        <div className='grid grid-cols-3 gap-3'>
          {todos.map((todo) => (
            <div
              key={todo.id}
              className='p-4 border-2 border-gray-800 rounded-lg'
            >
              <div className='w-full flex flex-col items-start gap-2'>
                <h2 className='text-xl font-semibold border-b-2 border-blue-500'>
                  {todo.title}
                </h2>
                <div className='p-2'>
                  <p className='text-gray-500 font-semibold'>内容</p>
                  <p className='pl-2'>{todo.content}</p>
                </div>
                {todo.completedAt != null ? (
                  <div className='bg-green-500 text-white px-2 py-1 rounded-lg'>
                    完了
                  </div>
                ) : (
                  <div className='bg-red-500 text-white px-2 py-1 rounded-lg'>
                    未完了
                  </div>
                )}
                <p>
                  完了日時：
                  {todo.completedAt != null
                    ? todo.completedAt.toLocaleString()
                    : ''}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
