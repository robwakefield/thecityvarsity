'use client'

import Image from "next/image"

export function Gallery(images: string[]) {
  const width_ratio = "w-1/" + images.length.toString()

  let imgs = images.map((path) => {
    return <div className={width_ratio} key={crypto.randomUUID()}>
      <Image src={path} height={0} width={0} sizes="100vw" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} alt="TCV"></Image>
    </div>
  })

  // Layout for mobile
  let grid_cols = "grid-cols-2"
  if (images.length === 1) {
    grid_cols = "grid-cols-1"
  } else if (images.length === 2 || images.length === 4) {
    grid_cols = "grid-cols-2"
  } else if (images.length === 3) {
    grid_cols = "grid-cols-3"
  } else {
    // Only display up to 4 images
    imgs = imgs.slice(0, 4)
  }

  return <div className={`w-full md:flex md:flex-row grid ${grid_cols}`}>
      {imgs}
    </div>
}
