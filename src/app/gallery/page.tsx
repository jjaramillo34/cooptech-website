import { Metadata } from "next";
import GalleryClient from "./gallery-client";

export const metadata: Metadata = {
  title: "Co-op Tech - Gallery",
  description: "Explore our collection of photos showcasing our facilities, staff, and programs.",
};

export default function GalleryPage() {
  return <GalleryClient />;
} 