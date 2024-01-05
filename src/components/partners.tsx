'use client'

import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image"
import { useRouter } from "next/navigation";

export function Partners(title: String, titleFont: NextFont, items: JSX.Element[], contact: JSX.Element) {
  return <div className="flex flex-col items-center w-screen bg-black px-5 justify-center">
    <div className="py-6 max-w-4xl text-center">
      <h1 className={"pb-4 text-4xl text-purple "+titleFont.className}>{title.toUpperCase()}</h1>
      <div className="w-full">
        {items}
      </div>
    </div>
    {contact}
  </div>
}

export function PartnerItem(title: string, titleFont: NextFont, text: String, textFont: NextFont, logoPath: string, buttonText?: String, buttonFont?: NextFont, buttonLink?: string) {
  const router = useRouter()
  var button = <div></div>
  // Button will only show if buttonText and buttonFont are supplied in page.tsx
  if (buttonText !== undefined && buttonFont !== undefined && buttonLink !== undefined) {
    button = <div>
      <button className={"bg-purple rounded-sm mt-4 "+buttonFont.className} onClick={() => router.push(buttonLink)}>
        <h1 className="py-4 px-8 text-lg text-primary">{buttonText.toUpperCase()}</h1>
      </button>
    </div>
  }

  // Split text on newline
  let lines = text.split("\n").map((l) => {return <p className={"text-l text-secondary "+textFont.className}>{l}</p>})

  return <div className="py-6 w-full text-center flex flex-row" key={crypto.randomUUID() }>
      <div className="w-1/2">
        <Image src={logoPath} width="400" height="400" alt={title}></Image>
      </div>
      <div className="w-1/2">
        <h1 className={"pb-4 text-xl text-white "+titleFont.className}>{title}</h1>
        <div className="max-w-md">
          {lines}
        </div>
        {button}
      </div>
    </div>
}

export function PartnerContact(text: string, textFont: NextFont, buttonText: String, buttonFont: NextFont, buttonLink: string) {
  const router = useRouter()
  var button = <div>
      <button className={"bg-purple rounded-sm "+buttonFont.className} onClick={() => router.push(buttonLink)}>
        <h1 className="py-4 px-8 text-lg text-primary">{buttonText.toUpperCase()}</h1>
      </button>
    </div>

  return <div className="my-6 center text-center flex flex-col items-center">
      <h1 className={"pb-4 text-xl text-white "+textFont.className}>{text}</h1>
      {button}
    </div>
}
