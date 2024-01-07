'use client'

import Image from "next/image"
import { Archivo_Black } from 'next/font/google'
import { Button } from '@/components/button'

const archivo = Archivo_Black({ weight: "400", subsets: ["latin"] })

export function Partners(title: String, items: JSX.Element[], contact: JSX.Element) {
  return <div className="flex flex-col items-center w-screen bg-black px-5 justify-center">
    <div className="py-6 max-w-4xl text-center">
      <h1 className={"pb-4 text-4xl text-purple "+archivo.className}>{title.toUpperCase()}</h1>
      <div className="w-full">
        {items}
      </div>
    </div>
    {contact}
  </div>
}

export function PartnerItem(title: string, text: String, logoPath: string, buttonText?: String, buttonLink?: string) {
  var button = <div></div>
  // Button will only show if buttonText and buttonFont are supplied in page.tsx
  if (buttonText !== undefined && buttonLink !== undefined) {
    button = Button(buttonText.toUpperCase(), buttonLink)
  }

  // Split text on newline
  let lines = text.split("\n").map((l) => {return <p className="text-l text-secondary" key={crypto.randomUUID()}>{l}</p>})

  return <div className="py-6 w-full text-center flex flex-row" key={crypto.randomUUID()}>
      <div className="w-1/2">
        <Image src={logoPath} width="400" height="400" alt={title}></Image>
      </div>
      <div className="w-1/2">
        <h1 className={"pb-4 text-xl text-white "+archivo.className}>{title}</h1>
        <div className="max-w-md">
          {lines}
        </div>
        {button}
      </div>
    </div>
}

export function PartnerContact(text: string, buttonText: String, buttonLink: string) {
  return <div className="my-6 center text-center flex flex-col items-center">
      <h1 className="text-xl text-white">{text}</h1>
      {Button(buttonText.toUpperCase(), buttonLink)}
    </div>
}
