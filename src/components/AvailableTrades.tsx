"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { getAllOfferings } from "@/config/locations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  Ruler,
  Car,
  Scissors,
  Hammer,
  Heart,
  Network,
  ChefHat,
  Zap,
  Brush,
  Wrench,
  Eye,
  Globe,
  Flame,
  Palette,
  Video,
  Stethoscope,
  Building2,
  Sparkles,
  Activity,
  type LucideIcon,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const tradeIcons: { [key: string]: LucideIcon } = {
  "Architectural Drafting": Ruler,
  "Automotive": Car,
  "Barbering": Scissors,
  "Carpentry": Hammer,
  "Certified Nursing Assistant": Heart,
  "Computer Networking": Network,
  "Culinary Arts": ChefHat,
  "Electrical": Zap,
  "Natural Hairstyling": Brush,
  "Plumbing": Wrench,
  "Vision Technology": Eye,
  "Web Design": Globe,
  "Welding": Flame,
  "Advertising & Design": Palette,
  "Audio and Video Production": Video,
  "Medical Billing and Coding": Stethoscope,
  "Introduction to Construction Trades": Building2,
  "Introduction to Cosmetology Nails and Waxing": Sparkles,
  "Medical Health Careers": Activity,
};

export default function AvailableTrades() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const trades = getAllOfferings();

  useEffect(() => {
    // Animate section title
    const title = sectionRef.current?.querySelector("h2");
    if (title) {
      gsap.from(title, {
        y: 30,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: title,
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
            start: "top 90%",
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
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Available Trades
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {trades.map((trade, index) => {
            const Icon = tradeIcons[trade] || Building2;
            return (
              <Card
                key={trade}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <Icon className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold">{trade}</h3>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
} 