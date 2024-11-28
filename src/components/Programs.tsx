"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const programs = [
  {
    title: "Automotive Services",
    description: "Learn auto repair, maintenance, and diagnostic techniques.",
    image: "/Pics/AV Gear 2.webp",
    link: "/auto",
  },
  {
    title: "Construction",
    description: "Master carpentry, electrical, and building fundamentals.",
    image: "/Pics/Solar Working 8.webp",
    link: "/construction",
  },
  {
    title: "Culinary Arts",
    description: "Develop cooking skills and food service management.",
    image: "/Pics/Chef.webp",
    link: "/culinary",
  },
  {
    title: "Information Technology",
    description: "Study computer networking, programming, and cybersecurity.",
    image: "/Pics/IT-1.webp",
    link: "/it",
  },
  {
    title: "Healthcare Services",
    description: "Train for careers in nursing, medical assistance, and patient care.",
    image: "/Pics/health.webp",
    link: "/health",
  },
  {
    title: "Service Industry",
    description: "Prepare for careers in hospitality, retail, and customer service.",
    image: "/Pics/service.webp",
    link: "/service",
  },
  {
    title: "Work-Based Learning",
    description: "Gain real-world experience through internships and apprenticeships.",
    image: "/Pics/wbl.webp",
    link: "/wbl",
  },
  {
    title: "OSHA Safety",
    description: "Learn essential workplace safety and OSHA certification.",
    image: "/Pics/osha.webp",
    link: "/osha",
  },
];

const Programs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map(({ title, description, image, link }, index) => (
            <Card
              key={title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg group"
            >
              <CardContent className="p-0">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{description}</p>
                  <Button asChild className="w-full gap-2 group-hover:bg-primary/90">
                    <Link href={link}>
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs; 