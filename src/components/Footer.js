// File: src/components/Footer.js
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a365d] text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/Cooplogo.webp"
                alt="CoopTech logo"
                width={200}
                height={60}
                className="mb-4"
              />
            </Link>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <p>321 East 96th Street</p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <p>(212) 369-8800</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <p>info@cooptech.org</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#437dfe] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-[#437dfe] transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#437dfe] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#437dfe] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/auto"
                  className="hover:text-[#437dfe] transition-colors"
                >
                  Automotive Services
                </Link>
              </li>
              <li>
                <Link
                  href="/construction"
                  className="hover:text-[#437dfe] transition-colors"
                >
                  Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/culinary"
                  className="hover:text-[#437dfe] transition-colors"
                >
                  Culinary
                </Link>
              </li>
              <li>
                <Link
                  href="/it"
                  className="hover:text-[#437dfe] transition-colors"
                >
                  Information Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[#437dfe] transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-[#437dfe] transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-[#437dfe] transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-[#437dfe] transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div>
              <Image
                src="/Pics/d79logo.webp"
                alt="District 79 logo"
                width={150}
                height={50}
                className="mb-4"
              />
              <Image
                src="/Pics/doelogo.webp"
                alt="NYCDOE logo"
                width={150}
                height={50}
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-600 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} School of Cooperative Technical
            Education. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
