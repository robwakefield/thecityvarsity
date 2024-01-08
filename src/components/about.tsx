import { Archivo_Black } from 'next/font/google'
import { Button } from '@/components/button'

const archivo = Archivo_Black({ weight: "400", subsets: ["latin"] })

// Displays title and text constrained to center of screen
export function AboutText(title: String, text: String) {
  return <div className="flex w-screen justify-center bg-bg">
      <div className="py-8 px-10 max-w-3xl text-center">
        <h1 className={"pb-8 text-3xl md:text-4xl text-purple "+archivo.className}>{title.toUpperCase()}</h1>
        <p className={"text-l text-secondary"}>{text}</p>
      </div>
    </div>
}

// Text sections below about text
export function TextRow(items: JSX.Element[]) {
  return <div className="flex md:flex-row flex-col w-screen justify-center bg-bg">
      {items}
    </div>
}

export function TextRowItem(title: String, text: String, buttonText?: String) {
  // Button will only show if buttonText and buttonFont are supplied in page.tsx
  const button = buttonText !== undefined ? Button(buttonText.toUpperCase()) : <div></div>

  return <div className="py-6 px-10 max-w-xl text-center" key={crypto.randomUUID()}>
      <h1 className={"pb-4 text-xl text-purple"+archivo.className}>{title}</h1>
      <p className="text-l text-secondary">{text}</p>
      {button}
    </div>
}