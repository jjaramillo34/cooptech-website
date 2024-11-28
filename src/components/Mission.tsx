"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Target, Users, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const missionPoints = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide students with high-quality technical education and career preparation in a supportive environment.",
  },
  {
    icon: Users,
    title: "Our Vision",
    description:
      "To be a leading institution in technical education, preparing students for successful careers and lifelong learning.",
  },
  {
    icon: BookOpen,
    title: "Our Values",
    description:
      "Excellence, Innovation, Inclusivity, and Student Success drive everything we do.",
  },
];

const Mission = () => {
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
    <section
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Our Mission & Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionPoints.map(({ icon: Icon, title, description }, index) => (
            <Card
              key={title}
              ref={(el) => (cardsRef.current[index] = el as HTMLDivElement)}
              className="border-primary/20 hover:border-primary/40 transition-colors"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {title}
                  </h3>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission; 