import { NextFont } from "next/dist/compiled/@next/font";

export function TextRow(items: JSX.Element[]) {
  return <div className="flex flex-row w-screen">
      {items}
    </div>
}

export function TextRowItem(title: String, titleFont: NextFont, text: String, textFont: NextFont, buttonText?: String, buttonFont?: NextFont) {
  var button = <div></div>
  // Button will only show if buttonText and buttonFont are supplied in page.tsx
  if (buttonText !== undefined && buttonFont !== undefined) {
    button = <div>
      <button className={"bg-purple rounded-sm mt-4 "+buttonFont.className}>
        <h1 className="py-4 px-8 text-lg text-primary">{buttonText.toUpperCase()}</h1>
      </button>
    </div>
  }

  return <div className="py-6 px-10 bg-bg w-screen text-center" key={crypto.randomUUID() }>
      <h1 className={"pb-4 text-xl text-purple"+titleFont.className}>{title}</h1>
      <p className={"text-l text-secondary "+textFont.className}>{text}</p>
      {button}
    </div>
}
