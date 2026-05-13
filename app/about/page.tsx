import type { Metadata } from "next";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { FinalCTA } from "@/app/_components/FinalCTA";
import { Globe } from "./Globe";

export const metadata: Metadata = {
  title: "About — RiskGuard",
  description:
    "RiskGuard is built by TrusTrak Solutions Ltd in London — a GRC platform for UK tech startups who'd rather ship than chase spreadsheets.",
};

function AboutHero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] pt-32 pb-20 px-6 overflow-hidden">
      {/* Globe — hidden on mobile, shown from md breakpoint up */}
      <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none">
        <div
          className="w-140 h-140 md:w-190 md:h-190 pointer-events-auto"
          style={{
            maskImage:
              "radial-gradient(ellipse 75% 75% at 50% 50%, black 40%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 75% at 50% 50%, black 40%, transparent 72%)",
            opacity: 0.85,
          }}
        >
          <Globe />
        </div>
      </div>

      {/* Gradient vignette over the globe so text stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, transparent 30%, rgba(10,15,30,0.7) 70%, #0a0f1e 100%)",
        }}
      />

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-[13px] font-medium animate-fade-up"
          style={{
            background: "rgba(79,110,247,0.12)",
            border: "1px solid rgba(79,110,247,0.3)",
            color: "var(--color-accent-bright)",
          }}
        >
          Our mission
        </div>

        <h1
          className="font-serif text-white max-w-205 mb-6 animate-fade-up"
          style={{
            fontSize: "clamp(40px, 6.5vw, 72px)",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            animationDelay: "0.1s",
          }}
        >
          Make compliance feel less like
          <br />
          <em className="italic text-accent-bright">paperwork</em> and more like
          progress.
        </h1>

        <p
          className="text-gray-300 max-w-150 font-light animate-fade-up"
          style={{
            fontSize: "clamp(16px, 2vw, 19px)",
            lineHeight: 1.65,
            animationDelay: "0.2s",
          }}
        >
          We built the GRC platform we wish existed when we were
          running compliance ourselves — one that gets growing teams audit-ready
          in weeks, not quarters.
        </p>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="px-6 py-24 border-t border-white/8">
      <div className="max-w-190 mx-auto">
        <p className="text-xs font-medium text-accent-bright uppercase tracking-widest mb-4">
          The story
        </p>
        <h2
          className="font-serif text-white mb-12"
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Why RiskGuard exists
        </h2>

        <div className="flex flex-col gap-6 text-[17px] leading-[1.75] text-gray-300 font-light">
          <p>
            UK tech startups are being asked for ISO 27001, SOC 2, and GDPR
            evidence earlier than ever — often before they&apos;ve closed their
            first enterprise deal. The pressure is real, but the tooling is
            built for somebody else.
          </p>
          <p>
            Legacy GRC platforms assume a full compliance team. Spreadsheets
            buckle the moment auditors ask for evidence trails. Consultants are
            fast but expensive, and you end up paying every renewal cycle. The
            result: engineers spend weeks chasing screenshots, founders lose
            deals to compliance delays, and security ends up as theatre instead
            of substance.
          </p>
          <p>
            We saw an opening. A GRC platform built for the team you actually
            have — small, fast-moving, technical — that automates the parts a
            machine should handle and surfaces the parts that need a human.
            Audit-ready by default, not by heroics.
          </p>
          <p className="text-white">
            That&apos;s RiskGuard. Built in London, for the next generation of
            UK tech.
          </p>
        </div>
      </div>
    </section>
  );
}

const VALUES = [
  {
    label: "Pragmatic over perfect",
    body: "Compliance shouldn't block shipping. We optimise for the path that gets you audit-ready and out the door — not the one that wins academic points.",
  },
  {
    label: "Built for builders",
    body: "Engineers respect their time. So does our platform. Sensible defaults, clean APIs, and no busywork that exists only to feed a dashboard.",
  },
  {
    label: "Evidence over theatre",
    body: "Real audit trails. Tamper-evident files. Honest scoring. We'd rather show you a gap than paper one over with a checkbox.",
  },
  {
    label: "Transparent by default",
    body: "We publish our security posture, our uptime, and our incidents. If we're asking you to trust us with your compliance data, you deserve to see how we run.",
  },
];

function Values() {
  return (
    <section className="px-6 py-24 bg-navy-mid border-y border-white/8">
      <div className="max-w-275 mx-auto">
        <p className="text-xs font-medium text-accent-bright uppercase tracking-widest mb-4 text-center">
          What we believe
        </p>
        <h2
          className="font-serif text-white text-center mx-auto mb-16"
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: 600,
          }}
        >
          Four principles we don&apos;t bend on
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {VALUES.map((v, i) => (
            <div
              key={v.label}
              className="bg-navy border border-white/8 rounded-2xl p-8 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-serif text-accent-bright text-xl">
                  0{i + 1}
                </span>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {v.label}
                </h3>
              </div>
              <p className="text-[15px] text-gray-300 leading-relaxed font-light">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompanyInfo() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-190 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-navy-light border border-white/8 rounded-2xl p-8">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-4">
            Operated by
          </p>
          <p className="font-serif text-white text-2xl mb-2 leading-tight">
            TrusTrak Solutions Ltd
          </p>
          <p className="text-sm text-gray-300 font-light leading-relaxed">
            A private limited company registered in England &amp; Wales.
            Headquartered in London.
          </p>
        </div>
        <div className="bg-navy-light border border-white/8 rounded-2xl p-8">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-4">
            Get in touch
          </p>
          <p className="font-serif text-white text-2xl mb-2 leading-tight">
            We&apos;d love to hear from you
          </p>
          <p className="text-sm text-gray-300 font-light leading-relaxed">
            Whether you&apos;re evaluating GRC tools or just want to compare
            notes on compliance, our inbox is open.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <AboutHero />
        <Story />
        <Values />
        <CompanyInfo />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
