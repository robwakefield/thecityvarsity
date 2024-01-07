'use client'

import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { LatLng } from 'leaflet'

interface OpenStreetMapProps {
  lat: number;
  lon: number;
}

export default function OpenStreetMap({ lat, lon }: OpenStreetMapProps) {
  const position = new LatLng(lat, lon)
  return (
    <MapContainer center={position} zoom={16} scrollWheelZoom={false} style={{width: '100vw', height: '50vh'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
      </Marker>
    </MapContainer>
  )
}