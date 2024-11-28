"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Error } from "@/components/ui/error";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const initAnimations = () => {
    try {
      // Create a timeline for the initial animations
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Initial overlay animation
      tl.fromTo(overlayRef.current, 
        { opacity: 1 },
        { opacity: 0.5, duration: 1.5 }
      );

      // Animate hero elements sequentially with more dynamic effects
      tl.from(headingRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.2)",
      })
      .from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      }, "-=0.8")
      .from(buttonRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
      }, "-=0.6");

      // Add a subtle floating animation to the button
      gsap.to(buttonRef.current, {
        y: -8,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Create a parallax effect for the background image
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Add a subtle scale effect to the image on scroll
      gsap.to(imageRef.current, {
        scale: 1.1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      // Text reveal animation on scroll
      gsap.to(textRef.current, {
        backgroundPositionX: "0%",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top center",
          end: "center center",
          scrub: 1,
        },
      });

    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  useEffect(() => {
    initAnimations();
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  if (error) {
    return <Error message={error} onRetry={() => window.location.reload()} />;
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg"
        >
          Welcome to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
            CoopTech
          </span>
        </h1>

        <p
          ref={textRef}
          className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
        >
          Empowering students with cutting-edge technical education and hands-on
          experience in traditional trades and modern technology.
        </p>

        <Button
          ref={buttonRef}
          size="lg"
          className="text-lg bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg transform hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
          onClick={() => {
            setIsLoading(true);
            router.push('/apply');
          }}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Start Your Journey"}
        </Button>
      </div>

      <div
        ref={imageRef}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/Pics/MainPic.webp"
          alt="Co-op Tech Building"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Enhanced gradient overlay with better accessibility */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 pointer-events-none"
      />
    </section>
  );
};

export default Hero;