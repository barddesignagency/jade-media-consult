// components/Navbar.tsx
"use client";
import Link from "next/link";
import logo from "@/public/icons/logo.png";
import darkmodeLogo from "@/public/icons/logo-darkmode.png";
import Image from "next/image";
import Button from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
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

        <nav className="hidden md:flex gap-8 text-xl font-semibold">
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

        <div className="hidden md:flex">
          <Button variant="primary" size="md" icon>
            Book a Consultation
          </Button>
        </div>
      </div>
    </header>
  );
}
