import { useState } from 'react'
import Image from 'next/image'
import { title } from 'process';

let  listdetal: {
  id: number,
  title: string;
  content: string;
  is_completed: boolean
}[] = [
  {id: 1, title: "資格取得", content: "2025年1月までに取得する" , is_completed: false},
  {id: 2, title: "ランニング", content: "18時に走りに行く" , is_completed: true},
  {id: 2, title: "筋トレ", content: "胸の日" , is_completed: false}
];

export default function Home() {
  return (
    <div>
      <h1>TODOList</h1>
      <div>
      <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <div>
        {/* <ul>
          {listdetal.map(

          )}
        </ul> */}
      </div>
    </div>
  )
}

