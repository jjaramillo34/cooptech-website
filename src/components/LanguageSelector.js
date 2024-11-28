// File: src/components/LanguageSelector.js
"use client";

import { useEffect } from "react";
import { Globe } from "lucide-react";

const LanguageSelector = () => {
  useEffect(() => {
    // Load Google Translate script
    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,zh,ar,ru,ko,fr",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    return () => {
      document.body.removeChild(addScript);
    };
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-500" />
      <div id="google_translate_element" />
    </div>
  );
};

export default LanguageSelector;
