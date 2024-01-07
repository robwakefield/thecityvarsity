import { Archivo_Black } from 'next/font/google'
import { Button } from '@/components/button'

const archivo = Archivo_Black({ weight: "400", subsets: ["latin"] })

export function TextRow(items: JSX.Element[]) {
  return <div className="flex flex-row w-screen bg-bg">
      {items}
    </div>
}

export function TextRowItem(title: String, text: String, buttonText?: String) {
  var button = <div></div>
  // Button will only show if buttonText and buttonFont are supplied in page.tsx
  if (buttonText !== undefined) {
    button = Button(buttonText.toUpperCase())
  }

  return <div className="py-6 px-10 w-screen text-center" key={crypto.randomUUID()}>
      <h1 className={"pb-4 text-xl text-purple"+archivo.className}>{title}</h1>
      <p className="text-l text-secondary">{text}</p>
      {button}
    </div>
}
