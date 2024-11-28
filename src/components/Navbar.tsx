"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { programs, specialPrograms, aboutItems } from "@/config/programs";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="container flex h-20 items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/Pics/Cooplogo.webp" alt="Coop Tech Logo" width={150} height={50} priority />
        </Link>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {/* Home */}
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* About Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {aboutItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Programs Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {programs.map((program) => (
                    <ListItem
                      key={program.title}
                      title={program.title}
                      href={`/${program.slug}`}
                    >
                      {program.description}
                    </ListItem>
                  ))}
                  <Separator className="col-span-2 my-2" />
                  {specialPrograms.map((program) => (
                    <ListItem
                      key={program.title}
                      title={program.title}
                      href={`/${program.slug}`}
                    >
                      {program.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Staff */}
            <NavigationMenuItem>
              <Link href="/staff" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Staff
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Gallery */}
            <NavigationMenuItem>
              <Link href="/gallery" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Gallery
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* FAQ */}
            <NavigationMenuItem>
              <Link href="/faq" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  FAQ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden md:block">
          <LanguageSelector />
        </div>
        <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
          <Link href="/PDFs/Application.pdf">Apply Now</Link>
        </Button>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 py-4">
              <Link
                href="/"
                className="flex items-center space-x-2"
                onClick={() => {
                  const sheet = document.querySelector('[data-state="open"]');
                  if (sheet) {
                    sheet.setAttribute('data-state', 'closed');
                  }
                }}
              >
                <Image src="/Pics/Cooplogo.webp" alt="Coop Tech Logo" width={120} height={40} priority />
              </Link>
              <Separator />
              <div className="flex flex-col space-y-3">
                {aboutItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-foreground/70 transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                ))}
                <Separator />
                <div className="font-medium">Programs:</div>
                {programs.map((program) => (
                  <Link
                    key={program.title}
                    href={`/${program.slug}`}
                    className="text-foreground/70 transition-colors hover:text-foreground"
                  >
                    {program.title}
                  </Link>
                ))}
                {specialPrograms.map((program) => (
                  <Link
                    key={program.title}
                    href={`/${program.slug}`}
                    className="text-foreground/70 transition-colors hover:text-foreground"
                  >
                    {program.title}
                  </Link>
                ))}
                <Separator />
                <Link href="/staff" className="text-foreground/70 transition-colors hover:text-foreground">
                  Staff
                </Link>
                <Link href="/gallery" className="text-foreground/70 transition-colors hover:text-foreground">
                  Gallery
                </Link>
                <Link href="/faq" className="text-foreground/70 transition-colors hover:text-foreground">
                  FAQ
                </Link>
                <Link href="/contact" className="text-foreground/70 transition-colors hover:text-foreground">
                  Contact
                </Link>
              </div>
              <Separator />
              <div className="space-y-4">
                <LanguageSelector />
                <Button asChild className="w-full">
                  <Link href="/PDFs/Application.pdf">Apply Now</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
} 