"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Hero text animation
      const tl = gsap.timeline();
      tl.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });

      // Button animation
      tl.from(".hero-button", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      });

      // Image animation
      gsap.from(".hero-image", {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });

      // Scroll animations
      gsap.to(".hero-section", {
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        opacity: 0.5,
        y: 100,
      });

    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else if (typeof err === 'string') {
        setError(err);
      } else {
        setError('An unknown error occurred');
      }
    }
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[500px] text-red-500">
        {error}
      </div>
    );
  }

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Pics/Co-op Fascade 4.webp"
          alt="Co-op Tech Building"
          fill
          className="hero-image object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h1 className="hero-text text-5xl md:text-7xl font-bold mb-6">
          Welcome to Co-op Tech
        </h1>
        <p className="hero-text text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Empowering students through hands-on technical education and real-world experience
        </p>
        <div className="hero-button">
          <Link href="/programs">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Explore Our Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowRight className="h-6 w-6 text-white transform rotate-90" />
      </div>
    </section>
  );
}