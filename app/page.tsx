//use client
// import { useState } from 'react'

export default function listHome() {
  return (
    <div className='w-full'>
      <header className='w-full text-white py-4'>
        <h1 className='text-2xl font-bold px-8'>Next.js</h1>
      </header>
      <div className='flex flex-col items-center w-full'>
        <div className='px-8'>
          <div className='border rounded px-2 py-1 max-w-80 mb-10'>
            <h1 className='flex flex-col px-8 text-xl font-bold'>筋トレ</h1>
            <p className='flex flex-col px-8'>18時に筋トレ</p>
          </div>
          <div className='border rounded px-2 py-1 max-w-80 mb-10'>
            <h1 className='flex flex-col px-8 text-xl font-bold'>資格取得</h1>
            <p className='flex flex-col px-8'>２時間資格勉強</p>
          </div>
        </div>
      </div>
      <footer className='w-full text-white py-4 text-center'>
        <p>@COPY Light </p>
      </footer>
    </div>
  )
}

