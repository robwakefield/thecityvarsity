import { Archivo_Black } from 'next/font/google'

const archivo = Archivo_Black({ weight: "400", subsets: ["latin"] })

// Displays title and text constrained to center of screen
export default function CenteredText(title: String, text: String) {
  return <div className="flex w-screen px-5 justify-center bg-bg">
      <div className="py-6 max-w-4xl text-center">
        <h1 className={"pb-4 text-4xl text-purple "+archivo.className}>{title.toUpperCase()}</h1>
        <p className={"text-l text-secondary"}>{text}</p>
      </div>
    </div>
}