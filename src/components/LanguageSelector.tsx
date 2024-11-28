"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: new (config: {
          pageLanguage: string;
          includedLanguages: string;
          layout: any;
        }, element: string) => void & {
          InlineLayout: {
            SIMPLE: any;
          };
        };
      };
    };
  }
}

export default function LanguageSelector() {
  useEffect(() => {
    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,zh-CN,ar,bn,ru,ko,ht",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  return (
    <>
      <div
        id="google_translate_element"
        className="relative z-50 min-w-[150px]"
        aria-label="Language Selector"
      />
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
} 