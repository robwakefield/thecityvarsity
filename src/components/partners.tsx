'use client'

import Image from "next/image"
import { Archivo_Black } from 'next/font/google'
import { Button } from '@/components/button'

const archivo = Archivo_Black({ weight: "400", subsets: ["latin"] })

export function Partners(items: JSX.Element[], contact: JSX.Element) {
  return <div className="flex flex-col items-center w-screen bg-black px-5 justify-center">
    <div className="py-6 text-center">
      <h1 className={"py-4 text-4xl text-purple "+archivo.className}>OUR PARTNERS</h1>
      <div>
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
      // Two newlines (\n\n) in text produce a linebreak
      return <br key={crypto.randomUUID()}/>
    } else {
      return <p className="text-l text-secondary" key={crypto.randomUUID()}>{l}</p>
    }
    })

  const flex_classname = RTL ? "md:flex-row-reverse" : "md:flex-row" 

  return <div className={"py-6 px-6 max-w-6xl text-center justify-center flex flex-col " + flex_classname} key={crypto.randomUUID()}>
      <div className="md:max-w-xl md:px-5 w-full px-0">
        <Image src={logoPath} width="0" height="0" style={{width: '100%', height: 'auto', objectFit: 'contain'}} alt={title}></Image>
      </div>
      <div className="md:max-w-xl md:px-5 w-full px-0 flex flex-col justify-center">
        <h1 className={"pb-4 text-2xl text-white"}>{title}</h1>
        <div>
          {lines}
        </div>
        {button}
      </div>
    </div>
}

export function PartnerContact(text: string, buttonText: String, buttonLink: string) {
  return <div className="px-6 mb-6 md:my-6 center text-center flex flex-col items-center">
      <h1 className="text-xl text-white">{text}</h1>
      {Button(buttonText.toUpperCase(), buttonLink)}
    </div>
}
