import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckSquare,
  ArrowLeft,
  ArrowRight,
  Library,
  GitMerge,
  Upload,
  ToggleLeft,
  Shield,
  ClipboardList,
  FolderLock,
  FileBarChart,
  ShieldCheck,
  Layers,
  Sparkles,
} from "lucide-react";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { FinalCTA } from "@/app/_components/FinalCTA";
import { FadeUp } from "@/app/_components/FadeUp";
import { CALENDLY_URL } from "@/app/_components/config";

export const metadata: Metadata = {
  title: "Controls Library — RiskGuard",
  description:
    "401 pre-built controls mapped to ISO 27001, SOC 2, NIST CSF, PCI DSS, GDPR, and HIPAA. One control covers every framework it belongs to — write it once.",
};

const CAPABILITIES = [
  {
    icon: Library,
    title: "401 platform controls",
    desc: "TrusTrak-managed and always up to date. Every control is categorised, framework-tagged, and ready to link to your risks from day one.",
  },
  {
    icon: Layers,
    title: "6 frameworks, one library",
    desc: "ISO 27001, SOC 2, NIST CSF, PCI DSS, GDPR, and HIPAA covered in one place. A single control can satisfy requirements across multiple frameworks simultaneously.",
  },
  {
    icon: GitMerge,
    title: "Cross-framework mapping",
    desc: "72 master controls power an 'Also satisfies' panel on every control detail view. See instantly which other frameworks your controls already cover.",
  },
  {
    icon: Shield,
    title: "4 control types",
    desc: "Preventive, Detective, Corrective, and Compensating. Compensating controls are required for PCI DSS formal compensating control documentation — we have them built in.",
  },
  {
    icon: ToggleLeft,
    title: "Custom controls",
    desc: "Add unlimited org-specific controls alongside platform controls. Bulk-import existing controls via CSV with an idempotent upsert — no duplicates, no lost data.",
  },
  {
    icon: ClipboardList,
    title: "Effectiveness tracking",
    desc: "Record testing results, set testing frequency, and track last-tested dates per control. Know which controls are due for re-testing before your auditors ask.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Browse or import",
    desc: "Search and filter 401 pre-built controls by framework, type, or keyword. Or bulk-import your existing control library via CSV — RiskGuard merges them with the platform controls without duplicating.",
  },
  {
    number: "02",
    title: "Map to risks",
    desc: "Link controls to your risk register entries. One control mapped to one risk can satisfy requirements across ISO 27001, SOC 2, and NIST simultaneously — the cross-framework panel shows you exactly what's covered.",
  },
  {
    number: "03",
    title: "Test and track",
    desc: "Record testing results against each control, set a testing schedule, and track effectiveness over time. When an auditor asks 'when was this last tested?' — the answer is one click away.",
  },
];

const RELATED = [
  {
    slug: "risk-register",
    icon: ClipboardList,
    title: "Risk Register",
    desc: "Controls link directly to risks. Map ISO 27001 Annex A controls to a risk in seconds, with AI-suggested controls shown as toggleable pills at creation time.",
  },
  {
    slug: "evidence-locker",
    icon: FolderLock,
    title: "Evidence Locker",
    desc: "Every control can have evidence attached. Upload the testing documentation and the evidence locker SHA-256 verifies it — tamper-evident from the moment it lands.",
  },
  {
    slug: "audit-reports",
    icon: FileBarChart,
    title: "PDF Audit Reports",
    desc: "Controls feed the audit report directly. Compliance status per control, cross-framework coverage, and corrective action plans — generated automatically.",
  },
];

const FRAMEWORKS = [
  { name: "ISO 27001", desc: "Information security management" },
  { name: "SOC 2", desc: "Trust services criteria" },
  { name: "NIST CSF", desc: "Cybersecurity framework" },
  { name: "PCI DSS", desc: "Payment card security" },
  { name: "GDPR", desc: "EU/UK data protection" },
  { name: "HIPAA", desc: "US health data privacy" },
];

export default function ControlsLibraryPage() {
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
                <CheckSquare size={22} className="text-accent-bright" aria-hidden="true" />
              </div>
              <p className="text-xs font-medium text-accent-bright uppercase tracking-widest">
                Controls Management
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
              401 controls.
              <br />
              <em className="italic">6 frameworks. Zero duplication.</em>
            </h1>

            <p className="text-[19px] text-gray-300 font-light leading-relaxed max-w-150 mb-10">
              Pre-built controls mapped to ISO 27001, SOC 2, NIST CSF, PCI DSS, GDPR,
              and HIPAA. Write a control once — and see every framework it satisfies
              simultaneously. No more copy-pasting controls across six spreadsheets.
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

        {/* Framework strip */}
        <section className="py-10 px-6 border-y border-white/8" style={{ background: "rgba(13,21,38,0.6)" }}>
          <div className="max-w-300 mx-auto">
            <FadeUp>
              <p className="text-[11px] font-medium text-gray-600 uppercase tracking-widest mb-6 text-center">
                Frameworks covered
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {FRAMEWORKS.map((fw) => (
                  <div key={fw.name} className="text-center">
                    <p className="text-[13px] font-semibold text-white mb-0.5">{fw.name}</p>
                    <p className="text-[11px] text-gray-600">{fw.desc}</p>
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
              One library to rule all six frameworks
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
                  <p className="text-sm text-gray-500 leading-relaxed font-light">{c.desc}</p>
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
                Browse, map, test. Done.
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

        {/* Cross-framework callout */}
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
                The cross-framework advantage
              </p>
              <h2
                className="font-serif text-white mb-4 max-w-150"
                style={{
                  fontSize: "clamp(24px, 3vw, 38px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                72 master controls. Infinite coverage.
              </h2>
              <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-150 mb-6">
                Behind the 401 platform controls sits a layer of 72 master control concepts —
                framework-agnostic ideas like &ldquo;Access Control Policy&rdquo; that group equivalent
                controls from all 6 frameworks. When you open any control, the &ldquo;Also satisfies&rdquo;
                panel shows you every other framework requirement that same control covers.
              </p>
              <p className="text-sm text-gray-500 font-light">
                The result: implement once, satisfy everywhere. No duplication, no drift, no missed mappings.
              </p>
            </div>
          </FadeUp>
        </section>

        {/* Trust signals */}
        <section className="pb-10 px-6 max-w-300 mx-auto">
          <FadeUp>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: ShieldCheck, label: "401 platform controls curated by TrusTrak's compliance team" },
                { icon: Layers, label: "72 master controls power the cross-framework 'Also satisfies' panel" },
                { icon: Sparkles, label: "Bulk CSV import — idempotent upsert on (framework, control_id)" },
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
