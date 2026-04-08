"use client";
import React, { useState } from "react";
import Link from "next/link";
import logo from "@/public/icons/logo.png";
import darkmodeLogo from "@/public/icons/logo-darkmode.png";
import Image from "next/image";
import Button from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { FaTimes } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import { AiOutlineMenu, AiOutlineDown } from "react-icons/ai";

export default function Header() {
  const path = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  return (
    <header className="w-full bg-background text-foreground  xl:h-32 h-18 md:h-24 ">
      <div className=" mx-auto  flex items-center justify-between container h-full w-full ">
        <Link
          href="/"
          className="font-bold text-xl relative md:h-11 md:w-28 m h-6 w-16 "
        >
          {/* Light mode logo */}
          <Image
            src={logo}
            alt="Jade's Logo"
            fill
            className="object-contain "
          />

          {/* Dark mode logo */}
          {/* <Image
            src={darkmodeLogo}
            alt="Jade's Logo"
            fill
            className="object-contain hidden dark:block"
          /> */}
        </Link>

        <nav className="hidden lg:flex gap-8 text-xl font-semibold">
          <Link
            href="/about"
            className={
              path.includes("/about") ? "text-brand" : "hover:text-brand/70"
            }
          >
            About us
          </Link>
          <Link
            href="/services"
            className={
              path.includes("/services") ? "text-brand" : "hover:text-brand/70"
            }
          >
            Services
          </Link>
          <Link
            href="/works"
            className={
              path.includes("/works") ? "text-brand" : "hover:text-brand/70"
            }
          >
            Our work
          </Link>
        </nav>

        <div className="hidden lg:flex">
          <Button variant="primary" size="md" href="/contact" icon>
            Book a Consultation
          </Button>
        </div>
        <div
          className="lg:hidden  text-brand sm:text-3xl text-2xl"
          onClick={handleMenuClick}
        >
          <AiOutlineMenu />
        </div>
      </div>

      <div
        className={`fixed overflow-hidden w-full transition-transform duration-500 ease-in-out bg-white h-screen inset-0 lg:hidden z-50 flex ${
          !menuOpen ? "-translate-x-full" : ""
        }`}
      >
        <div className="w-full h-full flex mx-auto items-center justify-center relative">
          <div className="absolute top-10 right-12">
            <LiaTimesSolid size={24} onClick={handleMenuClose} />
          </div>
          <nav className="flex flex-col font-semibold items-center justify-center gap-5 w-60">
            <Link
              onClick={handleMenuClose}
              href="/"
              className={`cursor-pointer text-center  ${
                path == "/" ? "text-brand " : ""
              }`}
            >
              Home
            </Link>
            <Link
              onClick={handleMenuClose}
              href="/about"
              className={
                path.includes("/about") ? "text-brand" : "hover:text-brand/70"
              }
            >
              About us
            </Link>
            <Link
              onClick={handleMenuClose}
              href="/services"
              className={
                path.includes("/services")
                  ? "text-brand"
                  : "hover:text-brand/70"
              }
            >
              Services
            </Link>
            <Link
              onClick={handleMenuClose}
              href="/works"
              className={
                path.includes("/works") ? "text-brand" : "hover:text-brand/70"
              }
            >
              Our work
            </Link>
            <Button
              onClick={handleMenuClose}
              variant="primary"
              size="sm"
              href="/contact"
              icon
            >
              Book a Consultation
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
