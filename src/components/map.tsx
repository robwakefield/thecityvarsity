'use client'

import dynamic from 'next/dynamic'
 
const DynamicMap = dynamic(() => import('@/components/OpenStreetMap'), {
  ssr: false,
})
 
export function Map(lat: number, lon: number) {
  const mapProps = {
    lat: lat,
    lon: lon,
  };
  return (
    <div className='w-full'>
      <DynamicMap {...mapProps}/>
    </div>
    )
}
