import { NextFont } from 'next/dist/compiled/@next/font'

// Displays title and text constrained to center of screen
export default function CenteredText(title: String, titleFont: NextFont, text: String, textFont: NextFont) {
  return <div className="flex w-screen bg-bg px-5 justify-center">
      <div className="py-6 max-w-4xl text-center">
        <h1 className={"pb-4 text-4xl text-purple "+titleFont.className}>{title}</h1>
        <p className={"text-l text-secondary "+textFont.className}>{text}</p>
      </div>
    </div>
}