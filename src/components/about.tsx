import { Archivo_Black } from 'next/font/google'

const archivo = Archivo_Black({ weight: "400", subsets: ["latin"] })

// Displays title and text constrained to center of screen
export default function AboutText(title: String, text: String) {
  return <div className="flex w-screen justify-center bg-bg">
      <div className="py-8 px-10 max-w-3xl text-center">
        <h1 className={"pb-8 text-3xl md:text-4xl text-purple "+archivo.className}>{title.toUpperCase()}</h1>
        <p className={"text-l text-secondary"}>{text}</p>
      </div>
    </div>
}