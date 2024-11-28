// File: src/components/Announcement.js
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Megaphone, AppWindow } from "lucide-react";

const Announcement = () => {
  const announcementRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Initial slide down animation
    gsap.from(announcementRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // Subtle pulse animation for icon
    gsap.to(".announcement-icon", {
      scale: 1.1,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Text fade animation
    gsap.from(textRef.current, {
      opacity: 0,
      delay: 0.3,
      duration: 0.8,
    });
  }, []);

  return (
    <div
      ref={announcementRef}
      className="border-y border-[#437dfe]/20 bg-white/95 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
          <div className="flex items-center gap-3">
            <div className="bg-[#437dfe]/10 p-3 rounded-full">
              <AppWindow className="announcement-icon h-6 w-6 text-[#437dfe]" />
            </div>
            <span className="font-semibold text-gray-700">
              New Online System
            </span>
          </div>

          <div ref={textRef} className="flex-1 text-center md:text-left">
            <h4 className="text-lg text-gray-600">
              We are excited to announce that we will be launching our new
              online enrollment system shortly. Please keep checking here for
              the live link.
            </h4>
          </div>

          <button
            className="px-4 py-2 bg-[#437dfe] text-white rounded-md hover:bg-[#437dfe]/90 transition-colors flex items-center gap-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Megaphone className="h-4 w-4" />
            <span>Learn More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
