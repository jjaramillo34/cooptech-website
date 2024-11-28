"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Map from "@/components/Map";
import { campuses, getAllLocations, getAllOfferings } from "@/config/locations";
import type { Campus } from "@/config/locations";

export default function LocationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<Campus | undefined>();
  const [selectedFilter, setSelectedFilter] = useState<"location" | "program">("location");

  const locations = getAllLocations();
  const offerings = getAllOfferings();

  const searchResults = campuses.filter((campus) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      campus.name.toLowerCase().includes(searchLower) ||
      campus.location.toLowerCase().includes(searchLower) ||
      campus.offerings.some((offering) =>
        offering.toLowerCase().includes(searchLower)
      )
    );
  });

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Our Locations</h1>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search locations or programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedFilter === "location" ? "default" : "outline"}
                onClick={() => setSelectedFilter("location")}
              >
                Filter by Location
              </Button>
              <Button
                variant={selectedFilter === "program" ? "default" : "outline"}
                onClick={() => setSelectedFilter("program")}
              >
                Filter by Program
              </Button>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {selectedFilter === "location"
              ? locations.map((location) => (
                  <Button
                    key={location}
                    variant="outline"
                    size="sm"
                    onClick={() => setSearchQuery(location)}
                  >
                    {location}
                  </Button>
                ))
              : offerings.map((offering) => (
                  <Button
                    key={offering}
                    variant="outline"
                    size="sm"
                    onClick={() => setSearchQuery(offering)}
                  >
                    {offering}
                  </Button>
                ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Map */}
          <Card className="p-0 overflow-hidden">
            <div className="h-[500px]">
              <Map 
                campuses={searchResults} 
                selectedCampus={selectedLocation}
              />
            </div>
          </Card>

          {/* Location List */}
          <div className="space-y-4">
            {searchResults.map((campus) => (
              <Card
                key={campus.name}
                className={`p-4 cursor-pointer transition-colors ${
                  selectedLocation?.name === campus.name
                    ? "border-primary"
                    : "hover:border-primary/50"
                }`}
                onClick={() => setSelectedLocation(campus)}
              >
                <h3 className="text-lg font-semibold mb-2">{campus.name}</h3>
                <p className="text-muted-foreground mb-2">{campus.address}</p>
                <div className="flex flex-wrap gap-2">
                  {campus.offerings.map((offering) => (
                    <span
                      key={offering}
                      className="inline-block px-2 py-1 text-xs rounded-full bg-muted"
                    >
                      {offering}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 