// File: src/components/Hero.js
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Create a timeline for coordinated animations
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    // Animate hero elements sequentially
    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    })
      .from(
        textRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 1,
        },
        "-=0.5"
      )
      .from(
        buttonRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.5"
      )
      .from(
        imageRef.current,
        {
          y: 100,
          opacity: 0,
          duration: 1.2,
        },
        "-=0.8"
      );

    // Parallax effect on scroll
    gsap.to(imageRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Cleanup function
    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl font-bold text-secondary mb-6"
        >
          Welcome to CoopTech
        </h1>

        <p
          ref={textRef}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
        >
          Providing students with traditional trades and state-of-the-art
          technology courses
        </p>

        <button
          ref={buttonRef}
          className="btn-primary text-lg inline-block hover:scale-105 transition-transform"
          onClick={() => (window.location.href = "/apply")}
        >
          Start Your Journey
        </button>
      </div>

      <div
        ref={imageRef}
        className="absolute bottom-0 w-full h-[40vh] md:h-[50vh]"
      >
        <Image
          src="/Pics/MainPic.webp"
          alt="CoopTech Trades Collage"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
