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
  { name: "BJC", image: "/Pics/Partners/BJC.webp" },
  { name: "School Factory", image: "/Pics/Partners/schfac.webp" },
];

const Partners = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Heading animation
    const heading = sectionRef.current?.querySelector("h2");
    if (heading) {
      gsap.from(heading, {
        y: 30,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Animate cards
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Our Partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="aspect-square bg-background rounded-lg shadow-md p-4 transform hover:scale-105 transition-transform flex items-center justify-center"
            >
              <Image
                src={partner.image}
                alt={partner.name}
                width={120}
                height={120}
                className="object-contain filter hover:grayscale-0 grayscale transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;