
export default function Footer(text: String) {
  return <div className={"w-screen bg-bg"}>
      <div className="flex flex-row py-12 px-12 text-sm text-center text-secondary justify-center">
        <p>{"Copyright © 2023 " + text + " - All Rights Reserved."}</p>
      </div>
    </div>
}
