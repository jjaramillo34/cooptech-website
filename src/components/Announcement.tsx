"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Announcement() {
  const announcementRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const announcement = announcementRef.current;
    const text = textRef.current;

    if (announcement && text) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: announcement,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(announcement, {
        opacity: 0,
        y: 50,
        duration: 0.8,
      }).from(
        text,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.4"
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={announcementRef}
      className="bg-primary text-primary-foreground py-12 md:py-16"
    >
      <div
        ref={textRef}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Enrollment Now Open for 2024-2025!
        </h2>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Join our community of learners and start your journey towards a successful career in the trades.
        </p>
      </div>
    </div>
  );
} 