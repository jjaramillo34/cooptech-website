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

export default function Map({ campuses = [], selectedCampus }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const markers = useRef<mapboxgl.Marker[]>([])

  useEffect(() => {
    if (!mapContainer.current || !campuses?.length) return

    // Clear existing markers
    markers.current.forEach(marker => marker.remove())
    markers.current = []

    // Initialize map if it doesn't exist
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-73.935242, 40.730610], // New York City coordinates
        zoom: 10
      })

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl())
    }

    // Add markers for each location
    campuses.forEach((campus) => {
      if (!campus?.coordinates) return

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<div class="p-2">
          <h3 class="font-semibold text-base mb-1">${campus.name}</h3>
          <p class="text-sm mb-1">${campus.address}</p>
          <p class="text-sm text-muted-foreground">${campus.location}</p>
          <p class="text-sm mt-2"><strong>Programs:</strong> ${campus.offerings?.length || 0}</p>
        </div>`
      )

      const marker = new mapboxgl.Marker({
        color: "#0ea5e9" // Sky blue color
      })
        .setLngLat(campus.coordinates)
        .setPopup(popup)
        .addTo(map.current!)

      markers.current.push(marker)
    })

    // Fit bounds to show all markers if there are any
    if (campuses.length > 0) {
      const bounds = new mapboxgl.LngLatBounds()
      campuses.forEach(campus => {
        if (campus?.coordinates) {
          bounds.extend(campus.coordinates)
        }
      })
      map.current.fitBounds(bounds, { padding: 50 })
    }

    return () => {
      markers.current.forEach(marker => marker.remove())
    }
  }, [campuses])

  // Handle selected campus changes
  useEffect(() => {
    if (selectedCampus?.coordinates && map.current) {
      map.current.flyTo({
        center: selectedCampus.coordinates,
        zoom: 15,
        duration: 2000,
        essential: true
      })

      // Find and trigger popup for selected location
      const marker = markers.current[
        campuses.findIndex(loc => loc.name === selectedCampus.name)
      ]
      marker?.togglePopup()
    }
  }, [selectedCampus, campuses])

  return (
    <div ref={mapContainer} className="w-full h-full" />
  )
} 