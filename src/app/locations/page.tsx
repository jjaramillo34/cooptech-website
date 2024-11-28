"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { campuses, getAllLocations, getAllOfferings, type Campus } from "@/config/locations";
import Map from "@/components/Map";
import ClientLayout from "@/components/ClientLayout";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function LocationsPage() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCampus, setSelectedCampus] = useState<Campus | undefined>();
  const locations = getAllLocations();
  const allOfferings = getAllOfferings();

  const filteredCampuses = selectedLocation
    ? campuses.filter((campus) => campus.location === selectedLocation)
    : campuses;

  const searchResults = searchQuery
    ? filteredCampuses.filter(
        (campus) =>
          campus.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          campus.offerings.some((program) =>
            program.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : filteredCampuses;

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
              Our Locations
            </h1>
          </div>
        </section>

        <div className="container mx-auto px-4">
          {/* Search and Filter Section */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by campus or program..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Map and Filters Section */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Location Filters */}
              <div className="lg:col-span-1">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Boroughs</h2>
                  <div className="space-y-2">
                    <Button
                      variant={selectedLocation === null ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => {
                        setSelectedLocation(null);
                        setSelectedCampus(undefined);
                      }}
                    >
                      All Locations
                    </Button>
                    {locations.map((location) => (
                      <Button
                        key={location}
                        variant={selectedLocation === location ? "default" : "outline"}
                        className="w-full justify-start"
                        onClick={() => {
                          setSelectedLocation(location);
                          setSelectedCampus(undefined);
                        }}
                      >
                        {location}
                      </Button>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Map */}
              <div className="lg:col-span-2">
                <Card className="p-0 overflow-hidden">
                  <div className="h-[500px]">
                    <Map 
                      campuses={searchResults} 
                      selectedCampus={selectedCampus}
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Programs by Location Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Programs by Location</h2>
            <div className="grid gap-8">
              {locations.map((location) => {
                const locationCampuses = campuses.filter(
                  (campus) => campus.location === location
                );
                return (
                  <Card key={location} className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{location}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {locationCampuses.map((campus) => (
                        <div 
                          key={campus.name} 
                          className="space-y-4 cursor-pointer hover:bg-muted/50 p-4 rounded-lg transition-colors"
                          onClick={() => setSelectedCampus(campus)}
                        >
                          <h4 className="text-xl font-semibold">{campus.name}</h4>
                          <p className="text-muted-foreground text-sm">
                            {campus.address}
                          </p>
                          <div>
                            <h5 className="font-medium mb-2">Available Programs:</h5>
                            <ul className="list-disc list-inside space-y-1">
                              {campus.offerings.map((program) => (
                                <li key={program} className="text-sm text-muted-foreground">
                                  {program}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Campus Cards Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((campus) => (
              <Card 
                key={campus.name} 
                className="overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all"
                onClick={() => setSelectedCampus(campus)}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{campus.name}</h3>
                  <p className="text-muted-foreground mb-4">{campus.address}</p>
                  
                  <Tabs defaultValue="programs" className="w-full">
                    <TabsList className="w-full">
                      <TabsTrigger value="programs" className="flex-1">Programs</TabsTrigger>
                      <TabsTrigger value="info" className="flex-1">Info</TabsTrigger>
                    </TabsList>
                    <TabsContent value="programs">
                      <ul className="list-disc list-inside space-y-1">
                        {campus.offerings.map((program) => (
                          <li key={program} className="text-sm">
                            {program}
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="info">
                      <div className="space-y-4">
                        <p className="text-sm">
                          <strong>Borough:</strong> {campus.location}
                        </p>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(
                              `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                campus.address
                              )}`,
                              "_blank"
                            );
                          }}
                        >
                          Get Directions
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </ClientLayout>
  );
} 