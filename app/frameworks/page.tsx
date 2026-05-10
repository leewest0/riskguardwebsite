import type { Metadata } from "next";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { FinalCTA } from "@/app/_components/FinalCTA";
import { FadeUp } from "@/app/_components/FadeUp";

export const metadata: Metadata = {
  title: "Compliance Frameworks — RiskGuard",
  description:
    "RiskGuard maps your controls and risks to ISO 27001, SOC 2, NIST CSF, PCI DSS, GDPR, and HIPAA — automatically, from a single platform.",
};

const FRAMEWORKS = [
  {
    name: "ISO 27001",
    type: "Information Security",
    color: "#4F6EF7",
    bg: "rgba(79,110,247,0.08)",
    border: "rgba(79,110,247,0.2)",
    summary:
      "The international standard for information security management systems (ISMS). The most recognised framework for enterprise security certification.",
    details: [
      "114 Annex A controls across 14 domains",
      "Covers risk assessment, access control, cryptography, and incident response",
      "Required by many enterprise procurement and vendor security reviews",
      "Certification issued by accredited third-party auditors",
    ],
  },
  {
    name: "SOC 2",
    type: "Trust & Security",
    color: "#0CCFB0",
    bg: "rgba(12,207,176,0.08)",
    border: "rgba(12,207,176,0.2)",
    summary:
      "The US standard for SaaS and cloud service providers. Increasingly required by US enterprise customers before signing contracts.",
    details: [
      "Five Trust Service Criteria: Security, Availability, Processing Integrity, Confidentiality, Privacy",
      "Type I (design) and Type II (operating effectiveness over time) audits",
      "Security criterion is mandatory — others are optional by scope",
      "Auditor report shared directly with customers under NDA",
    ],
  },
  {
    name: "NIST CSF",
    type: "Cybersecurity",
    color: "#FBB024",
    bg: "rgba(251,176,36,0.08)",
    border: "rgba(251,176,36,0.2)",
    summary:
      "The US National Institute of Standards and Technology Cybersecurity Framework. A flexible, risk-based approach to managing cyber risk.",
    details: [
      "Five core functions: Identify, Protect, Detect, Respond, Recover",
      "Framework tiers allow you to target your current maturity level",
      "Used as a baseline by US federal agencies and regulated industries",
      "Maps cleanly to ISO 27001 — one set of controls covers both",
    ],
  },
  {
    name: "PCI DSS",
    type: "Payment Security",
    color: "#EF4444",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.2)",
    summary:
      "Required for any organisation that stores, processes, or transmits cardholder data. Mandatory if you handle payment cards.",
    details: [
      "12 high-level requirements covering network security, access control, and monitoring",
      "Levels 1–4 based on annual card transaction volume",
      "Non-compliance can result in fines and loss of payment processing rights",
      "Annual assessment by Qualified Security Assessor (QSA) at higher levels",
    ],
  },
  {
    name: "GDPR",
    type: "Data Privacy",
    color: "#A855F7",
    bg: "rgba(168,85,247,0.08)",
    border: "rgba(168,85,247,0.2)",
    summary:
      "The UK and EU General Data Protection Regulation. Mandatory for any organisation processing personal data of UK or EU residents.",
    details: [
      "Lawful basis required for every category of personal data processing",
      "Data subject rights: access, rectification, erasure, portability",
      "Breach notification to ICO within 72 hours",
      "Fines up to £17.5M or 4% of global annual turnover (whichever is higher)",
    ],
  },
  {
    name: "HIPAA",
    type: "Healthcare",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
    summary:
      "US Healthcare data regulation covering protected health information (PHI). Required for health tech companies operating in the US market.",
    details: [
      "Administrative, physical, and technical safeguards for PHI",
      "Privacy Rule covers use and disclosure of health information",
      "Security Rule sets standards for electronic PHI (ePHI)",
      "Breach notification requirements under the Breach Notification Rule",
    ],
  },
];

const MAPPING_STATS = [
  { value: "6", label: "Frameworks" },
  { value: "1", label: "Platform" },
  { value: "0", label: "Duplication" },
];

export default function FrameworksPage() {
  return (
    <>
      <Nav />

      <main className="pt-17">
        {/* Hero */}
        <section className="py-24 px-6 text-center max-w-300 mx-auto">
          <FadeUp>
            <p className="text-xs font-medium text-accent-bright uppercase tracking-widest mb-4">
              Multi-framework
            </p>
            <h1
              className="font-serif text-white mb-5 max-w-200 mx-auto"
              style={{
                fontSize: "clamp(40px, 6.5vw, 72px)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              One platform.
              <br />
              Every framework.
            </h1>
            <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-125 mx-auto">
              Map your controls and risks to every major compliance standard
              simultaneously. No duplication. No spreadsheets. No consultant fees.
            </p>
          </FadeUp>

          {/* Stats strip */}
          <FadeUp>
            <div className="flex items-center justify-center gap-12 mt-14">
              {MAPPING_STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    className="font-serif text-white"
                    style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1 }}
                  >
                    {s.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </section>

        {/* Framework cards */}
        <section className="pb-24 px-6 max-w-300 mx-auto">
          <FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FRAMEWORKS.map((fw) => (
                <div
                  key={fw.name}
                  className="bg-navy-light border border-white/8 hover:border-accent/30 rounded-2xl p-8 transition-colors"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ background: fw.color }}
                      aria-hidden="true"
                    />
                    <div>
                      <div className="text-base font-semibold text-white">
                        {fw.name}
                      </div>
                      <div className="text-[12px] text-gray-500">{fw.type}</div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed mb-5">
                    {fw.summary}
                  </p>

                  {/* Detail bullets */}
                  <div
                    className="rounded-xl p-4"
                    style={{ background: fw.bg, border: `1px solid ${fw.border}` }}
                  >
                    <ul className="flex flex-col gap-2">
                      {fw.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2.5 text-[13px] text-gray-300"
                        >
                          <span
                            className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                            style={{ background: fw.color }}
                            aria-hidden="true"
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </section>

        {/* Cross-framework mapping callout */}
        <FadeUp>
          <section
            className="mx-6 mb-24 max-w-300 lg:mx-auto rounded-3xl px-8 py-16 sm:px-12 text-center"
            style={{
              background: "rgba(31,77,196,0.08)",
              border: "1px solid rgba(31,77,196,0.2)",
            }}
          >
            <p className="text-xs font-medium text-accent-bright uppercase tracking-widest mb-4">
              Map once, cover all
            </p>
            <h2
              className="font-serif text-white mb-4 max-w-150 mx-auto"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Stop managing compliance
              <br />
              in six spreadsheets
            </h2>
            <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-125 mx-auto">
              A single RiskGuard control can satisfy requirements across ISO
              27001, SOC 2, and NIST CSF simultaneously. Add a new framework and
              your existing controls carry over — no rework, no duplication.
            </p>
          </section>
        </FadeUp>

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
