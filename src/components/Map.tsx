"use client"

import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import type { Campus } from '@/config/locations'

// Replace with your Mapbox access token
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''

interface MapProps {
  campuses: Campus[]
  selectedCampus?: Campus
}

export default function Map({ campuses, selectedCampus }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const markers = useRef<mapboxgl.Marker[]>([])

  useEffect(() => {
    if (!mapContainer.current) return

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-73.9469, 40.7845], // Default to Manhattan
      zoom: 12
    })

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl())

    return () => {
      map.current?.remove()
    }
  }, [])

  useEffect(() => {
    if (!map.current) return

    // Clear existing markers
    markers.current.forEach(marker => marker.remove())
    markers.current = []

    // Add markers for each campus
    campuses.forEach(campus => {
      const marker = new mapboxgl.Marker()
        .setLngLat(campus.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3 class="font-semibold">${campus.name}</h3>
             <p>${campus.address}</p>`
          )
        )
        .addTo(map.current!)
      markers.current.push(marker)
    })
  }, [campuses])

  useEffect(() => {
    if (!map.current || !selectedCampus) return

    map.current.flyTo({
      center: selectedCampus.coordinates,
      zoom: 15,
      essential: true
    })

    // Find and open popup for selected campus
    const marker = markers.current.find(
      marker => 
        marker.getLngLat().lng === selectedCampus.coordinates[0] &&
        marker.getLngLat().lat === selectedCampus.coordinates[1]
    )
    marker?.togglePopup()
  }, [selectedCampus])

  return (
    <div ref={mapContainer} className="w-full h-full" />
  )
} 