import type { Metadata } from "next";
import Link from "next/link";
import {
  FolderLock,
  ArrowLeft,
  ArrowRight,
  Hash,
  BadgeCheck,
  Link2,
  Lock,
  FolderSearch,
  Eye,
  CheckSquare,
  Users,
  FileBarChart,
  ShieldCheck,
  Database,
  KeyRound,
} from "lucide-react";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { FinalCTA } from "@/app/_components/FinalCTA";
import { FadeUp } from "@/app/_components/FadeUp";
import { CALENDLY_URL } from "@/app/_components/config";

export const metadata: Metadata = {
  title: "Evidence Locker — RiskGuard",
  description:
    "Secure audit evidence storage with SHA-256 integrity verification. Every file is hashed on upload and verified on every download — tamper-evident by design.",
};

const CAPABILITIES = [
  {
    icon: Hash,
    title: "SHA-256 integrity hashing",
    desc: "Every file is hashed on upload. The hash is stored and re-verified every time the file is accessed. If a single byte changes, it's detected immediately.",
  },
  {
    icon: BadgeCheck,
    title: "Visual integrity badges",
    desc: "Every file shows one of three badges: Verified (hash matches), Modified (file has changed since upload), or Corrupted (hash mismatch detected). No ambiguity.",
  },
  {
    icon: Link2,
    title: "Signed URLs",
    desc: "Generate temporary, expiring download links to share specific files with auditors or stakeholders — without giving anyone an account or permanent access.",
  },
  {
    icon: Lock,
    title: "Row-level security",
    desc: "Every evidence access is enforced by Supabase Row Level Security at the database layer. Cross-tenant isolation is guaranteed — no user can access another org's files.",
  },
  {
    icon: FolderSearch,
    title: "Organised by risk or control",
    desc: "Evidence is attached directly to the risk or control it supports. During an audit, find the right document instantly — no searching through a shared drive.",
  },
  {
    icon: Eye,
    title: "Full access audit trail",
    desc: "Every evidence view and download is logged with the user's identity and a timestamp. When an auditor asks 'who accessed this?' you have a complete answer.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Upload",
    desc: "Drag and drop any document, screenshot, export, or certificate. The SHA-256 hash is computed server-side and stored the moment the file lands. Supported formats include PDF, DOCX, PNG, and more.",
  },
  {
    number: "02",
    title: "Verify",
    desc: "Every time the file is accessed or downloaded, its hash is re-computed and checked against the stored value. A green 'Verified' badge means the file is exactly as it was when uploaded. Any change — intentional or not — shows as 'Modified' or 'Corrupted'.",
  },
  {
    number: "03",
    title: "Share",
    desc: "Generate a signed URL to give an auditor time-limited access to a specific file. No account, no permanent access, no oversharing. The External Auditor Portal gives even more fine-grained control over what gets shared.",
  },
];

const RELATED = [
  {
    slug: "controls-library",
    icon: CheckSquare,
    title: "Controls Library",
    desc: "Attach evidence directly to controls. Auditors see exactly which documents support each control — with SHA-256 integrity badges proving nothing has been altered.",
  },
  {
    slug: "auditor-portal",
    icon: Users,
    title: "External Auditor Portal",
    desc: "Share evidence with external auditors through OTP-verified, time-limited portals. Every view is logged. No account creation, no oversharing, no guesswork.",
  },
  {
    slug: "audit-reports",
    icon: FileBarChart,
    title: "PDF Audit Reports",
    desc: "Evidence counts per control feed directly into the audit report. The report shows exactly how much evidence backs each compliance result.",
  },
];

export default function EvidenceLockerPage() {
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
                <FolderLock size={22} className="text-accent-bright" aria-hidden="true" />
              </div>
              <p className="text-xs font-medium text-accent-bright uppercase tracking-widest">
                Evidence Management
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
              Tamper-evident proof.
              <br />
              <em className="italic">Every file.</em>
            </h1>

            <p className="text-[19px] text-gray-300 font-light leading-relaxed max-w-150 mb-10">
              Every piece of audit evidence gets SHA-256 hashed on upload and
              verified on every download. If a file has been touched — by anyone,
              for any reason — you&apos;ll know before your auditor does.
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
              Evidence that proves it&apos;s real
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
                Upload once. Verified forever.
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

        {/* SHA-256 explainer callout */}
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
                Why SHA-256?
              </p>
              <h2
                className="font-serif text-white mb-4 max-w-150"
                style={{
                  fontSize: "clamp(24px, 3vw, 38px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                The same standard used by major cloud providers
              </h2>
              <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-150 mb-4">
                SHA-256 is a cryptographic hash function from the SHA-2 family. It takes
                any file and produces a unique 256-bit fingerprint. Change even a single
                character in the file and the fingerprint changes completely.
              </p>
              <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-150">
                This makes it impossible to alter evidence without detection — which is
                exactly what your ISO 27001 auditor is checking for when they ask about
                evidence integrity controls.
              </p>
            </div>
          </FadeUp>
        </section>

        {/* Trust signals */}
        <section className="pb-10 px-6 max-w-300 mx-auto">
          <FadeUp>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: ShieldCheck, label: "SHA-256 hashing — the same standard as AWS S3, GitHub, and Cloudflare" },
                { icon: Database, label: "Row Level Security enforced at the database layer — zero cross-tenant access" },
                { icon: KeyRound, label: "Signed URLs expire automatically — no permanent access links" },
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
