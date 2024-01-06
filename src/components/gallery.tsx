'use client'

import Image from "next/image"

export function Gallery(images: string[]) {
  const width_ratio = "w-1/" + images.length.toString()

  let imgs = images.map((path) => {
    return <div className={width_ratio}>
      <Image src={"/thecityvarsity"+path} height={0} width={0} sizes="100vw" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} alt="TCV"></Image>
    </div>
  })

  return <div className="w-full flex flex-row">
      {imgs}
    </div>
}
