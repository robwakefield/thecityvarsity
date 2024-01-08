'use client'

import Image from "next/image"
import { Archivo_Black } from 'next/font/google'
import { Button } from '@/components/button'

const archivo = Archivo_Black({ weight: "400", subsets: ["latin"] })

export function Partners(items: JSX.Element[], contact: JSX.Element) {
  return <div className="flex flex-col items-center w-screen bg-black px-5 justify-center">
    <div className="py-6 max-w-4xl text-center">
      <h1 className={"py-4 text-4xl text-purple "+archivo.className}>OUR PARTNERS</h1>
      <div className="w-full">
        {items}
      </div>
    </div>
    {contact}
  </div>
}

export function PartnerItem(title: string, text: String, logoPath: string, buttonText?: String, buttonLink?: string, RTL: boolean = false) {
  var button = <div></div>
  // Button will only show if buttonText and buttonFont are supplied in page.tsx
  if (buttonText !== undefined && buttonLink !== undefined) {
    button = Button(buttonText.toUpperCase(), buttonLink)
  }

  // Split text on newline
  let lines = text.split("\n").map((l) => {
    if (l.length == 0) {
      return <br/>
    } else {
      return <p className="text-l text-secondary" key={crypto.randomUUID()}>{l}</p>
    }
    })

  const flex_classname = RTL ? "md:flex-row-reverse" : "md:flex-row" 

  return <div className={"py-6 px-6 w-full text-center justify-center flex flex-col " + flex_classname} key={crypto.randomUUID()}>
    <div className="md:w-1/2 w-full">
      <Image src={logoPath} width="400" height="400" alt={title}></Image>
    </div>
    <div className="md:w-1/2 w-full">
      <h1 className={"pb-4 text-2xl text-white"}>{title}</h1>
      <div className="max-w-md">
        {lines}
      </div>
      {button}
    </div>
    </div>
}

export function PartnerContact(text: string, buttonText: String, buttonLink: string) {
  return <div className="px-6 my-6 center text-center flex flex-col items-center">
      <h1 className="text-xl text-white">{text}</h1>
      {Button(buttonText.toUpperCase(), buttonLink)}
    </div>
}
