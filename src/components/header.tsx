import { Archivo_Black } from 'next/font/google'

const archivo = Archivo_Black({ weight: "400", subsets: ["latin"] })

// Displays text banner at top of screen.
export default function Header(text: String) {
  return <nav className={
    "py-4 px-9 w-screen text-center text-lg lg:text-xl text-primary bg-bg " + archivo.className
    }>
      <b>{text}</b>
    </nav>
}
