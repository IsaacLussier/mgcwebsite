"use client";
// This file is a client component that renders the navigation bar for the WMU MGC website.
// It includes links to various sections such as Home, About, Service, and Events.

// components/Navbar.tsx
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll(); // Run on load
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-70 px-12  transition-colors duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center border border-red-500">
        <div className="relative h-16 w-46">
          <Link href="/" className="block absolute -bottom-24 right-0">
            <img
              src="/other/mgcicon.png"
              alt="MGC Logo"
              className="h-38 w-auto drop-shadow-md"
            />
          </Link>
        </div>
        
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/">Home</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-4 w-[200px] space-y-2">
                  <li><NavigationMenuLink href="/about">Mission</NavigationMenuLink></li>
                  <li><NavigationMenuLink href="/eboard">Executive Board</NavigationMenuLink></li>
                  <li><NavigationMenuLink href="/orgs">Organizations</NavigationMenuLink></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Service</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-4 w-[200px] space-y-2">
                  <li><NavigationMenuLink href="/about">Mission</NavigationMenuLink></li>
                  <li><NavigationMenuLink href="/community">Community</NavigationMenuLink></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Events</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-4 w-[200px] space-y-2">
                  <li><NavigationMenuLink href="/fall">Fall Events</NavigationMenuLink></li>
                  <li><NavigationMenuLink href="/spring">Spring Events</NavigationMenuLink></li>
                  <li><NavigationMenuLink href="/calendar">Calendar</NavigationMenuLink></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}