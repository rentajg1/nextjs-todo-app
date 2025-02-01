'use client'

import { RoutePath } from '@/RoutePath/ RoutePath'
import { useRouter } from 'next/navigation'

export default function ADDtodo() {
  const Screenstans = useRouter()

  const handlebackButton = () => {
    Screenstans.push(RoutePath.TODOLIST)
  }

  return (
    <div>
      <h1>TODOを登録する</h1>
      <div>
        <button onClick={handlebackButton}>戻る</button>
      </div>
    </div>
  )
}
