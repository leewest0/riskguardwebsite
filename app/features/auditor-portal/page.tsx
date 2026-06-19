import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  ArrowLeft,
  ArrowRight,
  Mail,
  Timer,
  Eye,
  ShieldOff,
  ScrollText,
  MessageSquare,
  FolderLock,
  FileBarChart,
  CheckSquare,
  ShieldCheck,
  KeyRound,
  Clock,
} from "lucide-react";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { FinalCTA } from "@/app/_components/FinalCTA";
import { FadeUp } from "@/app/_components/FadeUp";
import { CALENDLY_URL } from "@/app/_components/config";

export const metadata: Metadata = {
  title: "External Auditor Portal — RiskGuard",
  description:
    "Give auditors exactly what they need — nothing more. Time-limited OTP-verified portals with scoped read-only access, full audit logging, and instant revocation.",
};

const CAPABILITIES = [
  {
    icon: Mail,
    title: "OTP email verification",
    desc: "Auditors receive a 6-digit one-time passcode by email. No account, no password, no onboarding — they click a link, enter the code, and they're in. Access granted in under 60 seconds.",
  },
  {
    icon: Timer,
    title: "Time-limited access",
    desc: "Every portal session has a defined expiry — set it to hours, days, or weeks. When it expires, the link dies. No manual cleanup, no forgotten open sessions.",
  },
  {
    icon: Eye,
    title: "Scoped read-only access",
    desc: "Auditors see only the evidence you've chosen to share — specific controls, specific files. Your full risk register, internal notes, and other tenant data are never visible.",
  },
  {
    icon: ShieldOff,
    title: "Instant revocation",
    desc: "Cancel an auditor's access in one click at any time — mid-session if necessary. The token is invalidated immediately. No waiting for expiry.",
  },
  {
    icon: ScrollText,
    title: "Full audit logging",
    desc: "Every view, every download, every action inside the portal is logged with the auditor's identity and a timestamp. When your ISO 27001 auditor asks 'who accessed this?' — you have a complete, timestamped answer.",
  },
  {
    icon: MessageSquare,
    title: "Comment-only interactions",
    desc: "Auditors can leave comments against evidence or controls — ask for clarification, flag a concern, or confirm a finding. They can't edit, delete, or move anything.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Create the portal",
    desc: "Select which controls and evidence files to share. Set an expiry date. Enter the auditor's email address. Click 'Send portal link' — they receive a secure link and a 6-digit OTP in under 60 seconds.",
  },
  {
    number: "02",
    title: "Auditor verifies and reviews",
    desc: "The auditor clicks the link, enters their OTP, and lands in a clean read-only view of exactly what you've shared. They can view evidence, download files, and leave comments. SHA-256 integrity badges confirm no file has been altered since upload.",
  },
  {
    number: "03",
    title: "Track, respond, revoke",
    desc: "Monitor who has accessed the portal and when. Reply to auditor comments from within RiskGuard. When the audit is complete — or if anything seems off — revoke access instantly. The full log is retained for your own records.",
  },
];

const RELATED = [
  {
    slug: "evidence-locker",
    icon: FolderLock,
    title: "Evidence Locker",
    desc: "The portal shares evidence from your locker directly. SHA-256 integrity badges tell auditors every file is exactly as uploaded — tamper-evident at the point of sharing.",
  },
  {
    slug: "controls-library",
    icon: CheckSquare,
    title: "Controls Library",
    desc: "Share specific controls with their linked evidence in one scoped view. Auditors see the control, the evidence, and the compliance result — nothing outside the scope you defined.",
  },
  {
    slug: "audit-reports",
    icon: FileBarChart,
    title: "PDF Audit Reports",
    desc: "Send auditors a PDF summary before or after the portal session. Full compliance posture, control coverage, and findings — in a format they can keep and file.",
  },
];

export default function AuditorPortalPage() {
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
                <Users size={22} className="text-accent-bright" aria-hidden="true" />
              </div>
              <p className="text-xs font-medium text-accent-bright uppercase tracking-widest">
                Auditor Access
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
              Give auditors exactly
              <br />
              <em className="italic">what they need. Nothing more.</em>
            </h1>

            <p className="text-[19px] text-gray-300 font-light leading-relaxed max-w-150 mb-10">
              Time-limited, OTP-verified portals that give external auditors
              scoped read-only access to the evidence that matters — without
              creating accounts, oversharing data, or losing track of who saw
              what.
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
              Secure access. Zero friction.
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
                Create. Share. Control.
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

        {/* Security standards callout */}
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
                Built to the same standard as the best
              </p>
              <h2
                className="font-serif text-white mb-4 max-w-150"
                style={{
                  fontSize: "clamp(24px, 3vw, 38px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                The access model your ISO 27001 auditor expects to see.
              </h2>
              <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-150 mb-6">
                SOC 2 CC6.1 requires access to be granted on a least-privilege basis and revoked
                promptly when no longer needed. The RiskGuard auditor portal satisfies this by
                design — scoped access, time-limited tokens, and one-click revocation. No manual
                cleanup. No open access that outlasts the audit.
              </p>
              <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-150">
                GDPR Article 32 requires appropriate technical measures to protect personal data.
                OTP verification, token expiry, and row-level security are those measures —
                built in, not bolted on.
              </p>
            </div>
          </FadeUp>
        </section>

        {/* Trust signals */}
        <section className="pb-10 px-6 max-w-300 mx-auto">
          <FadeUp>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: ShieldCheck, label: "OTP email verification — no account creation, no passwords to manage" },
                { icon: KeyRound, label: "Tokens expire automatically — no permanent access links ever issued" },
                { icon: Clock, label: "Full access log retained — who viewed what and when, audit-ready" },
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
