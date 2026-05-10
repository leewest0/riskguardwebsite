import type { Metadata } from "next";
import {
  Bot,
  CheckSquare,
  ClipboardList,
  FileBarChart,
  FolderLock,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { FinalCTA } from "@/app/_components/FinalCTA";
import { FadeUp } from "@/app/_components/FadeUp";

export const metadata: Metadata = {
  title: "Features — RiskGuard",
  description:
    "Everything a UK tech startup needs to get audit-ready: risk register, controls library, evidence locker, AI advisor, auditor portal, and PDF reports.",
};

const FEATURES: {
  icon: LucideIcon;
  title: string;
  desc: string;
  bullets: string[];
}[] = [
  {
    icon: ClipboardList,
    title: "Risk Register",
    desc: "Document, score, and track every risk with automated likelihood and impact scoring. No more spreadsheets.",
    bullets: [
      "Categorise risks by type, owner, and current status",
      "Automated likelihood × impact matrix with live scoring",
      "Assign owners and track remediation deadlines",
      "Real-time risk posture dashboard across your organisation",
    ],
  },
  {
    icon: CheckSquare,
    title: "Controls Library",
    desc: "200+ pre-built controls mapped to every supported framework. Import your own or build from scratch.",
    bullets: [
      "Pre-mapped to ISO 27001, SOC 2, NIST, PCI DSS, GDPR, and HIPAA",
      "One control covers multiple frameworks — no duplication",
      "Import existing controls via CSV",
      "Track testing status and last-tested date per control",
    ],
  },
  {
    icon: FolderLock,
    title: "Evidence Locker",
    desc: "Secure file storage with SHA-256 integrity verification. Every piece of evidence is tamper-evident.",
    bullets: [
      "SHA-256 hash generated and verified on every upload",
      "Any file modification is detected and flagged immediately",
      "Evidence organised by control or risk for instant retrieval",
      "Share specific evidence with auditors — nothing more",
    ],
  },
  {
    icon: Bot,
    title: "AI Advisor",
    desc: "Ask anything about your compliance posture. Powered by Claude — answers in plain English, not legalese.",
    bullets: [
      "Reads your own risk register and controls for context-aware advice",
      "Recommends controls based on your specific risk profile",
      "Flags compliance gaps before auditors find them",
      "Audit prep Q&A — rehearse the tough questions in advance",
    ],
  },
  {
    icon: Users,
    title: "External Auditor Portal",
    desc: "Time-limited, scoped access for external auditors. They see what they need — nothing else.",
    bullets: [
      "Generate scoped access tokens in one click",
      "Auditors access evidence and controls only — no account access",
      "Full audit trail of what was viewed and when",
      "Tokens expire automatically — no manual revocation needed",
    ],
  },
  {
    icon: FileBarChart,
    title: "PDF Audit Reports",
    desc: "One-click executive reports built from your live data. Board-ready, auditor-approved.",
    bullets: [
      "Compliance score, control status, and open risks in one document",
      "Board-ready executive summary format",
      "Generated from live data — always up to date",
      "Download and share in seconds, not days",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Nav />

      <main className="pt-17">
        {/* Hero */}
        <section className="py-24 px-6 text-center max-w-300 mx-auto">
          <FadeUp>
            <p className="text-xs font-medium text-accent-bright uppercase tracking-widest mb-4">
              Everything you need
            </p>
            <h1
              className="font-serif text-white mb-5 max-w-200 mx-auto"
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
            <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-125 mx-auto">
              Six tightly integrated features that take a UK tech startup from
              zero to audit-ready — without a dedicated compliance team.
            </p>
          </FadeUp>
        </section>

        {/* Features grid */}
        <section className="pb-24 px-6 max-w-300 mx-auto">
          <FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="group bg-navy-light border border-white/8 hover:border-accent/30 rounded-2xl p-8 transition-colors"
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-5"
                    style={{
                      background: "rgba(79,110,247,0.15)",
                      border: "1px solid rgba(79,110,247,0.2)",
                    }}
                  >
                    <f.icon size={20} className="text-accent-bright" aria-hidden="true" />
                  </div>

                  <h2 className="text-base font-semibold text-white mb-2.5 tracking-tight">
                    {f.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed font-light mb-5">
                    {f.desc}
                  </p>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-2">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[13px] text-gray-400">
                        <span
                          className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                          style={{ background: "var(--color-accent)" }}
                          aria-hidden="true"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeUp>
        </section>

        {/* "Everything works together" callout */}
        <FadeUp>
          <section
            className="mx-6 mb-24 max-w-300 lg:mx-auto rounded-3xl px-8 py-16 sm:px-12 text-center"
            style={{
              background: "rgba(31,77,196,0.08)",
              border: "1px solid rgba(31,77,196,0.2)",
            }}
          >
            <p className="text-xs font-medium text-accent-bright uppercase tracking-widest mb-4">
              Built to work together
            </p>
            <h2
              className="font-serif text-white mb-4 max-w-150 mx-auto"
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
