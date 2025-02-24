'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import Header from '@/components/Header'
import { useTodoItem } from '@/hooks/useTodoItem'
import { RoutePath } from '@/RoutePath/ RoutePath'

// TODOのデータ型
type Todo = {
  id: number
  title: string
  content: string
}

export default function Add() {
  const router = useRouter()
  const { addTodo } = useTodoItem()

  const { register, handleSubmit } = useForm<Todo>()

  const onSubmit = handleSubmit((data) => {
    addTodo(data.title, data.content)
    alert('TODOを登録しました')
    router.push(RoutePath.TODO_LIST)
  })

  return (
    <div className='flex flex-col h-screen'>
      <Header isHidden={true} />
      <div className='flex items-center justify-center h-screen bg-gray-100'>
        <div className='w-96 p-6 bg-white rounded-2xl'>
          <h2 className='text-xl text-orange-950 font-semibold mb-4'>
            TODO登録
          </h2>
          <form onSubmit={onSubmit} className='space-y-4'>
            <div className='space-y-2'>
              <label htmlFor='' className='text-sm font-semibold'>
                タイトル
              </label>
              <input
                placeholder='タイトルを入力'
                {...register('title')}
                className='w-full border border-gray-300 rounded-md p-2'
              />
            </div>
            <div>
              <label htmlFor='' className='text-sm font-semibold'>
                内容
              </label>
              <textarea
                placeholder='内容を入力'
                {...register('content')}
                className='w-full border border-gray-300 rounded-md p-2 max-h-56'
              />
            </div>
            <div className='w-full flex justify-center'>
              <button
                type='submit'
                className='px-4 py-2 bg-green-500 rounded-md shadow-md font-semibold text-white hover:bg-green-600 duration-300'
              >
                登録
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
