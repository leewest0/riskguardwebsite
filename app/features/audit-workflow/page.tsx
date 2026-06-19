import type { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardCheck,
  ArrowLeft,
  ArrowRight,
  Layers,
  CheckCircle2,
  UserCheck,
  Upload,
  MessageSquare,
  AlertTriangle,
  ClipboardList,
  FolderLock,
  FileBarChart,
  ShieldCheck,
  Zap,
  Lock,
} from "lucide-react";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { FinalCTA } from "@/app/_components/FinalCTA";
import { FadeUp } from "@/app/_components/FadeUp";
import { CALENDLY_URL } from "@/app/_components/config";

export const metadata: Metadata = {
  title: "Audit Workflow — RiskGuard",
  description:
    "A structured 3-stage audit lifecycle — Setup, Conduct, Review — with per-control compliance scoring, findings documentation, remediation tasks, and external auditor collaboration.",
};

const CAPABILITIES = [
  {
    icon: Layers,
    title: "3-stage audit lifecycle",
    desc: "Every audit moves through Setup → Conduct → Review. Define scope and select controls in Setup. Score each control and upload evidence in Conduct. Review findings, assign remediations, and close in Review.",
  },
  {
    icon: CheckCircle2,
    title: "Per-control compliance scoring",
    desc: "Score every control as compliant, partially compliant, or non-compliant. Add findings notes per control as you go — no separate spreadsheet, no context-switching.",
  },
  {
    icon: UserCheck,
    title: "Remediation task management",
    desc: "Every non-compliant control gets a remediation task — assigned owner, due date, and live status (open / in progress / resolved). Audit bodies can see exactly who owns each gap and when it will be fixed.",
  },
  {
    icon: Upload,
    title: "Evidence upload per control",
    desc: "Upload supporting evidence directly to any control within the audit. Files are SHA-256 hashed on upload — the same tamper-evident integrity verification as the Evidence Locker.",
  },
  {
    icon: MessageSquare,
    title: "Per-control comment threads",
    desc: "Internal team notes and external auditor comments live in the same thread per control — visually distinguished so you always know who said what and when.",
  },
  {
    icon: AlertTriangle,
    title: "Priority findings surfacing",
    desc: "Critical and high-severity non-compliant controls are pulled to the top of the review stage — so the most serious gaps are never buried under a long list of passing controls.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Set up the audit",
    desc: "Name the audit, select the framework, and choose which controls to assess. You can include all platform controls or a custom subset. Scope is locked in before work begins — no scope creep mid-audit.",
  },
  {
    number: "02",
    title: "Conduct the audit",
    desc: "Work through each control: score it, add findings, upload evidence, and assign remediation tasks to owners with due dates. External auditors can view controls and add comments through their scoped portal access — without accessing the rest of the platform.",
  },
  {
    number: "03",
    title: "Review and close",
    desc: "Review priority findings, track remediation progress, and generate your executive PDF report. When all tasks are resolved and the report is signed off, close the audit — the full compliance record stays in RiskGuard permanently.",
  },
];

const RELATED = [
  {
    slug: "risk-register",
    icon: ClipboardList,
    title: "Risk Register",
    desc: "Risks identified during an audit can be logged directly to the risk register — keeping your risk posture and audit findings in sync.",
  },
  {
    slug: "evidence-locker",
    icon: FolderLock,
    title: "Evidence Locker",
    desc: "Evidence uploaded during audits uses the same SHA-256 integrity verification as the Evidence Locker — tamper-evident by default, no extra configuration needed.",
  },
  {
    slug: "audit-reports",
    icon: FileBarChart,
    title: "PDF Audit Reports",
    desc: "At the end of every completed audit, generate a 10-section board-ready PDF report with AI executive summary, compliance scores, priority findings, and a corrective action plan.",
  },
];

export default function AuditWorkflowPage() {
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
                <ClipboardCheck size={22} className="text-accent-bright" aria-hidden="true" />
              </div>
              <p className="text-xs font-medium text-accent-bright uppercase tracking-widest">
                Audit Lifecycle
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
              From setup to sign-off.
              <br />
              <em className="italic">Every control, every finding.</em>
            </h1>

            <p className="text-[19px] text-gray-300 font-light leading-relaxed max-w-150 mb-10">
              A structured 3-stage audit lifecycle that takes your team from
              scope selection to a closed, signed-off audit — with per-control
              scoring, remediation tracking, evidence uploads, and auditor
              collaboration all in one place.
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
              What it covers
            </p>
            <h2
              className="font-serif text-white mb-14 max-w-150"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Everything an auditor needs to see. In one place.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CAPABILITIES.map((c) => (
                <div
                  key={c.title}
                  className="bg-navy-light border border-white/8 rounded-2xl p-8"
                >
                  <div
                    className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-5"
                    style={{
                      background: "rgba(79,110,247,0.12)",
                      border: "1px solid rgba(79,110,247,0.18)",
                    }}
                  >
                    <c.icon size={20} className="text-accent-bright" aria-hidden="true" />
                  </div>
                  <h3 className="text-[16px] font-semibold text-white mb-3 tracking-tight">
                    {c.title}
                  </h3>
                  <p className="text-[15px] text-gray-400 leading-relaxed font-light">{c.desc}</p>
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
                Setup. Conduct. Close.
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
                    <p className="text-[15px] text-gray-400 leading-relaxed font-light">{s.desc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Callout — ISO 27001 Clause 10.1 */}
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
                ISO 27001 Clause 10.1
              </p>
              <h2
                className="font-serif text-white mb-4 max-w-150"
                style={{
                  fontSize: "clamp(24px, 3vw, 38px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                Remediation tracking that satisfies your certification body.
              </h2>
              <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-150 mb-4">
                ISO 27001 Clause 10.1 requires a named owner and a deadline for every
                nonconformity found during an audit. RiskGuard generates this automatically —
                every non-compliant control gets a remediation task with owner, due date, and
                status that flows directly into the executive PDF report.
              </p>
              <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-150">
                No post-audit spreadsheet. No chasing people for updates. The corrective action
                plan is built as you audit.
              </p>
            </div>
          </FadeUp>
        </section>

        {/* Trust signals */}
        <section className="pb-10 px-6 max-w-300 mx-auto">
          <FadeUp>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: ShieldCheck, label: "Satisfies ISO 27001 Clause 10.1 — named owner + deadline per nonconformity" },
                { icon: Zap, label: "External auditor collaboration via scoped OTP-verified portal" },
                { icon: Lock, label: "SHA-256 evidence hashing on every file uploaded within an audit" },
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {RELATED.map((r) => (
                <Link
                  key={r.slug}
                  href={`/features/${r.slug}`}
                  className="group bg-navy-light border border-white/8 hover:border-accent/30 rounded-2xl p-8 transition-colors flex flex-col gap-3"
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
                  <p className="text-[15px] text-gray-400 leading-relaxed font-light flex-1">{r.desc}</p>
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
