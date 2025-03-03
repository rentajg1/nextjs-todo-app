'use client'
import { RoutePath } from '@/RoutePath/ RoutePath'
import DeleteConfirmModal from '@/components/DeleteConfirmModal'
import { useTodoItem } from '@/hooks/useTodoItem'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function DetailTodo({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { todos, deleteTodo } = useTodoItem()
  const ScreenTrans = useRouter()
  const [todoId, settodoId] = useState<string | null>(null)
  //モーダル状態管理
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    params.then((resolveParams) => {
      settodoId(resolveParams.id)
    })
  }, [params])

  // 該当のTodoデータからIDを取得_明示的にNumber型すると画面表示できた
  const todo = todos.find((todo) => Number(todo.id) === Number(todoId))

  if (!todo) {
    return <div>Todo not found</div>
  }

  //削除ボタンクリック時にモーダルを開く
  const HandleDeleteButtonClick = () => {
    setIsModalOpen(true)
  }

  // ユーザーがボタンを押下した時削除処理の実装
  const handleConfirmDelete = () => {
    if (todo) {
      deleteTodo(todo.id) // 削除処理実行
      setIsModalOpen(false)
      ScreenTrans.push(RoutePath.TODOLIST) // 削除後、一覧画面へ
    }
  }

  return (
    <div className='flex flex-col h-screen'>
      <header className='flex justify-between items-center w-full px-20  py-4'>
        <Link href={RoutePath.TODOLIST}>
          <span>TODOLIST</span>
        </Link>
        <button className='hidden bg-white text-blue-500 px-4 py-2 rounded-md shadow hover:bg-green-200'>
          非表示ボタン
        </button>
      </header>
      <main className='flex items-center justify-center h-screen bg-gray-100'>
        <div className='w-96 p-6 bg-white rounded-2xl'>
          <h2 className='text-xl text-orange-950 font-semibold mb-4'>
            TODO詳細画面
          </h2>
          <label htmlFor='' className='mb-4 text-black'>
            <span>title:</span>
            {todo.title}
          </label>
          <label htmlFor='' className='mb-4 text-black'>
            <span>content:</span>
            {todo.content}
          </label>
          <div className='flex justify-between w-full p-4'>
            <Link href={`/update/${todo.id}`}>
              <button className='text-orange-950'>更新</button>
            </Link>
            <button
              className='text-orange-950'
              onClick={HandleDeleteButtonClick}
            >
              削除
            </button>
          </div>
        </div>
      </main>

      {/*削除確認モーダル */}
      <DeleteConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} //モーダルをとじる
        onConfirm={handleConfirmDelete} //削除処理を実行
      />
    </div>
  )
}
