"use client"

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import Map from "@/components/Map";
import ClientLayout from "@/components/ClientLayout";
import type { Campus } from "@/config/locations";

const locations: Campus[] = [
  {
    name: "Manhattan-96th Street",
    location: "Manhattan",
    address: "321 E 96th, New York, NY",
    coordinates: [-73.9469, 40.7845],
    offerings: [],
  },
];

export default function ContactPage() {
  const [selectedLocation, setSelectedLocation] = useState<Campus | undefined>(locations[0]);

  return (
    <ClientLayout>
      <main className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative h-[400px] mb-16">
          <Image
            src="/Pics/Co-op Fascade 4.webp"
            alt="Co-op Tech Building"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
              Contact Us
            </h1>
          </div>
        </section>

        <div className="container mx-auto px-4">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-muted-foreground">
                  321 East 96th Street<br />
                  New York, NY
                </p>
              </div>
            </Card>

            <Card className="p-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground">(212) 369-8800</p>
              </div>
            </Card>

            <Card className="p-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground">info@cooptech.org</p>
              </div>
            </Card>
          </div>

          {/* Map Section */}
          <div className="h-[600px] rounded-lg overflow-hidden border">
            <Map campuses={locations} selectedCampus={selectedLocation} />
          </div>
        </div>
      </main>
    </ClientLayout>
  );
} 