"use client";
import { useState } from "react";
import Link from "next/link";
import { LogoMark } from "./Logo";
import { CALENDLY_URL } from "./config";

const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/frameworks", label: "Frameworks" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-50 h-17 flex items-center justify-between px-5 md:px-12 backdrop-blur-xl border-b border-white/8"
        style={{ background: "rgba(10,15,30,0.8)" }}
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 no-underline"
          onClick={() => setIsOpen(false)}
        >
          <LogoMark size={32} />
          <span className="text-[17px] font-semibold text-white tracking-tight">
            RiskGuard
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul role="list" className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors font-normal"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden sm:inline-block text-sm text-gray-300 hover:text-white transition-colors"
          >
            Sign in
          </a>

          {/* Desktop CTA */}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block text-sm font-medium text-white bg-accent hover:bg-accent-bright rounded-lg px-5 py-2.25 transition-all hover:-translate-y-px"
            style={{ boxShadow: "0 0 20px rgba(31,77,196,0.3)" }}
          >
            Book a Demo
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span
              className="block w-5 h-0.5 bg-white rounded-full transition-all duration-300 origin-center"
              style={{ transform: isOpen ? "translateY(8px) rotate(45deg)" : "none" }}
            />
            <span
              className="block w-5 h-0.5 bg-white rounded-full transition-all duration-300"
              style={{ opacity: isOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-0.5 bg-white rounded-full transition-all duration-300 origin-center"
              style={{ transform: isOpen ? "translateY(-8px) rotate(-45deg)" : "none" }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className="fixed top-17 inset-x-0 z-40 md:hidden border-b border-white/8 backdrop-blur-xl overflow-hidden transition-all duration-300"
        style={{
          background: "rgba(10,15,30,0.97)",
          maxHeight: isOpen ? "400px" : "0px",
        }}
      >
        <div className="flex flex-col px-5 py-6 gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base text-gray-300 hover:text-white transition-colors py-3.5 border-b border-white/8 last:border-b-0"
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 pt-5">
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors py-2 text-center"
            >
              Sign in
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-white bg-accent hover:bg-accent-bright rounded-lg px-5 py-3 transition-all text-center"
              style={{ boxShadow: "0 0 20px rgba(31,77,196,0.3)" }}
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
