"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone } from "lucide-react"
import Map from "@/components/Map"
import { useState } from "react"

interface Location {
  name: string
  address: string
  phone: string
  coordinates: [number, number]
}

const locations: Location[] = [
  {
    name: "Coop Tech @ Longwood Campus",
    address: "965 Longwood Ave. Bronx, NY 10459",
    phone: "718-589-2531 ext. 5090",
    coordinates: [-73.90001588449087, 40.817758379320594] as [number, number]
  },
  {
    name: "Coop Tech Main Campus",
    address: "321 East 96 St. New York NY 10128",
    phone: "212-369-8800",
    coordinates: [-73.94728958449183, 40.783894279324095] as [number, number]
  },
  {
    name: "Coop Tech @ Long Island City H.S.",
    address: "14-30 Broadway Queens, NY 11106",
    phone: "718-545-7095",
    coordinates: [-73.93524158449239, 40.765469679326024] as [number, number]
  },
  {
    name: "Coop Tech @ Queens Transitional Center",
    address: "142-10 Linden Blvd. Queens, NY 11436",
    phone: "718-558-2040",
    coordinates: [-73.80324728449466, 40.68398717933506] as [number, number]
  },
  {
    name: "Coop Tech @ Concord H.S.",
    address: "109 Rhine Ave, Staten Island, NY 10304",
    phone: "718-447-1274",
    coordinates: [-74.1443740844972, 40.59763687934457] as [number, number]
  },
  {
    name: "Coop Tech @ Canarsie H.S.",
    address: "1600 Rockaway Parkway, Brooklyn, NY 11236",
    phone: "718-290-8600",
    coordinates: [-73.8987798, 40.64044299999999] as [number, number]
  }
]

export default function ContactPage() {
  const [selectedLocation, setSelectedLocation] = useState<Location | undefined>()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Locations</h1>
      <Separator className="mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-6">
          {locations.map((location, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-lg transition-all cursor-pointer ${
                selectedLocation?.name === location.name 
                  ? 'border-primary shadow-lg' 
                  : ''
              }`}
              onClick={() => setSelectedLocation(location)}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                <div className="flex items-start space-x-2 text-muted-foreground mb-2">
                  <MapPin className="h-5 w-5 mt-0.5" />
                  <span>{location.address}</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-5 w-5" />
                  <span>{location.phone}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="h-[600px] rounded-lg overflow-hidden border">
          <Map locations={locations} selectedLocation={selectedLocation} />
        </div>
      </div>
    </div>
  )
} 