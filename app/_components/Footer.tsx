import Link from "next/link";
import { LogoMark } from "./Logo";
import { CookieSettingsLink } from "./CookieSettingsLink";

const FOOTER_LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/security", label: "Security" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="px-6 md:px-12 py-10 border-t border-white/8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="flex items-center gap-2.5 text-[13px] text-gray-500">
        <LogoMark size={24} />
        <span>© 2026 TrusTrak Solutions Ltd. London, UK.</span>
      </div>
      <div className="flex flex-wrap gap-6">
        {FOOTER_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-[13px] text-gray-500 hover:text-gray-300 transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <CookieSettingsLink />
      </div>
    </footer>
  );
}
