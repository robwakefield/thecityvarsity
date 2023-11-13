import { NextFont } from "next/dist/compiled/@next/font";

// Displays image specified in tailwind.config.ts with title and subtitile overlay
export default function Title(title: String, subtitle: String, font: NextFont) {
  // TODO: Fix responsive min height
  return <div className={"py-12 w-screen bg-hero bg-no-repeat bg-center bg-cover text-center text-primary "+font.className}>
      <h1 className="text-7xl">
        <b>{title}</b>
      </h1>
      <h2 className="text-3xl">
        <b>{subtitle}</b>
      </h2>
    </div>
}