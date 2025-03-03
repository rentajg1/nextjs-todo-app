'use client'
import { useTodoItem } from '@/hooks/useTodoItem'
import { RoutePath } from '@/RoutePath/ RoutePath'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function AddTodo() {
  const router = useRouter()
  const { addTodo } = useTodoItem()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: '',
      content: '',
    },
  })

  const onSubmit = (data: { title: string; content: string }) => {
    addTodo(data.title, data.content)
    alert('登録完了')
    reset() // フォームをリセット
    router.push(RoutePath.TODOLIST) // 一覧ページへ遷移
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
              <input
                {...register('title', {
                  required: 'タイトルは必須です',
                  maxLength: {
                    value: 50,
                    message: 'タイトルは50文字以内で入力してください',
                  },
                })}
                placeholder='タイトルを入力'
                className='w-full p-2 border rounded text-black'
              />
              {errors.title && (
                <p className='text-red-500 text-sm'>{errors.title.message}</p>
              )}
            </div>
            <div className='mb-4'>
              <textarea
                {...register('content', {
                  required: '内容は必須です',
                  maxLength: {
                    value: 500,
                    message: '内容は500文字以内で入力してください',
                  },
                })}
                placeholder='内容を入力'
                className='w-full p-2 border rounded text-black'
              />
              {errors.content && (
                <p className='text-red-500 text-sm'>{errors.content.message}</p>
              )}
            </div>
            <button type='submit' className='text-orange-950'>
              登録
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
