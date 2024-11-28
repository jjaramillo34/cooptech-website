// File: src/components/Partners.js
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const partners = [
  { name: "NYC DOS", image: "/Pics/Partners/nycdos.webp" },
  { name: "Elite", image: "/Pics/Partners/elite.webp" },
  { name: "DIIT", image: "/Pics/Partners/DIIT.webp" },
  { name: "Nubian", image: "/Pics/Partners/nubian.webp" },
  { name: "CVS", image: "/Pics/Partners/cvs.webp" },
  { name: "Brothers", image: "/Pics/Partners/brothers.webp" },
  { name: "Center Arch", image: "/Pics/Partners/centerarch.webp" },
  { name: "Teddy", image: "/Pics/Partners/teddy.webp" },
];

const Partners = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Heading animation
    gsap.from(sectionRef.current.querySelector("h2"), {
      y: 30,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Create infinite scroll animation
    const slideAnimation = () => {
      const totalWidth = sliderRef.current.scrollWidth;
      const itemWidth = totalWidth / partners.length;

      gsap.to(sliderRef.current, {
        x: -totalWidth / 2,
        duration: 20,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 2)),
        },
      });
    };

    // Initialize slide animation
    slideAnimation();

    // Pause animation on hover
    containerRef.current.addEventListener("mouseenter", () => {
      gsap.to(sliderRef.current, { timeScale: 0, duration: 0.5 });
    });

    containerRef.current.addEventListener("mouseleave", () => {
      gsap.to(sliderRef.current, { timeScale: 1, duration: 0.5 });
    });

    // Cleanup
    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Partners
        </h2>

        <div
          ref={containerRef}
          className="relative w-full overflow-hidden py-8"
          aria-label="Partners Carousel"
        >
          <div
            ref={sliderRef}
            className="flex items-center space-x-12 whitespace-nowrap"
          >
            {/* First set of partners */}
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-1`}
                className="inline-flex items-center justify-center w-40 h-40 bg-white rounded-lg shadow-md p-4 transform hover:scale-105 transition-transform"
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={350}
                  height={350}
                  className="object-contain filter hover:grayscale-0 grayscale transition-all duration-300"
                />
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-2`}
                className="inline-flex items-center justify-center w-40 h-40 bg-white rounded-lg shadow-md p-4 transform hover:scale-105 transition-transform"
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={350}
                  height={350}
                  className="object-contain filter hover:grayscale-0 grayscale transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
