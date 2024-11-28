// File: src/components/Programs.js
"use client";

import { useEffect, useRef } from "react";
import {
  Wrench,
  HardHat,
  UtensilsCrossed,
  Zap,
  Heart,
  Laptop,
  Scissors,
  ChevronRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const programs = [
  {
    title: "Automotive Services",
    icon: Wrench,
    link: "/auto",
    description: "Learn automotive repair and maintenance skills",
  },
  {
    title: "Construction and Building Trades",
    icon: HardHat,
    link: "/construction",
    description: "Master construction and building techniques",
  },
  {
    title: "Culinary",
    icon: UtensilsCrossed,
    link: "/culinary",
    description: "Develop professional culinary arts skills",
  },
  {
    title: "Electrical",
    icon: Zap,
    link: "/electrical",
    description: "Study electrical systems and installations",
  },
  {
    title: "Health Services",
    icon: Heart,
    link: "/health",
    description: "Prepare for careers in healthcare",
  },
  {
    title: "Information Technology",
    icon: Laptop,
    link: "/it",
    description: "Learn modern IT and programming skills",
  },
  {
    title: "Unisex Styling",
    icon: Scissors,
    link: "/service",
    description: "Master hair styling and beauty techniques",
  },
];

const Programs = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Header animation
    gsap.from(sectionRef.current.querySelector("h2"), {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Cards stagger animation
    gsap.from(cardsRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: {
        amount: 0.8,
        grid: "auto",
      },
      scrollTrigger: {
        trigger: sectionRef.current.querySelector(".grid"),
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Hover animation setup
    cardsRef.current.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.in",
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Programs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white p-8 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => (window.location.href = program.link)}
            >
              <div className="flex items-center justify-center mb-6">
                <program.icon
                  className="text-[#437dfe]"
                  size={48}
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-center">
                {program.title}
              </h3>

              <p className="text-gray-600 text-center mb-4">
                {program.description}
              </p>

              <div className="text-center">
                <span className="text-[#437dfe] hover:underline inline-flex items-center">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-2" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
