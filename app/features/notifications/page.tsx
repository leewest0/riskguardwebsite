import type { Metadata } from "next";
import Link from "next/link";
import {
  Bell,
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  UserCheck,
  Calendar,
  Clock,
  MessageSquare,
  MousePointerClick,
  ClipboardList,
  CheckSquare,
  Bot,
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
  title: "Notifications & Alerts — RiskGuard",
  description:
    "Automated alerts keep your team on top of every risk, audit, and deadline. Instant notifications for key events, daily cron digests for overdue tasks — nothing falls through the cracks.",
};

const CAPABILITIES = [
  {
    icon: AlertTriangle,
    title: "Risk event alerts",
    desc: "Instant notifications when a risk is created, when its severity level changes, when it's assigned to a new owner, and when its status moves through the lifecycle. Every significant change surfaces immediately.",
  },
  {
    icon: UserCheck,
    title: "Assignment notifications",
    desc: "When a risk or audit control is assigned to a team member, they're notified immediately with context — what was assigned, who assigned it, and the target resolution date. No chasing, no missed handoffs.",
  },
  {
    icon: Clock,
    title: "Overdue remediation digest",
    desc: "A daily cron job runs at 9 AM every morning. Any remediation task past its due date is included in a digest to the task owner and the org admin. Overdue items don't quietly age in a backlog.",
  },
  {
    icon: Calendar,
    title: "Compliance reminders",
    desc: "Daily 9 AM cron-based reminders for upcoming control review dates, audit deadlines, and policy review cycles. Your compliance calendar, automated — so nothing slips between cycles.",
  },
  {
    icon: MessageSquare,
    title: "Auditor comment alerts",
    desc: "When an external auditor leaves a comment on evidence or a control via the Auditor Portal, the relevant internal team member is notified immediately — so you can respond before the audit stalls.",
  },
  {
    icon: MousePointerClick,
    title: "Manual reminder buttons",
    desc: "Need to send an ad-hoc nudge? Every risk and audit has a manual reminder button. One click sends a notification to the assigned owner — useful for chasing a specific remediation task without leaving the platform.",
  },
];

const ALERTS = [
  { event: "Risk created", type: "Instant" },
  { event: "Risk level changes", type: "Instant" },
  { event: "Risk assigned to owner", type: "Instant" },
  { event: "Risk status changes", type: "Instant" },
  { event: "Overdue remediation", type: "Daily 9 AM" },
  { event: "Audit assigned", type: "Instant" },
  { event: "Audit completed", type: "Instant" },
  { event: "Compliance reminder", type: "Daily 9 AM" },
  { event: "Auditor comment added", type: "Instant" },
  { event: "Manual reminder triggered", type: "On demand" },
];

const STEPS = [
  {
    number: "01",
    title: "Events trigger automatically",
    desc: "Every significant action in the platform — risk created, control assigned, finding added, evidence uploaded — fires an alert to the relevant person. There's nothing to configure. The notification logic is built into every workflow.",
  },
  {
    number: "02",
    title: "Cron jobs catch the rest",
    desc: "Some risks don't announce themselves — they just quietly go overdue. The daily 9 AM digest catches everything that slipped: overdue remediation tasks, approaching review dates, and upcoming audit deadlines. Delivered before the working day starts.",
  },
  {
    number: "03",
    title: "Manual nudges when you need them",
    desc: "For the moments where you need a direct nudge rather than a system event, every risk and audit has a manual reminder button. One click, one notification to the owner. No need to send an email outside the platform.",
  },
];

const RELATED = [
  {
    slug: "risk-register",
    icon: ClipboardList,
    title: "Risk Register",
    desc: "Risk created, assigned, level changed, status updated — all of these fire alerts automatically. The register and the notification system are tightly coupled.",
  },
  {
    slug: "controls-library",
    icon: CheckSquare,
    title: "Controls Library",
    desc: "Control assignment notifications keep the right people informed when audit controls are assigned to them — without any manual communication required.",
  },
  {
    slug: "ai-advisor",
    icon: Bot,
    title: "AI Advisor",
    desc: "The AI Advisor flags evidence gaps and recommends next actions. Notifications make sure those recommendations reach the right person before the next audit cycle.",
  },
];

export default function NotificationsPage() {
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
                <Bell size={22} className="text-accent-bright" aria-hidden="true" />
              </div>
              <p className="text-xs font-medium text-accent-bright uppercase tracking-widest">
                Alerts & Automation
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
              Know what needs attention.
              <br />
              <em className="italic">Before your auditor does.</em>
            </h1>

            <p className="text-[19px] text-gray-300 font-light leading-relaxed max-w-150 mb-10">
              Automated alerts for every meaningful event in your compliance
              programme — plus daily cron digests for anything that goes overdue.
              Your team stays on top of risks, remediation tasks, and audit
              deadlines without any manual chasing.
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

        {/* Alert reference strip */}
        <section
          className="py-10 px-6 border-y border-white/8"
          style={{ background: "rgba(13,21,38,0.6)" }}
        >
          <div className="max-w-300 mx-auto">
            <FadeUp>
              <p className="text-[11px] font-medium text-gray-600 uppercase tracking-widest mb-6 text-center">
                Every alert, at a glance
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {ALERTS.map((a) => (
                  <div
                    key={a.event}
                    className="bg-navy-light border border-white/8 rounded-xl px-4 py-3.5 flex flex-col gap-1"
                  >
                    <p className="text-[13px] font-medium text-white leading-snug">{a.event}</p>
                    <span
                      className="text-[11px] font-medium"
                      style={{
                        color:
                          a.type === "Instant"
                            ? "rgba(12,207,176,0.9)"
                            : a.type === "Daily 9 AM"
                            ? "rgba(79,110,247,0.9)"
                            : "rgba(251,176,36,0.9)",
                      }}
                    >
                      {a.type}
                    </span>
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
              Nothing falls through the cracks.
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
                Instant. Scheduled. On demand.
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
                The problem with manual compliance tracking
              </p>
              <h2
                className="font-serif text-white mb-4 max-w-150"
                style={{
                  fontSize: "clamp(24px, 3vw, 38px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                Risks go overdue in spreadsheets. Not in RiskGuard.
              </h2>
              <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-150 mb-6">
                In a spreadsheet-based compliance process, an overdue remediation task only gets
                noticed when someone manually reviews the tracker — which typically happens the
                week before an audit, not the week it went overdue. By then it&apos;s too late to fix
                it cleanly.
              </p>
              <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-150">
                RiskGuard&apos;s daily cron digest catches overdue items on day one — before they
                become findings. Before your auditor finds them first.
              </p>
            </div>
          </FadeUp>
        </section>

        {/* Trust signals */}
        <section className="pb-10 px-6 max-w-300 mx-auto">
          <FadeUp>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Zap, label: "Instant alerts on every meaningful risk and audit event" },
                { icon: RefreshCw, label: "Daily 9 AM cron digest — overdue items surface before the working day starts" },
                { icon: ShieldCheck, label: "Manual reminder buttons on every risk and audit — one click, one notification" },
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
