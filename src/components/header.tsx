import { NextFont } from 'next/dist/compiled/@next/font'

// Displays `text` against bg color. Used at top of page
export default function Header(text: String, font: NextFont) {
  return <nav className={"py-4 w-screen text-center text-xl text-primary bg-bg "+font.className}>
            <b>{text.toUpperCase()}</b>
        </nav>
}