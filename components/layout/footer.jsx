import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "@/public/icons/logo-white.png";

function Footer() {
  return (
    <footer className="bg-[url('/images/bg-pattern-footer.jpg')] bg-cover bg-top w-full text-white pt-24 font-sans">
      <div className="container">
        {/* Top Footer */}
        <div className="flex flex-col lg:flex-row justify-start gap-8 lg:gap-18">
          {/* Brand */}
          <div className="grow space-y-4">
            <div className="relative h-11 w-28">
              <Image
                src={logo}
                alt="Jade Media Consult logo"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-white leading-[140%] lg:max-w-sm lg:pr-4">
              Building a strong digital footprint, one brand at a time.
              Strategy. Structure. Consistency.
            </p>
          </div>

          {/* Quick Links */}
          <div className="shrink-0">
            <h4 className="mb-4 text-white">Quick links</h4>

            <ul className="lg:space-y-4 text-white lg:text-xl space-y-2">
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/work">Our work</Link>
              </li>
              <li>
                <Link href="/contact">Contact us</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-white">Talk to us</h4>

            <div className="space-y-4 text-white lg:text-xl">
              <Link href="tel:09160833016" className="flex items-center gap-3">
                <FaPhoneAlt className="text-brand" />
                <span>0916 083 3016</span>
              </Link>

              <Link
                href="mailto:jademediaconsult@gmail.com"
                className="flex items-center gap-3"
              >
                <FaEnvelope className="text-brand" />
                <span>jademediaconsult@gmail.com</span>
              </Link>

              <div className="flex gap-4 pt-2">
                <Link href="#">
                  <FaLinkedinIn className="text-brand text-lg" />
                </Link>

                <Link href="#">
                  <FaInstagram className="text-brand text-lg" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white mt-24 py-6 flex flex-col lg:flex-row justify-between gap-6 text-white">
          <p>© 2026 Jade Media Consultancy. All rights reserved.</p>

          <div className="flex gap-6 lg:text-xl">
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms of service</Link>
            <Link href="/cookies">Cookie policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
