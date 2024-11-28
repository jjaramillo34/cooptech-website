// File: src/hooks/usePageTransition.js
import { useEffect } from "react";
import gsap from "gsap";

export const usePageTransition = () => {
  useEffect(() => {
    // Page enter animation
    const tl = gsap.timeline();

    tl.from("body > *", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
    });

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);
};
