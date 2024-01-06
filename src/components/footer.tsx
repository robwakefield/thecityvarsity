
export default function Footer(text: String) {
  const date = new Date();
  const year = date.getFullYear();
  return <div className={"w-screen bg-bg"}>
      <div className="flex flex-row py-12 px-12 text-sm text-center text-secondary justify-center">
        <p>{"Copyright © " + year + " " + text + " - All Rights Reserved."}</p>
      </div>
    </div>
}
