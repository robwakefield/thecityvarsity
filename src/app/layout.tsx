import type { Metadata } from 'next'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { Suspense } from 'react';
import { PHProvider, PostHogPageview } from './providers';
import { EDITION, TITLE } from '@/app/config'

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] })

// Browser tab title
export const metadata: Metadata = {
  title: 'The City Varsity ' + EDITION,
  description: TITLE,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""/>
      </head>
      <Suspense>
        <PostHogPageview />
      </Suspense>
      <PHProvider>
        <body className={montserrat.className+" text-primary bg-black"}>{children}</body>
      </PHProvider>
    </html>
  )
}
