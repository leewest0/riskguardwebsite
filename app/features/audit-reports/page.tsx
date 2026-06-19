import type { Metadata } from "next";
import Link from "next/link";
import {
  FileBarChart,
  ArrowLeft,
  ArrowRight,
  LayoutDashboard,
  Bot,
  Gauge,
  AlertTriangle,
  ClipboardCheck,
  Download,
  ClipboardList,
  FolderLock,
  Users,
  ShieldCheck,
  RefreshCw,
  Lock,
} from "lucide-react";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { FinalCTA } from "@/app/_components/FinalCTA";
import { FadeUp } from "@/app/_components/FadeUp";
import { CALENDLY_URL } from "@/app/_components/config";

export const metadata: Metadata = {
  title: "PDF Audit Reports — RiskGuard",
  description:
    "Board-ready PDF audit reports generated in one click from your live compliance data. AI executive summary, compliance score gauge, control coverage, and corrective action plans — automatically.",
};

const CAPABILITIES = [
  {
    icon: LayoutDashboard,
    title: "10-section executive report",
    desc: "Organisation details, audit scope, compliance framework coverage, risk register summary, control effectiveness, evidence status, audit findings, corrective action plan, and a full appendix — structured, consistent, and printable.",
  },
  {
    icon: Bot,
    title: "AI executive summary",
    desc: "Claude reads your live audit data and writes a plain-English narrative summary for the board. No compliance jargon. No copy-paste from a template. Regenerate on demand as your posture improves.",
    model: "Claude Haiku",
  },
  {
    icon: Gauge,
    title: "Compliance score gauge",
    desc: "A visual percentage score derived from your control compliance results — compliant vs partially compliant vs non-compliant. At a glance, the board can see exactly where the organisation stands.",
  },
  {
    icon: AlertTriangle,
    title: "Priority findings",
    desc: "Non-compliant and partially compliant controls are surfaced as findings, ranked by severity. Each finding references the specific evidence gap that caused it — no ambiguity about what needs fixing.",
  },
  {
    icon: ClipboardCheck,
    title: "Corrective Action Plan (CAP)",
    desc: "ISO 27001 Clause 10.1 requires a documented corrective action process. RiskGuard generates a CAP table automatically — one row per finding, with the recommended action, the risk owner, and the target resolution date.",
  },
  {
    icon: Download,
    title: "One-click PDF export",
    desc: "The report is generated from your live data and exported as a professionally formatted PDF. No spreadsheets, no manual formatting, no copy-paste errors. Share it with enterprise customers, auditors, or your board directly.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Generate",
    desc: "Click 'Generate Report.' RiskGuard reads your entire compliance posture — risks, controls, evidence counts, compliance results, open findings — and assembles the full 10-section report in seconds. Claude writes the executive summary simultaneously.",
  },
  {
    number: "02",
    title: "Review",
    desc: "Preview the report before exporting. Check the compliance score, review the priority findings, and confirm the corrective action plan reflects your current remediation work. Edit control notes or findings directly — the report updates in real time.",
  },
  {
    number: "03",
    title: "Export and share",
    desc: "Download as a professionally formatted PDF. Share with your enterprise customer's security team, hand it to your ISO 27001 auditor, or present it at the board level. Every claim in the report is traceable back to specific evidence in the locker.",
  },
];

const RELATED = [
  {
    slug: "risk-register",
    icon: ClipboardList,
    title: "Risk Register",
    desc: "Risk scores, lifecycle stages, and owner assignments feed directly into the audit report's risk summary section — no manual data entry.",
  },
  {
    slug: "evidence-locker",
    icon: FolderLock,
    title: "Evidence Locker",
    desc: "Evidence counts and SHA-256 integrity status per control appear in the report. Auditors can verify every claim traces back to a tamper-evident file.",
  },
  {
    slug: "audit-workflow",
    icon: ClipboardCheck,
    title: "Audit Workflow",
    desc: "The report is generated at the end of a completed audit — all control scores, findings, and remediation tasks flow in automatically. No copy-pasting from a spreadsheet.",
  },
];

const REPORT_SECTIONS = [
  "Organisation & audit scope",
  "Framework coverage summary",
  "AI executive summary",
  "Compliance score gauge",
  "Risk register overview",
  "Control effectiveness breakdown",
  "Evidence status per control",
  "Priority findings",
  "Corrective Action Plan",
  "Evidence appendix",
];

export default function AuditReportsPage() {
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
                <FileBarChart size={22} className="text-accent-bright" aria-hidden="true" />
              </div>
              <p className="text-xs font-medium text-accent-bright uppercase tracking-widest">
                Audit Reporting
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
              Board-ready reports.
              <br />
              <em className="italic">One click.</em>
            </h1>

            <p className="text-[19px] text-gray-300 font-light leading-relaxed max-w-150 mb-10">
              A professionally formatted PDF audit report — generated from your
              live compliance data in seconds. AI executive summary, compliance
              score, priority findings, and a corrective action plan, all in one
              document. No templates, no manual formatting, no copy-paste errors.
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

        {/* Report sections strip */}
        <section
          className="py-10 px-6 border-y border-white/8"
          style={{ background: "rgba(13,21,38,0.6)" }}
        >
          <div className="max-w-300 mx-auto">
            <FadeUp>
              <p className="text-[11px] font-medium text-gray-600 uppercase tracking-widest mb-6 text-center">
                Every report includes
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {REPORT_SECTIONS.map((section, i) => (
                  <div
                    key={section}
                    className="flex items-center gap-2.5 bg-navy-light border border-white/8 rounded-xl px-4 py-3"
                  >
                    <span
                      className="text-[11px] font-semibold shrink-0"
                      style={{ color: "rgba(79,110,247,0.6)" }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[12px] text-gray-400 leading-tight">{section}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
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
              Every section your auditor expects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CAPABILITIES.map((c) => (
                <div
                  key={c.title}
                  className="bg-navy-light border border-white/8 rounded-2xl p-8 flex flex-col"
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
                    {/* Model badge — only shown for AI-powered capabilities */}
                    {c.model && (
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
                    )}
                  </div>
                  <h3 className="text-[15px] font-semibold text-white mb-2 tracking-tight">
                    {c.title}
                  </h3>
                  <p className="text-[15px] text-gray-400 leading-relaxed font-light flex-1">{c.desc}</p>
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
                Generate. Review. Export.
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

        {/* Why this matters callout */}
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
                Why this matters
              </p>
              <h2
                className="font-serif text-white mb-4 max-w-150"
                style={{
                  fontSize: "clamp(24px, 3vw, 38px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                The report that closes enterprise deals.
              </h2>
              <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-150 mb-6">
                Every enterprise customer's security team will send you a questionnaire or ask
                for a compliance report before signing. Most startups spend days pulling this
                together from spreadsheets, email threads, and shared drives. RiskGuard generates
                a structured, evidence-backed report in seconds — so you can respond the same day.
              </p>
              <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-150">
                ISO 27001 Clause 9.3 requires management review of the ISMS at planned intervals.
                The RiskGuard audit report satisfies this requirement out of the box — generated
                from live data, regenerated each cycle, with a full corrective action plan built in.
              </p>
            </div>
          </FadeUp>
        </section>

        {/* Trust signals */}
        <section className="pb-10 px-6 max-w-300 mx-auto">
          <FadeUp>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: ShieldCheck, label: "ISO 27001 Clause 9.3 management review — satisfied by design" },
                { icon: RefreshCw, label: "Regenerate on demand — always reflects your current compliance posture" },
                { icon: Lock, label: "Every claim in the report traces to SHA-256-verified evidence" },
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
