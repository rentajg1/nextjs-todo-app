import Link from 'next/link'

import { RoutePath } from '@/RoutePath/ RoutePath'

type props = {
  isHidden: boolean
}

export default function Header({ isHidden }: props) {
  return (
    <header className='flex justify-between items-center w-full px-20 py-4'>
      <h1 className='text-2xl font-bold'>
        <Link href={RoutePath.TODO_LIST}>TODOリスト</Link>
      </h1>
      <Link
        href={RoutePath.TODO_ADD}
        className={`px-4 py-1 bg-green-500 text-sm rounded-full shadow-md font-semibold text-white hover:bg-green-600 duration-300 ${
          isHidden ? 'hidden' : ''
        }`}
      >
        TODO登録画面
      </Link>
    </header>
  )
}
