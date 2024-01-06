import type { Metadata } from 'next'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'The City Varsity VI',
  description: 'The Kinscape City Varsity VI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className+" text-primary bg-black"}>{children}</body>
    </html>
  )
}
