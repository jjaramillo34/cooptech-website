// File: src/components/Mission.js
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

const missionText = `The School of Cooperative Technical Education exists to provide students with the opportunity to learn both the traditional trades along with a variety of state-of-the-art technology courses. Our students will develop the skills to become independent, self-supporting, lifelong learners in an increasingly complex and technologically based society.`;

const Mission = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const highlightRef = useRef(null);

  useEffect(() => {
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 70%",
        toggleActions: "play none none reverse",
      },
    });

    masterTl
      .from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        highlightRef.current,
        {
          width: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );

    // Text animation with proper spacing
    const words = missionText.split(" ");
    textRef.current.innerHTML = "";

    words.forEach((word, i) => {
      const span = document.createElement("span");
      span.textContent = word + " "; // Add space after each word
      span.style.opacity = "0";
      span.style.display = "inline-block";
      span.style.transform = "translateY(20px)";
      textRef.current.appendChild(span);

      masterTl.to(
        span,
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        `-=${i > 0 ? 0.25 : 0}`
      );
    });

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="relative inline-block mb-8">
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold relative z-10"
          >
            Our Mission
          </h2>
          <div
            ref={highlightRef}
            className="absolute bottom-0 left-0 h-3 bg-[#437dfe]/20 w-full -z-0"
          />
        </div>

        <p
          ref={textRef}
          className="text-lg md:text-xl text-gray-700 leading-relaxed space-words"
        >
          {missionText}
        </p>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#437dfe]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#1a365d]/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>
    </section>
  );
};

export default Mission;
