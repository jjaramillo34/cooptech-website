"use client";

import { useEffect } from "react";
import LanguageSelector from "@/components/LanguageSelector";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  useEffect(() => {
    // Remove Google Translate's automatic top padding
    const observer = new MutationObserver(() => {
      document.body.style.top = '0px';
      document.body.style.position = 'static';
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['style'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <LanguageSelector />
      {children}
    </>
  );
} 