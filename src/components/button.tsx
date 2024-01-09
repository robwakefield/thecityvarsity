'use client'

import { useRouter } from "next/navigation";
import { Archivo_Black } from 'next/font/google'
import { usePostHog } from "posthog-js/react";

const archivo = Archivo_Black({ weight: "400", subsets: ["latin"] })

export function Button(buttonText: String, buttonLink?: string) {
  const router = useRouter()
  const posthog = usePostHog()
  
  let onClick = () => {
    posthog.capture('Button Click', {'buttonText': buttonText, 'buttonLink': buttonLink})
  }
  
  if (buttonLink != undefined) {
    onClick = () => {
      posthog.capture('Button Click', {'buttonText': buttonText, 'buttonLink': buttonLink})
      router.push(buttonLink)
    }
  }

  return <div className="py-6">
      <button className={"bg-purple rounded-sm "+archivo.className} onClick={onClick}>
        <h1 className="py-4 px-8 text-lg text-primary">{buttonText.toUpperCase()}</h1>
      </button>
    </div>

}
