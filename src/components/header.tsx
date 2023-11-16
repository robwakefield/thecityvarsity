import { NextFont } from 'next/dist/compiled/@next/font'

// Displays text banner at top of screen.
export default function Header(text: String, font: NextFont) {
  return <nav className={
    "py-4 px-9 w-screen text-center text-lg lg:text-xl text-primary bg-bg " + font.className
    }>
      <b>{text}</b>
    </nav>
}
