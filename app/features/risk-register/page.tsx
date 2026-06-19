import type { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardList,
  ArrowLeft,
  ArrowRight,
  GitBranch,
  Users,
  Paperclip,
  CheckSquare,
  FolderLock,
  Bot,
  Sparkles,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { FinalCTA } from "@/app/_components/FinalCTA";
import { FadeUp } from "@/app/_components/FadeUp";
import { CALENDLY_URL } from "@/app/_components/config";

export const metadata: Metadata = {
  title: "Risk Register — RiskGuard",
  description:
    "A real-time risk register with AI-powered scoring, full lifecycle tracking, and direct links to your controls and evidence — all in one place.",
};

const CAPABILITIES = [
  {
    icon: GitBranch,
    title: "Full lifecycle management",
    desc: "Every risk moves through six defined stages: Identified → Assessed → Mitigating → Monitoring → Resolved → Closed. Nothing falls through the cracks.",
  },
  {
    icon: BarChart3,
    title: "AI-powered scoring",
    desc: "Likelihood × impact matrix calculates your risk score automatically. Claude estimates the residual score after your mitigation plan is applied.",
  },
  {
    icon: CheckSquare,
    title: "Risk-to-controls mapping",
    desc: "Link any controls from your library directly to a risk. AI-suggested controls appear as toggleable pills at creation time — select and save in seconds.",
  },
  {
    icon: Users,
    title: "Owner assignment",
    desc: "Assign each risk to a team member with a target resolution date. Automated notifications fire when risks are assigned or when remediation deadlines approach.",
  },
  {
    icon: Paperclip,
    title: "Evidence attachment",
    desc: "Attach documents, screenshots, and exports directly to any risk. Every attachment is SHA-256 verified — your evidence is tamper-evident from day one.",
  },
  {
    icon: Sparkles,
    title: "AI Risk Insights Panel",
    desc: "One click opens a Claude-powered analysis: inherent risk score, estimated residual score post-mitigation, key vulnerabilities, and next recommended actions.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Describe",
    desc: "Log a risk in plain English or use the guided modal. The AI pre-fills the category, likelihood, impact, and mitigation plan. You review and adjust — nothing is locked.",
  },
  {
    number: "02",
    title: "Score & assign",
    desc: "The likelihood × impact engine calculates your risk score instantly. Assign an owner, set a target resolution date, and link the relevant controls from your library.",
  },
  {
    number: "03",
    title: "Track to close",
    desc: "Move the risk through each lifecycle stage as remediation progresses. Controls link back automatically. The AI watches for residual risk and flags when action is needed.",
  },
];

const RELATED = [
  {
    slug: "controls-library",
    icon: CheckSquare,
    title: "Controls Library",
    desc: "Every risk links directly to your control library. Map ISO 27001, SOC 2, or NIST controls to any risk — and see cross-framework coverage instantly.",
  },
  {
    slug: "evidence-locker",
    icon: FolderLock,
    title: "Evidence Locker",
    desc: "Attach SHA-256-verified evidence directly to risks. Every document is tamper-evident and ready for auditors without any manual re-organisation.",
  },
  {
    slug: "ai-advisor",
    icon: Bot,
    title: "AI Advisor",
    desc: "The AI reads your full risk register to give contextual guidance — scoring recommendations, control suggestions, and gap analysis in plain English.",
  },
];

export default function RiskRegisterPage() {
  return (
    <>
      <Nav />

      <main className="pt-17">
        {/* Hero */}
        <section className="py-20 px-6 max-w-300 mx-auto">
          <FadeUp>
            <Link
              href="/features"
              className="inline-flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-white transition-colors mb-10"
            >
              <ArrowLeft size={13} aria-hidden="true" />
              All Features
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(79,110,247,0.15)",
                  border: "1px solid rgba(79,110,247,0.2)",
                }}
              >
                <ClipboardList size={22} className="text-accent-bright" aria-hidden="true" />
              </div>
              <p className="text-xs font-medium text-accent-bright uppercase tracking-widest">
                Risk Management
              </p>
            </div>

            <h1
              className="font-serif text-white mb-5 max-w-200"
              style={{
                fontSize: "clamp(40px, 6.5vw, 72px)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              Know every risk.
              <br />
              <em className="italic">Own every outcome.</em>
            </h1>

            <p className="text-[19px] text-gray-300 font-light leading-relaxed max-w-150 mb-10">
              A real-time risk register with AI-powered scoring, full lifecycle tracking,
              and direct links to your controls and evidence — all in one place. No
              spreadsheets. No manual cross-referencing.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[15px] font-medium text-white bg-accent rounded-[10px] px-7 py-3.5 transition-all hover:-translate-y-0.5"
                style={{ boxShadow: "0 0 40px rgba(79,110,247,0.35)" }}
              >
                Book a Free Demo
                <ArrowRight size={15} aria-hidden="true" />
              </a>
              <Link
                href="/features"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                See all features →
              </Link>
            </div>
          </FadeUp>
        </section>

        {/* Capabilities */}
        <section className="py-20 px-6 max-w-300 mx-auto">
          <FadeUp>
            <p className="text-xs font-medium text-accent-bright uppercase tracking-widest mb-3">
              What it does
            </p>
            <h2
              className="font-serif text-white mb-14 max-w-150"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Everything your risk lifecycle needs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAPABILITIES.map((c) => (
                <div
                  key={c.title}
                  className="bg-navy-light border border-white/8 rounded-2xl p-7"
                >
                  <div
                    className="w-10 h-10 rounded-[9px] flex items-center justify-center mb-4"
                    style={{
                      background: "rgba(79,110,247,0.12)",
                      border: "1px solid rgba(79,110,247,0.18)",
                    }}
                  >
                    <c.icon size={18} className="text-accent-bright" aria-hidden="true" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-white mb-2 tracking-tight">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </section>

        {/* How it works */}
        <section
          className="py-20 px-6"
          style={{ background: "rgba(13,21,38,0.6)" }}
        >
          <div className="max-w-300 mx-auto">
            <FadeUp>
              <p className="text-xs font-medium text-accent-bright uppercase tracking-widest mb-3">
                How it works
              </p>
              <h2
                className="font-serif text-white mb-14 max-w-150"
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                From description to closed — in one workflow
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {STEPS.map((s) => (
                  <div key={s.number} className="flex flex-col">
                    <span
                      className="text-5xl font-serif text-white/10 mb-4 leading-none"
                      aria-hidden="true"
                    >
                      {s.number}
                    </span>
                    <h3 className="text-lg font-semibold text-white mb-3">{s.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-light">{s.desc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Trust signals */}
        <section className="py-20 px-6 max-w-300 mx-auto">
          <FadeUp>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: ShieldCheck, label: "ISO 27001 Annex A controls mapped directly to every risk" },
                { icon: Sparkles, label: "Claude Haiku for creation · Claude Sonnet for deep risk insights" },
                { icon: GitBranch, label: "Full audit trail logged on every lifecycle stage change" },
              ].map((t) => (
                <div
                  key={t.label}
                  className="flex items-center gap-3 border border-white/8 rounded-full px-5 py-2.5"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <t.icon size={15} className="text-accent-bright shrink-0" aria-hidden="true" />
                  <span className="text-[13px] text-gray-400">{t.label}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </section>

        {/* Related features */}
        <section className="py-20 px-6 max-w-300 mx-auto border-t border-white/8">
          <FadeUp>
            <p className="text-xs font-medium text-accent-bright uppercase tracking-widest mb-3">
              Works seamlessly with
            </p>
            <h2
              className="font-serif text-white mb-10"
              style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              The rest of your compliance workflow
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {RELATED.map((r) => (
                <Link
                  key={r.slug}
                  href={`/features/${r.slug}`}
                  className="group bg-navy-light border border-white/8 hover:border-accent/30 rounded-2xl p-7 transition-colors flex flex-col gap-3"
                >
                  <div
                    className="w-10 h-10 rounded-[9px] flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(79,110,247,0.12)",
                      border: "1px solid rgba(79,110,247,0.18)",
                    }}
                  >
                    <r.icon size={18} className="text-accent-bright" aria-hidden="true" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-white tracking-tight">
                    {r.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-light flex-1">
                    {r.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-accent-bright mt-1">
                    Learn more
                    <ArrowRight
                      size={13}
                      className="transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </FadeUp>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
