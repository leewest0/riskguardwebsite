import type { Metadata } from "next";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { ObfuscatedEmail } from "@/app/_components/ObfuscatedEmail";
import { CALENDLY_URL } from "@/app/_components/config";

export const metadata: Metadata = {
  title: "Contact — RiskGuard",
  description:
    "Get in touch with the RiskGuard team — whether you're evaluating GRC tools or have a question about compliance.",
};

const CONTACTS = [
  {
    label: "General enquiries",
    user: "support",
    domain: "riskguardhq.com",
    desc: "Questions about the platform, partnerships, or anything else.",
  },
  {
    label: "Security disclosures",
    user: "security",
    domain: "riskguardhq.com",
    desc: "Report a vulnerability or security concern privately.",
  },
  {
    label: "Privacy & data requests",
    user: "privacy",
    domain: "riskguardhq.com",
    desc: "Exercise your data rights or ask about our privacy practices.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        {/* Hero */}
        <section className="pt-40 pb-20 px-6 text-center">
          <p className="text-xs font-medium text-accent-bright uppercase tracking-widest mb-4">
            Get in touch
          </p>
          <h1
            className="font-serif text-white mx-auto mb-6"
            style={{
              fontSize: "clamp(40px, 6.5vw, 72px)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              maxWidth: 680,
            }}
          >
            We&apos;d love to
            <br />
            <em className="italic text-accent-bright">hear from you.</em>
          </h1>
          <p
            className="text-gray-300 max-w-130 mx-auto font-light"
            style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.65 }}
          >
            Whether you&apos;re evaluating GRC tools, have a compliance question, or just want
            to compare notes — our inbox is open.
          </p>
        </section>

        {/* Contact cards */}
        <section className="px-6 py-24 border-t border-white/8">
          <div className="max-w-220 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {CONTACTS.map((c) => (
              <div
                key={c.user}
                className="group bg-navy-light border border-white/8 hover:border-accent/30 rounded-2xl p-8 transition-colors"
              >
                <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-3">
                  {c.label}
                </p>
                <ObfuscatedEmail
                  user={c.user}
                  domain={c.domain}
                  className="block text-base font-medium text-accent-bright hover:text-white transition-colors mb-2 break-all"
                />
                <p className="text-sm text-gray-500 font-light leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Book a demo CTA */}
          <div className="max-w-220 mx-auto">
            <div
              className="rounded-2xl border border-white/8 p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
              style={{ background: "rgba(31,77,196,0.06)" }}
            >
              <div>
                <p className="text-xs font-medium text-accent-bright uppercase tracking-widest mb-3">
                  Prefer a conversation?
                </p>
                <h2
                  className="font-serif text-white mb-3"
                  style={{
                    fontSize: "clamp(24px, 4vw, 36px)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Book a 30-minute demo
                </h2>
                <p className="text-[15px] text-gray-300 font-light leading-relaxed max-w-md">
                  We&apos;ll walk you through the platform, answer your questions, and help you
                  figure out if RiskGuard is the right fit for your team.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-white bg-accent hover:bg-accent-bright rounded-lg px-7 py-3.5 transition-all hover:-translate-y-px whitespace-nowrap"
                  style={{ boxShadow: "0 0 24px rgba(31,77,196,0.35)" }}
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="max-w-220 mx-auto mt-16 text-center">
            <p className="text-sm text-gray-500 font-light">
              <span className="text-gray-400">TrusTrak Solutions Ltd</span> &nbsp;·&nbsp;
              Registered in England &amp; Wales &nbsp;·&nbsp; London, UK
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
