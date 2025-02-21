'use client'
import { RoutePath } from '@/RoutePath/ RoutePath'
import { TodoItem } from "@/compornemt/TodoItem"
import Link from 'next/link';
import React from "react";
import { useRouter } from 'next/navigation'
 
export default function TodoDetail({ params }: { params: Promise<{ id: string }> }) {
const { todos } = TodoItem();
const ScreenTrans = useRouter();
  
// React.use()を利用して非同期のparamsを解決React.useについてもっと調べる
const { id } = React.use(params);

// 該当のTodoデータからIDをしゅとく
const todo = todos.find((todo) => todo.id === Number(id));

if (!todo) {
  return <div>Todo not found</div>;
}

// ユーザーがボタンを押下した時更新画面に画面遷移
const HandleAddUpdateButtonClick = () => {
  console.log(todos)
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
          非表示ボタン
        </button>
      </header>
      <main className='flex items-center justify-center h-screen bg-gray-100'>
        <div className='w-96 p-6 bg-white rounded-2xl'>
          <h2 className='text-xl text-orange-950 font-semibold mb-4'>
            TODO詳細画面
          </h2>
          <label htmlFor="" className='mb-4'><span>title:</span>{todo.title}</label>
          <label htmlFor="" className='mb-4'><span>content:</span>{todo.content}</label>
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
