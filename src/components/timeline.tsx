'use client'

import { NextFont } from "next/dist/compiled/@next/font";
import { Archivo_Black } from 'next/font/google'

const archivo = Archivo_Black({ weight: "400", subsets: ["latin"] })

export function Timeline(title: String, items: JSX.Element[]) {
  return <div className="flex flex-col items-center w-screen px-5 justify-center bg-bg">
    <div className="pt-16 pb-12 max-w-5xl text-center">
      <h1 className={"pb-4 text-4xl text-purple "+archivo.className}>{title.toUpperCase()}</h1>
      <div className="py-6 w-full divide-y divide-secondary/50">
        {items}
        <div></div>
      </div>
    </div>
  </div>
}

export function TimelineItem(title: string, text: String, time: String, location: String, date?: String) {
  return <div className={"py-10 w-full flex flex-row text-primary"} key={crypto.randomUUID()}>
      <div className="w-1/4 text-left">
        <h1 className="text-3xl text-purple ">{date}</h1>
      </div>
      <div className="w-1/2 text-left ">
        <h1 className="pb-4 text-2xl">{title}</h1>
        <p className="text-md text-secondary">{text}</p>
      </div>
      <div className="w-1/4 text-right ">
        <h1 className="text-xl">{time}</h1>
        <p className="text-md text-secondary">{location}</p>
      </div>
    </div>
}
