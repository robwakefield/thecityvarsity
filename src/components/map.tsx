'use client'

import dynamic from 'next/dynamic'
import { usePostHog } from 'posthog-js/react';
 
const DynamicMap = dynamic(() => import('@/components/OpenStreetMap'), {
  ssr: false,
})



export function Map(lat: number, lon: number) {
  const mapProps = {
    lat: lat,
    lon: lon,
  };

  const posthog = usePostHog()
  let onClick = () => {
    posthog.capture('Map Clicked')
  }

  return (
    <div className='w-full' onClick={onClick}>
      <DynamicMap {...mapProps}/>
    </div>
    )
}
