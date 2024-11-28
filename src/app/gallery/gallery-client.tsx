"use client";

import { useState } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const galleryImages = [
  {
    id: 1,
    title: "Co-op Tech Building",
    category: "campus",
    src: "/Pics/Co-op Fascade 4.webp",
  },
  {
    id: 2,
    title: "Co-op Tech Logo",
    category: "campus",
    src: "/Pics/Cooplogo.webp",
  },
  {
    id: 3,
    title: "DOE Logo",
    category: "campus",
    src: "/Pics/doelogo.webp",
  },
  {
    id: 4,
    title: "D79 Logo",
    category: "campus",
    src: "/Pics/d79logo.webp",
  },
  {
    id: 5,
    title: "Staff",
    category: "staff",
    src: "/Pics/Staff/principal.webp",
  },
  {
    id: 6,
    title: "Automotive",
    category: "automotive",
    src: "/Pics/Staff/auto.webp",
  },
  {
    id: 7,
    title: "Construction",
    category: "construction",
    src: "/Pics/Staff/construction.webp",
  },
  {
    id: 8,
    title: "Culinary",
    category: "culinary",
    src: "/Pics/Staff/culinary.webp",
  },
  {
    id: 9,
    title: "IT",
    category: "technology",
    src: "/Pics/Staff/it.webp",
  },
  {
    id: 10,
    title: "Support",
    category: "staff",
    src: "/Pics/Staff/support.webp",
  }
];

export default function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "campus", "staff", "automotive", "construction", "culinary", "technology"];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-4">Photo Gallery</h1>
      <p className="text-muted-foreground mb-8">
        Explore our collection of photos showcasing our facilities, staff, and programs.
      </p>
      <Separator className="mb-8" />

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="relative aspect-square rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300"
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-lg font-semibold">{image.title}</h3>
                <p className="text-sm text-gray-300">{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No images found for the selected category.
        </div>
      )}
    </div>
  );
} 