'use client'
import { RoutePath } from '@/RoutePath/ RoutePath'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTodoItem } from '@/hooks/useTodoItem'

export default function ListTodo() {
  //画面遷移の変数
  const router = useRouter()
  const { todos } = useTodoItem()

  // ユーザーがボタンを押下した時登録画面に画面遷移
  const handleAddTodoButtonClick = () => {
    router.push(RoutePath.TODOADD)
  }

  return (
    <div className='flex flex-col h-screen'>
      <header className='flex justify-between items-center w-full px-20  py-4'>
        <Link href={RoutePath.TODOLIST}>
          <span>TODOLIST</span>
        </Link>
        <button
          onClick={handleAddTodoButtonClick}
          className='bg-white text-black px-4 py-2 rounded-md shadow hover:bg-white-200'
        >
          TODO登録画面
        </button>
      </header>
      <main className='flex-1 bg-gray-100 p-4 overflow-auto'>
        <div className='space-y-2'>
          {todos.map((todo) => (
            <div className='bg-white p-4 shadow rounded my-2' key={todo.id}>
              <Link href={`/detail/${todo.id}`}>
                <h2 className='text-1xl text-black'>{todo.title}</h2>
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
