import Link from "next/link";
import { LogoMark } from "./Logo";
import { CALENDLY_URL } from "./config";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#frameworks", label: "Frameworks" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
];

export function Nav() {
  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 h-[68px] flex items-center justify-between px-5 md:px-12 backdrop-blur-xl border-b border-white/[0.08]"
      style={{ background: "rgba(10,15,30,0.8)" }}
    >
      <Link href="/" className="flex items-center gap-2.5 no-underline">
        <LogoMark size={32} />
        <span className="text-[17px] font-semibold text-white tracking-tight">
          RiskGuard
        </span>
      </Link>

      <ul className="hidden md:flex items-center gap-8 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition-colors font-normal"
            >
              {link.label}
            </a>
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
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-white bg-accent hover:bg-accent-bright rounded-lg px-5 py-[9px] transition-all hover:-translate-y-px inline-block"
          style={{ boxShadow: "0 0 20px rgba(79,110,247,0.3)" }}
        >
          Book a Demo
        </a>
      </div>
    </nav>
  );
}
