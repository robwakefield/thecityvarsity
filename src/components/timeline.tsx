'use client'

import { Archivo_Black } from 'next/font/google'

const archivo = Archivo_Black({ weight: "400", subsets: ["latin"] })

export function Timeline(items: JSX.Element[]) {
  return <div className="flex flex-col items-center w-screen px-5 justify-center bg-bg">
    <div className="pt-16 pb-12 max-w-5xl text-center">
      <h1 className={"pb-4 text-4xl text-purple "+archivo.className}>SCHEDULE OF EVENTS</h1>
      <div className="py-6 w-full divide-y divide-secondary/50">
        {items}
        <div key={crypto.randomUUID()}></div>
      </div>
    </div>
  </div>
}

export function TimelineItem(title: string, text: String, time: String, location: String, date?: String) {
  return <div className={"py-4 md:py-10 w-full flex md:flex-row flex-col text-primary"} key={crypto.randomUUID()}>
      <div className="md:w-1/4 text-left pb-4">
        <h1 className="text-3xl text-purple ">{date}</h1>
      </div>

      <div className="md:w-1/2 text-left">
        <h1 className="pb-0 md:pb-4 text-2xl">{title}</h1>
        <p className="text-md text-secondary md:pb-4 hidden md:flex">{text}</p>
      </div>

      <div className="md:w-1/4 md:text-right text-left">
        <h1 className="text-xl">{time}</h1>
        <p className="text-md text-secondary">{location}</p>
        <p className="text-md text-secondary py-4 md:pb-0 md:hidden">{text}</p>
      </div>
    </div>
}
