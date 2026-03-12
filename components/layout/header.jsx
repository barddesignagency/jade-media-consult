// components/Navbar.tsx
import Link from "next/link";
import logo from "@/public/icons/logo.png";
import darkmodeLogo from "@/public/icons/logo-darkmode.png";
import Image from "next/image";
import Button from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full bg-background text-foreground  xl:h-32">
      <div className=" mx-auto  flex items-center justify-between container h-full w-full ">
        <div className="font-bold text-xl relative h-11 w-28">
          {/* Light mode logo */}
          <Image
            src={logo}
            alt="Jade's Logo"
            fill
            className="object-contain dark:hidden"
          />

          {/* Dark mode logo */}
          <Image
            src={darkmodeLogo}
            alt="Jade's Logo"
            fill
            className="object-contain hidden dark:block"
          />
        </div>

        <nav className="hidden md:flex gap-8 text-xl">
          <Link href="/about">About us</Link>
          <Link href="/services">Services</Link>
          <Link href="/works">Our work</Link>
        </nav>

        <Button variant="primary" size="md" icon>
          Contact us
        </Button>
      </div>
    </header>
  );
}
