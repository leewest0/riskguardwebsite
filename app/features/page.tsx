import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { FinalCTA } from "@/app/_components/FinalCTA";
import { FadeUp } from "@/app/_components/FadeUp";
import { FEATURES } from "@/app/_components/featureData";

export const metadata: Metadata = {
  title: "Features — RiskGuard",
  description:
    "Everything a UK tech startup needs to get audit-ready: risk register, controls library, evidence locker, AI advisor, auditor portal, PDF reports, document centre, and more.",
};

export default function FeaturesPage() {
  return (
    <>
      <Nav />

      <main className="pt-17">
        {/* Page hero */}
        <section className="py-24 px-6 text-center max-w-300 mx-auto">
          <FadeUp>
            <p className="text-xs font-medium text-accent-bright uppercase tracking-widest mb-4">
              Everything you need
            </p>
            <h1
              className="font-serif text-white mb-6 max-w-200 mx-auto"
              style={{
                fontSize: "clamp(40px, 6.5vw, 72px)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              GRC without
              <br />
              the complexity
            </h1>
            <p className="text-[19px] text-gray-300 font-light leading-relaxed max-w-140 mx-auto">
              Ten tightly integrated features that take a UK tech startup from
              zero to audit-ready — without a dedicated compliance team. Click
              any feature to go deeper.
            </p>
          </FadeUp>
        </section>

        {/* Features grid — each card links to its detail page */}
        <section className="pb-24 px-6 max-w-300 mx-auto">
          <FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FEATURES.map((f) => (
                <Link
                  key={f.slug}
                  href={`/features/${f.slug}`}
                  className="group bg-navy-light border border-white/8 hover:border-accent/30 rounded-2xl p-10 transition-colors flex flex-col"
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-[11px] flex items-center justify-center mb-6 shrink-0"
                    style={{
                      background: "rgba(79,110,247,0.15)",
                      border: "1px solid rgba(79,110,247,0.2)",
                    }}
                  >
                    <f.icon size={22} className="text-accent-bright" aria-hidden="true" />
                  </div>

                  <h2 className="text-xl font-semibold text-white mb-3 tracking-tight">
                    {f.title}
                  </h2>
                  <p className="text-[15px] text-gray-400 leading-relaxed font-light mb-6 flex-1">
                    {f.desc}
                  </p>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-3 mb-8">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-gray-400">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: "var(--color-accent)" }}
                          aria-hidden="true"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Learn more link — always visible */}
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-accent-bright">
                    Learn more
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </FadeUp>
        </section>

        {/* "Everything works together" callout */}
        <FadeUp>
          <section
            className="mx-6 mb-24 max-w-300 lg:mx-auto rounded-3xl px-10 py-20 sm:px-16 text-center"
            style={{
              background: "rgba(31,77,196,0.08)",
              border: "1px solid rgba(31,77,196,0.2)",
            }}
          >
            <p className="text-xs font-medium text-accent-bright uppercase tracking-widest mb-4">
              Built to work together
            </p>
            <h2
              className="font-serif text-white mb-5 max-w-150 mx-auto"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Every feature feeds the next
            </h2>
            <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-125 mx-auto">
              Risks link to controls. Controls link to evidence. Evidence feeds
              the audit report. The AI Advisor reads it all. This isn&apos;t a
              collection of tools — it&apos;s a single compliance workflow.
            </p>
          </section>
        </FadeUp>

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
