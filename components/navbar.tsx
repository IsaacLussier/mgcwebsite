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
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      {/* LOGO absolutely positioned in top-left */}
      <div className="absolute top-2 left-4 z-50">
        <Link href="/">
          <img
            src="/other/mgcicon.png"
            alt="MGC Logo"
            className="h-36 w-auto drop-shadow-md"
          />
        </Link>
      </div>

      {/* Navigation Links (Centered Container) */}
      <div className="relative max-w-8xl mx-auto flex justify-end items-center h-24 px-20">
          <NavigationMenu className="relative w-full flex justify-end">
            <NavigationMenuList>
              <NavigationMenuItem className="space-x-8">
                <NavigationMenuLink href="/" className="block px-8 py-2 text-sm text-[#0] hover:bg-[#D4AF37] hover:text-white rounded transition-colors duration-150">Home</NavigationMenuLink>
              </NavigationMenuItem>

              {/* About Menu Item */}
              <NavigationMenuItem className="relative">
                <Link href="/about">
                <NavigationMenuTrigger className="px-8 py-4 text-lg font-semibold text-[#D4AF37] border border-[#D4AF37] bg-white rounded-sm hover:bg-[#D4AF37] hover:text-white transition-colors duration-200 transition-transform hover:scale-103 shadow-md" >About</NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent className="bg-white shadow-lg border border-[#D4AF37] rounded">
                  <ul className="p-4 w-[200px] space-y-2">
                    <li><NavigationMenuLink href="/about#mission" className="block px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded transition-colors duration-150">Mission</NavigationMenuLink></li>
                    <li><NavigationMenuLink href="/about#history" className="block px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded transition-colors duration-150">History</NavigationMenuLink></li>
                    <li><NavigationMenuLink href="/about#eboard" className="block px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded transition-colors duration-150">Executive Board</NavigationMenuLink></li>
                    <li><NavigationMenuLink href="/about#socials" className="block px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded transition-colors duration-150">Socials</NavigationMenuLink></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Organizations Menu Item */}
              <NavigationMenuItem className="relative">
                <Link href="/orgs">
                <NavigationMenuTrigger className="px-8 py-4 text-lg font-semibold text-[#D4AF37] border border-[#D4AF37] bg-white rounded-sm hover:bg-[#D4AF37] hover:text-white transition-colors duration-200 transition-transform hover:scale-103 shadow-md">Organizations</NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent className="bg-white shadow-lg border border-[#D4AF37] rounded">
                  <ul className="p-4 w-[200px] space-y-2">
                    <li><NavigationMenuLink href="/slb" className="block px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded transition-colors duration-150">ΣLB</NavigationMenuLink></li>
                    <li><NavigationMenuLink href="/slg" className="block px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded transition-colors duration-150">ΣLG</NavigationMenuLink></li>
                    <li><NavigationMenuLink href="/lta" className="block px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded transition-colors duration-150">ΛΘΑ</NavigationMenuLink></li>
                    <li><NavigationMenuLink href="/odp" className="block px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded transition-colors duration-150">ΩΔΦ</NavigationMenuLink></li>
                    <li><NavigationMenuLink href="/dtl" className="block px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded transition-colors duration-150">ΔΤΛ</NavigationMenuLink></li>
                    <li><NavigationMenuLink href="/pia" className="block px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded transition-colors duration-150">ΦΙΑ</NavigationMenuLink></li>
                    <li><NavigationMenuLink href="/syz" className="block px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded transition-colors duration-150">ΣΨΖ</NavigationMenuLink></li>
                    <li><NavigationMenuLink href="/zsx" className="block px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded transition-colors duration-150">ΖΣΧ</NavigationMenuLink></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Service Menu Item */}
              <NavigationMenuItem className="relative">
                <Link href="/service">
                <NavigationMenuTrigger className="px-8 py-4 text-lg font-semibold text-[#D4AF37] border border-[#D4AF37] bg-white rounded-sm hover:bg-[#D4AF37] hover:text-white transition-colors duration-200 transition-transform hover:scale-103 shadow-md">Service</NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent className="bg-white shadow-lg border border-[#D4AF37] rounded">
                  <ul className="p-4 w-[200px] space-y-2">
                    <li><NavigationMenuLink href="/about" className="block px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded transition-colors duration-150">Community Involvement</NavigationMenuLink></li>
                    <li><NavigationMenuLink href="/community" className="block px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded transition-colors duration-150">Service Events</NavigationMenuLink></li>
                    <li><NavigationMenuLink href="/community" className="block px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded transition-colors duration-150">Contact Us</NavigationMenuLink></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Events Menu Item */}
              <NavigationMenuItem className="relative">
                <Link href="/events">
                <NavigationMenuTrigger className="px-8 py-4 text-lg font-semibold text-[#D4AF37] border border-[#D4AF37] bg-white rounded-sm hover:bg-[#D4AF37] hover:text-white transition-colors duration-200 transition-transform hover:scale-103 shadow-md">Events</NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent className="bg-white shadow-lg border border-[#D4AF37] rounded">
                  <ul className="p-4 w-[200px] space-y-2">
                    <li><NavigationMenuLink href="/fall" className="block px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded transition-colors duration-150">Fall Events</NavigationMenuLink></li>
                    <li><NavigationMenuLink href="/spring" className="block px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded transition-colors duration-150">Spring Events</NavigationMenuLink></li>
                    <li><NavigationMenuLink href="/calendar" className="block px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded transition-colors duration-150">Calendar</NavigationMenuLink></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
      </div>  
    </nav>
  );
}