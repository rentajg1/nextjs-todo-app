'use client'

import { RoutePath } from '@/RoutePath/ RoutePath'
import { useRouter } from 'next/navigation'

export default function ADDtodo() {
  const Screenstans = useRouter()

  const HandleBackButton = () => {
    Screenstans.push(RoutePath.TODOLIST)
  }
  const HandleAddTodoButton = () => {
    alert("ああ");
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-96 p-6 shadow-lg bg-white rounded-2xl">
        <h2 className="text-xl font-semibold mb-4">TODO 登録</h2>
        <form action="">
        <input
          placeholder="タイトルを入力"
          className="mb-4"
        />
        <textarea
          placeholder="内容を入力"
          className="mb-4"
        />
        </form>
        <button className="w-full"onClick={HandleAddTodoButton}>
          登録
        </button>
        <button onClick={HandleBackButton}>戻る</button>
      </div>
    </div>
  )
}
