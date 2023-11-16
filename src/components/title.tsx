'use client'

import { NextFont } from "next/dist/compiled/@next/font";
import { useRouter } from "next/navigation";

// Displays image specified in tailwind.config.ts with title, subtitile and button
export default function Title(title: string, subtitle: string, buttonText: string, ticketLink: string, font: NextFont) {
  const router = useRouter()
  const button = <div>
      <button className={"bg-btn-purple w-5/6 sm:w-fit mt-8 "+font.className} onClick={() => router.push(ticketLink)}>
        <h1 className="py-4 md:py-4 px-4 md:px-16 text-md sm:text-lg md:text-xl text-primary">{buttonText}</h1>  
      </button>
    </div>
  // TODO: Constrain title text width in lg and above
  return <div className="w-screen min-h-[500px] h-[40%] md:h-[50%] lg:h-[75%] bg-hero bg-no-repeat bg-center bg-cover">
      <div className="h-full w-full backdrop-brightness-75 flex items-center">
        <div className={"py-12 my-4 w-full content-center text-center text-primary "+font.className}>
          <h1 className="px-8 text-4xl md:text-6xl">
            <b>{title}</b>
          </h1>
          <h2 className="text-xl md:text-3xl">
            <b>{subtitle}</b>
          </h2>
          {button}
        </div>
      </div>  
    </div>
}