'use client'

import { NextFont } from "next/dist/compiled/@next/font";
import { useRouter } from "next/navigation";

// Displays image specified in tailwind.config.ts with title and subtitile overlay
export default function Title(title: string, subtitle: string, buttonText: string, ticketLink: string, font: NextFont) {
  const router = useRouter()
  const button = <div>
      <button className={"bg-btn-purple rounded-sm my-4 "+font.className} onClick={() => router.push(ticketLink)}>
        <h1 className="py-2 md:py-4 px-4 md:px-16 text-lg md:text-xl text-primary">{buttonText}</h1>  
      </button>
    </div>
  // TODO: Fix responsive min height
  return <div className="w-screen min-h-[40%] md:min-h-[50%] lg:min-h-[75%] bg-hero bg-no-repeat bg-center bg-cover">
      <div className="h-full w-full backdrop-brightness-75 flex items-center">
        <div className={"py-12 my-4 w-full content-center text-center text-primary "+font.className}>
          <h1 className="sm:px-20 text-6xl md:text-7xl">
            <b>{title}</b>
          </h1>
          <h2 className="text-3xl">
            <b>{subtitle}</b>
          </h2>
          {button}
        </div>
      </div>  
    </div>
}