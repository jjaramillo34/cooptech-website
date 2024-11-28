// File: src/components/Navbar.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, Globe } from "lucide-react";

const navItems = [
  {
    label: "Programs",
    type: "dropdown",
    items: [
      { label: "Automotive Services", href: "/auto" },
      { label: "Construction and Building Skills", href: "/construction" },
      { label: "Culinary", href: "/culinary" },
      { label: "Electrical", href: "/electrical" },
      { label: "Health Services", href: "/health" },
      { label: "Information Technology", href: "/it" },
      { label: "Unisex Styling", href: "/service" },
      { type: "divider" },
      { label: "Work-Based Learning(WBL)", href: "/wbl" },
      { label: "OSHA", href: "/osha" },
    ],
  },
  {
    label: "About Us",
    type: "dropdown",
    items: [
      { label: "About Coop", href: "/about" },
      { label: "Principal's Message", href: "/principal" },
      { label: "Staff", href: "/staff" },
    ],
  },
  { label: "Contact", href: "/contact", type: "link" },
  { label: "FAQ", href: "/faq", type: "link" },
  {
    label: "Adult Education",
    href: "http://co-optech.org/Application/AE/Adult_ed_flyer_11.21.webp",
    type: "link",
  },
  {
    label: "Apply",
    href: "/PDFs/Application.pdf",
    type: "link",
    className: "text-[#437dfe] hover:text-[#437dfe]/80",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Initialize Google Translate
    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
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

  const handleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/Cooplogo.webp"
                alt="CoopTech logo"
                width={150}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative dropdown-container">
                {item.type === "dropdown" ? (
                  <div>
                    <button
                      onClick={() => handleDropdown(index)}
                      className={`px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 inline-flex items-center space-x-1 ${
                        activeDropdown === index ? "bg-gray-100" : ""
                      }`}
                      aria-expanded={activeDropdown === index}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === index && (
                      <div className="absolute top-full left-0 w-64 bg-white border rounded-md shadow-lg py-1 mt-1">
                        {item.items.map((subItem, subIndex) =>
                          subItem.type === "divider" ? (
                            <hr
                              key={subIndex}
                              className="my-1 border-gray-200"
                            />
                          ) : (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                              {subItem.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-md hover:bg-gray-100 block ${
                      item.className || "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Language Selector */}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-500" />
                <div id="google_translate_element"></div>
              </div>
            </div>
          </div>

          {/* Mobile menu button and translator */}
          <div className="md:hidden flex items-center space-x-2">
            <div className="scale-90">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-500" />
                <div id="google_translate_element_mobile"></div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.type === "dropdown" ? (
                  <div>
                    <button
                      onClick={() => handleDropdown(index)}
                      className="w-full px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 flex justify-between items-center"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === index && (
                      <div className="pl-4 space-y-1">
                        {item.items.map((subItem, subIndex) =>
                          subItem.type === "divider" ? (
                            <hr
                              key={subIndex}
                              className="my-1 border-gray-200"
                            />
                          ) : (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100"
                            >
                              {subItem.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 rounded-md hover:bg-gray-100 ${
                      item.className || "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
