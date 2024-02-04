'use client'

import { useRouter } from "next/navigation";
import { Archivo_Black } from 'next/font/google'
import { usePostHog } from "posthog-js/react";

const archivo = Archivo_Black({ weight: "400", subsets: ["latin"] })

// Displays image specified in tailwind.config.ts with title, subtitile and button
export default function Title(title: string, subtitle: string) {

  return <div className="w-screen min-h-[500px] h-[40%] md:h-[50%] lg:h-[75%] bg-hero bg-no-repeat bg-center bg-cover">
      <div className="h-full w-full backdrop-brightness-75 flex items-center">
        <div className={"py-12 my-4 w-full content-center text-center text-primary "+archivo.className}>
          <h1 className="px-8 text-4xl md:text-6xl">
            <b>{title}</b>
          </h1>
          <h2 className="text-xl md:text-3xl">
            <b>{subtitle}</b>
          </h2>
        </div>
      </div>  
    </div>
}