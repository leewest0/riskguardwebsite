import type { Metadata } from "next";
import Link from "next/link";
import {
  Bot,
  ArrowLeft,
  ArrowRight,
  Wand2,
  Brain,
  SearchCheck,
  FileQuestion,
  MessageSquare,
  FileText,
  ClipboardList,
  CheckSquare,
  FileBarChart,
  Zap,
  ShieldCheck,
  Lock,
} from "lucide-react";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { FinalCTA } from "@/app/_components/FinalCTA";
import { FadeUp } from "@/app/_components/FadeUp";
import { CALENDLY_URL } from "@/app/_components/config";

export const metadata: Metadata = {
  title: "AI Advisor — RiskGuard",
  description:
    "Claude-powered AI that reads your risks, controls, and evidence to give you real, contextual compliance guidance — from one-click risk creation to bulk questionnaire automation.",
};

const CAPABILITIES = [
  {
    icon: Wand2,
    title: "AI Risk Creation",
    desc: "Describe a risk in plain English. Claude pre-populates the title, category, likelihood score, impact score, and a full mitigation plan. AI-suggested controls appear as toggleable pills — select and save in one click.",
    model: "Claude Haiku",
  },
  {
    icon: Brain,
    title: "AI Risk Insights Panel",
    desc: "One click opens a per-risk analysis: inherent risk score before mitigations, estimated residual score after your mitigation plan, key vulnerabilities, and the next recommended actions. Collapsible and always available.",
    model: "Claude Sonnet",
  },
  {
    icon: SearchCheck,
    title: "AI Evidence Gap Detection",
    desc: "Per-control AI review: compliance result (compliant / partially compliant / non-compliant), a list of missing evidence, and recommended remediation steps. Results are cached by evidence count — no redundant API calls.",
    model: "Claude Sonnet",
  },
  {
    icon: FileQuestion,
    title: "Questionnaire Automation",
    desc: "Upload a security questionnaire (CSV or PDF). Claude answers each question using your organisation's own policies, procedures, and evidence — extracted and indexed at upload time. Human review workflow built in.",
    model: "Claude Haiku",
  },
  {
    icon: MessageSquare,
    title: "Compliance Chat",
    desc: "A streaming chat interface grounded in your own organisational data. Ask about your compliance posture, get control recommendations, or rehearse the questions your next ISO 27001 auditor is going to ask.",
    model: "Claude Sonnet",
  },
  {
    icon: FileText,
    title: "AI Executive Summary",
    desc: "Generates a board-ready executive summary from your live audit data. Written in plain English, not legalese — regenerate on demand as your compliance posture improves.",
    model: "Claude Haiku",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Describe",
    desc: "Type a risk in plain English: \"We store customer PII in a cloud database with no encryption at rest.\" Claude returns a fully structured risk entry: title, category, likelihood, impact, mitigation plan, and suggested controls — in under three seconds.",
  },
  {
    number: "02",
    title: "Analyse",
    desc: "Open the AI Insights Panel on any risk or the Evidence Gap panel on any control. Claude reads your current mitigation steps, linked controls, and uploaded evidence — then tells you exactly what's missing and what to do next.",
  },
  {
    number: "03",
    title: "Automate",
    desc: "Upload a vendor security questionnaire or customer due diligence form. Claude answers each question by searching your organisation's own document knowledge base — policies, procedures, and evidence extracted at upload. Review, edit, and export as CSV.",
  },
];

const RELATED = [
  {
    slug: "risk-register",
    icon: ClipboardList,
    title: "Risk Register",
    desc: "AI Risk Creation feeds directly into the risk register. One plain English sentence becomes a fully scored, owner-assigned, control-mapped risk entry.",
  },
  {
    slug: "controls-library",
    icon: CheckSquare,
    title: "Controls Library",
    desc: "AI Evidence Gap Detection reads your control library and tells you exactly which evidence is missing per control — before your auditors find the gaps themselves.",
  },
  {
    slug: "audit-reports",
    icon: FileBarChart,
    title: "PDF Audit Reports",
    desc: "The AI Executive Summary turns your live audit data into a board-ready narrative. Click generate. Review. Download.",
  },
];

export default function AIAdvisorPage() {
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
                <Bot size={22} className="text-accent-bright" aria-hidden="true" />
              </div>
              <p className="text-xs font-medium text-accent-bright uppercase tracking-widest">
                AI-Powered Compliance
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
              Your compliance team
              <br />
              <em className="italic">powered by AI.</em>
            </h1>

            <p className="text-[19px] text-gray-300 font-light leading-relaxed max-w-150 mb-10">
              Claude reads your own risks, controls, and evidence to give you
              real, contextual compliance guidance — not generic advice. From
              one-click risk creation to bulk questionnaire automation, the AI
              Advisor handles the tedious parts so your team can focus on fixing
              the actual gaps.
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
              Six AI capabilities. One platform.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAPABILITIES.map((c) => (
                <div
                  key={c.title}
                  className="bg-navy-light border border-white/8 rounded-2xl p-7 flex flex-col"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-[9px] flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(79,110,247,0.12)",
                        border: "1px solid rgba(79,110,247,0.18)",
                      }}
                    >
                      <c.icon size={18} className="text-accent-bright" aria-hidden="true" />
                    </div>
                    {/* Model badge */}
                    <span
                      className="text-[11px] font-medium shrink-0 border rounded-full px-2.5 py-1"
                      style={{
                        color: "rgba(79,110,247,0.9)",
                        borderColor: "rgba(79,110,247,0.2)",
                        background: "rgba(79,110,247,0.08)",
                      }}
                    >
                      {c.model}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-semibold text-white mb-2 tracking-tight">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-light flex-1">{c.desc}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </section>

        {/* How it works */}
        <section className="py-20 px-6" style={{ background: "rgba(13,21,38,0.6)" }}>
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
                Describe. Analyse. Automate.
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

        {/* Cost-efficient model routing callout */}
        <section className="py-20 px-6 max-w-300 mx-auto">
          <FadeUp>
            <div
              className="rounded-3xl px-8 py-14 sm:px-12"
              style={{
                background: "rgba(31,77,196,0.08)",
                border: "1px solid rgba(31,77,196,0.2)",
              }}
            >
              <p className="text-xs font-medium text-accent-bright uppercase tracking-widest mb-4">
                Smart model routing
              </p>
              <h2
                className="font-serif text-white mb-4 max-w-150"
                style={{
                  fontSize: "clamp(24px, 3vw, 38px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                Fast when speed matters. Deep when it counts.
              </h2>
              <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-150 mb-6">
                RiskGuard routes each AI task to the right Claude model. Structured tasks
                like risk creation and questionnaire answering use Claude Haiku — fast and
                cost-efficient. Complex reasoning like evidence gap analysis and risk insights
                uses Claude Sonnet — for answers you can actually act on.
              </p>
              <p className="text-sm text-gray-500 font-light">
                Evidence review results are cached by evidence count — so you're never charged
                twice for the same analysis.
              </p>
            </div>
          </FadeUp>
        </section>

        {/* Trust signals */}
        <section className="pb-10 px-6 max-w-300 mx-auto">
          <FadeUp>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Zap, label: "Claude Haiku for speed · Claude Sonnet for depth — cost-optimised routing" },
                { icon: ShieldCheck, label: "Evidence review results cached — no redundant API calls" },
                { icon: Lock, label: "Your evidence is never used to train external AI models" },
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
                  <h3 className="text-[15px] font-semibold text-white tracking-tight">{r.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-light flex-1">{r.desc}</p>
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
