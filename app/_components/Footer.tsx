import { LogoMark } from "./Logo";

const FOOTER_LINKS = [
  { href: "#", label: "Privacy" },
  { href: "#", label: "Terms" },
  { href: "#", label: "Security" },
  { href: "#", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="px-6 md:px-12 py-10 border-t border-white/[0.08] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="flex items-center gap-2.5 text-[13px] text-gray-500">
        <LogoMark size={24} glow={false} />
        <span>© 2026 TrusTrak Solutions Ltd. London, UK.</span>
      </div>
      <div className="flex gap-6">
        {FOOTER_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[13px] text-gray-500 hover:text-gray-300 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
