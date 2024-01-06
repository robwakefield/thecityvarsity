'use client'

import { Archivo_Black } from 'next/font/google'
import { Button } from '@/components/button'

const archivo = Archivo_Black({ weight: "400", subsets: ["latin"] })

export function Contact(text: String, address: String) {
  return <div className="flex flex-col items-center w-screen justify-center bg-bg">
    <div className={"py-6 max-w-4xl text-center"}>
      <h1 className={"py-4 text-4xl text-purple "+archivo.className}>CONTACT US</h1>
      <div className='py-4 text-secondary'>
        <p>{text}</p>
      </div>
      <h1 className={"py-4 text-2xl"}>
        Imperial College Union Rugby Football Club
      </h1>
      <div className='py-4 text-secondary'>
        <p>{address}</p>
      </div>
      {Button("Send Message".toUpperCase())}
    </div>
  </div>
}
