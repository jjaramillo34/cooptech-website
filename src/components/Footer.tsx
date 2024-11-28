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
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-primary-foreground">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="block">
              <Image
                src="/Pics/Cooplogo.webp"
                alt="CoopTech logo"
                width={200}
                height={60}
                className="mb-4"
              />
            </Link>
            <div className="space-y-2">
              <Button variant="link" className="flex items-center p-0 h-auto text-muted-foreground hover:text-primary">
                <MapPin className="mr-2 h-5 w-5" />
                <span>321 East 96th Street</span>
              </Button>
              <Button variant="link" className="flex items-center p-0 h-auto text-muted-foreground hover:text-primary">
                <Phone className="mr-2 h-5 w-5" />
                <span>(212) 369-8800</span>
              </Button>
              <Button variant="link" className="flex items-center p-0 h-auto text-muted-foreground hover:text-primary">
                <Mail className="mr-2 h-5 w-5" />
                <span>info@cooptech.org</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" asChild className="p-0 h-auto text-muted-foreground hover:text-primary">
                  <Link href="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild className="p-0 h-auto text-muted-foreground hover:text-primary">
                  <Link href="/programs">Programs</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild className="p-0 h-auto text-muted-foreground hover:text-primary">
                  <Link href="/about">About Us</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild className="p-0 h-auto text-muted-foreground hover:text-primary">
                  <Link href="/contact">Contact</Link>
                </Button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" asChild className="p-0 h-auto text-muted-foreground hover:text-primary">
                  <Link href="/auto">Automotive Services</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild className="p-0 h-auto text-muted-foreground hover:text-primary">
                  <Link href="/construction">Construction</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild className="p-0 h-auto text-muted-foreground hover:text-primary">
                  <Link href="/culinary">Culinary</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild className="p-0 h-auto text-muted-foreground hover:text-primary">
                  <Link href="/it">Information Technology</Link>
                </Button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="space-y-4">
              <Image
                src="/Pics/d79logo.webp"
                alt="District 79 logo"
                width={150}
                height={50}
                className="mb-4"
              />
              <Image
                src="/Pics/logo1.webp"
                alt="NYCDOE logo"
                width={150}
                height={50}
              />
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border/30" />

        <div className="text-center text-sm text-muted-foreground">
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