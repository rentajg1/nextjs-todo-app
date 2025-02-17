'use client'

import { RoutePath } from "@/RoutePath/ RoutePath"
import Link from "next/link"
import { useRouter } from "next/navigation"
 
export default function DETAILtodo() {

  //画面遷移の変数
const ScreenTrans = useRouter();

// ユーザーがボタンを押下した時更新画面に画面遷移
const HandleAddUpdateButtonClick = () => {
  ScreenTrans.push(RoutePath.TODOUPDATE)
}

// ユーザーがボタンを押下した時削除画面に画面遷移
const HandleAddDeleteButtonClick = () => {
  ScreenTrans.push(RoutePath.TODODELETE)
}


  return (
    <div className='flex flex-col h-screen'>
      <header className='flex justify-between items-center w-full px-20  py-4'>
        <Link href={RoutePath.TODOLIST}>
          <span>TODOLIST</span>
        </Link>
        <button
          className='hidden bg-white text-blue-500 px-4 py-2 rounded-md shadow hover:bg-green-200'
        >
          仮ボタン
        </button>
      </header>
      <main className='flex items-center justify-center h-screen bg-gray-100'>
        <div className='w-96 p-6 bg-white rounded-2xl'>
          <h2 className='text-xl text-orange-950 font-semibold mb-4'>
            TODO詳細画面
          </h2>
          <form action=''>
            <input placeholder='' className='mb-4'/>
            <textarea placeholder='' className='mb-4'/>
          </form>
          <div className="flex justify-between w-full p-4">
          <button className='text-orange-950' onClick={HandleAddUpdateButtonClick}>
            更新
          </button>
          <button className='text-orange-950' onClick={HandleAddDeleteButtonClick}>
            削除
          </button>
          </div>
        </div>
      </main>
    </div>
  )
}
