import type { Metadata } from "next";
import Link from "next/link";
import {
  LayoutDashboard,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Activity,
  AlertTriangle,
  TrendingUp,
  Clock,
  Filter,
  ClipboardList,
  Bot,
  FileBarChart,
  ShieldCheck,
  Zap,
  RefreshCw,
} from "lucide-react";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { FinalCTA } from "@/app/_components/FinalCTA";
import { FadeUp } from "@/app/_components/FadeUp";
import { CALENDLY_URL } from "@/app/_components/config";

export const metadata: Metadata = {
  title: "Dashboard — RiskGuard",
  description:
    "Your entire compliance posture at a glance. Real-time risk counts, compliance scores, audit progress, and interactive charts — updated the moment anything changes.",
};

const CAPABILITIES = [
  {
    icon: BarChart3,
    title: "Live compliance score",
    desc: "A single percentage score that reflects your organisation's current compliance posture across all active frameworks. It updates automatically as you close findings, add evidence, and complete controls.",
  },
  {
    icon: AlertTriangle,
    title: "Risk summary panel",
    desc: "Total risks, high-severity risks, open risks, and overdue items — surfaced the moment you log in. No filtering, no digging. The numbers that matter, front and centre.",
  },
  {
    icon: Activity,
    title: "Interactive charts",
    desc: "Recharts-based visualisations for risk distribution by severity, compliance status breakdown by framework, and remediation progress over time. Hover for details. Click to drill in.",
  },
  {
    icon: Clock,
    title: "Recent activity feed",
    desc: "A live log of everything that changed — risk created, control updated, evidence uploaded, audit finding added. Know exactly who did what and when, without leaving the dashboard.",
  },
  {
    icon: TrendingUp,
    title: "Audit progress indicators",
    desc: "Progress bars per active audit showing controls assessed vs outstanding. See at a glance which audits are on track and which need attention before the review deadline.",
  },
  {
    icon: Filter,
    title: "Framework-level breakdown",
    desc: "Compliance scores broken down by framework — ISO 27001, SOC 2, NIST, PCI DSS, GDPR, HIPAA. Instantly see which framework you're closest to passing and where the biggest gaps remain.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Log in and see everything",
    desc: "The dashboard is your first screen every time. Total risks, compliance score, open findings, and audit progress — all updated in real time. No configuration needed. It reads from your live data the moment the page loads.",
  },
  {
    number: "02",
    title: "Spot what needs attention",
    desc: "High-severity risks and overdue remediation tasks are highlighted immediately. The activity feed shows the latest changes from your team. You know what's moved and what's stalled before you open a single detail view.",
  },
  {
    number: "03",
    title: "Navigate directly from the data",
    desc: "Charts and summary panels are clickable. Click a risk count to jump to the risk register filtered by severity. Click an audit to open the audit workflow. The dashboard is a launchpad, not a report.",
  },
];

const RELATED = [
  {
    slug: "risk-register",
    icon: ClipboardList,
    title: "Risk Register",
    desc: "The dashboard's risk summary panel pulls directly from the register. Click any risk count on the dashboard to open the register pre-filtered to that severity level.",
  },
  {
    slug: "ai-advisor",
    icon: Bot,
    title: "AI Advisor",
    desc: "The AI reads your full compliance posture — the same data that powers the dashboard — to give you contextual guidance on what to fix first.",
  },
  {
    slug: "audit-reports",
    icon: FileBarChart,
    title: "PDF Audit Reports",
    desc: "When the dashboard shows you're ready, generate a board-level PDF report from the same live data in one click.",
  },
];

export default function DashboardPage() {
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
                <LayoutDashboard size={22} className="text-accent-bright" aria-hidden="true" />
              </div>
              <p className="text-xs font-medium text-accent-bright uppercase tracking-widest">
                Command Centre
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
              Your entire compliance
              <br />
              <em className="italic">posture. At a glance.</em>
            </h1>

            <p className="text-[19px] text-gray-300 font-light leading-relaxed max-w-150 mb-10">
              A real-time command centre for your GRC programme. Total risks,
              compliance scores, audit progress, and recent activity — updated
              the moment anything changes in your platform. No manual refresh.
              No spreadsheet-pulling. Just the truth, live.
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
              What it shows
            </p>
            <h2
              className="font-serif text-white mb-14 max-w-150"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Everything that matters. Nothing that doesn&apos;t.
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
                Log in. See the truth. Act.
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

        {/* Callout */}
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
                Built for the Monday morning check-in
              </p>
              <h2
                className="font-serif text-white mb-4 max-w-150"
                style={{
                  fontSize: "clamp(24px, 3vw, 38px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                The dashboard your CTO actually opens.
              </h2>
              <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-150 mb-6">
                Most GRC tools bury the signal under layers of filters, tabs, and exports. The
                RiskGuard dashboard is designed for a CTO who has 90 seconds before standup —
                compliance score, high-risk items, and what changed overnight, all visible without
                a single click.
              </p>
              <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-150">
                When an enterprise customer asks &ldquo;what&rsquo;s your current ISO 27001 posture?&rdquo; — you
                pull up the dashboard, not a spreadsheet.
              </p>
            </div>
          </FadeUp>
        </section>

        {/* Trust signals */}
        <section className="pb-10 px-6 max-w-300 mx-auto">
          <FadeUp>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: RefreshCw, label: "Real-time updates — every change reflected immediately, no manual refresh" },
                { icon: Zap, label: "Recharts-based interactive charts — hover, click, and drill in" },
                { icon: ShieldCheck, label: "Data sourced directly from your live risks, controls, and audits" },
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
