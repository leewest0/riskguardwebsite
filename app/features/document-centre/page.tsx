import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  ArrowLeft,
  ArrowRight,
  Upload,
  Search,
  FileText,
  Tag,
  AlertCircle,
  Trash2,
  FolderLock,
  Bot,
  CheckSquare,
  ShieldCheck,
  Layers,
  Zap,
} from "lucide-react";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { FinalCTA } from "@/app/_components/FinalCTA";
import { FadeUp } from "@/app/_components/FadeUp";
import { CALENDLY_URL } from "@/app/_components/config";

export const metadata: Metadata = {
  title: "Document Centre — RiskGuard",
  description:
    "A centralised library for all your policies, procedures, and compliance certificates. Bulk upload, AI-powered text extraction, and full-text search — all in one place.",
};

const CAPABILITIES = [
  {
    icon: Upload,
    title: "Bulk multi-file upload",
    desc: "Drag and drop multiple files at once or use the multi-file picker. Each file gets its own editable name field, a live status indicator (uploading / done / warning / error), and the same document type and category applied to the whole batch.",
  },
  {
    icon: Search,
    title: "AI-powered full-text search",
    desc: "Text is extracted from every document at upload and indexed for search. Find the exact policy clause that answers a questionnaire question — across all your documents at once — without manually opening a single file.",
  },
  {
    icon: FileText,
    title: "Supported formats",
    desc: "PDF, DOCX, TXT, and Markdown — the formats your compliance programme actually uses. Scanned PDFs are flagged as 'Limited' (not failed) — they're stored and accessible, just not fully text-searchable.",
  },
  {
    icon: Tag,
    title: "Document metadata",
    desc: "Name, category, version, last reviewed date, and next review date per document. Stay on top of your policy review cycle without a separate tracker — RiskGuard surfaces documents approaching their review date.",
  },
  {
    icon: AlertCircle,
    title: "AI search status",
    desc: "Every document shows one of four statuses: Searchable (full text extracted), Limited (low text / scanned PDF), No text (extraction failed), or Pending (in progress). You always know exactly what the AI can and can't search.",
  },
  {
    icon: Trash2,
    title: "Delete with knowledge-base removal",
    desc: "When you delete a document, it's removed from storage and from the AI knowledge base simultaneously. No orphaned content. No stale policies contaminating your questionnaire answers.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Upload your documents",
    desc: "Drag and drop your policies, procedures, and certificates in bulk. RiskGuard extracts the text from each file immediately — PDFs, Word documents, and Markdown are all indexed in seconds. Scanned PDFs are stored with a 'Limited' flag so you know their search coverage upfront.",
  },
  {
    number: "02",
    title: "Organise and review",
    desc: "Set document categories, version numbers, and review dates. The Document Centre gives you a clean tabbed view — Policies, Procedures, Evidence — with live document counts and search across all three. When a document is approaching its next review date, you'll know.",
  },
  {
    number: "03",
    title: "Let AI use it",
    desc: "Once uploaded, your documents feed directly into the AI Advisor. When you ask the AI a compliance question or run Questionnaire Automation, it searches your own document library for the most relevant policy excerpts and control descriptions — not generic training data.",
  },
];

const RELATED = [
  {
    slug: "ai-advisor",
    icon: Bot,
    title: "AI Advisor",
    desc: "The AI Advisor's Questionnaire Automation pulls directly from your Document Centre. Upload a vendor questionnaire and Claude answers each question using your own policies and procedures.",
  },
  {
    slug: "evidence-locker",
    icon: FolderLock,
    title: "Evidence Locker",
    desc: "Evidence files are SHA-256 verified in the locker. Policies and procedures live in the Document Centre. Together they cover everything your auditors need to see.",
  },
  {
    slug: "controls-library",
    icon: CheckSquare,
    title: "Controls Library",
    desc: "Controls reference specific policy documents as their supporting evidence. The Document Centre gives you one place to manage and update those policies as your compliance posture evolves.",
  },
];

export default function DocumentCentrePage() {
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
                <BookOpen size={22} className="text-accent-bright" aria-hidden="true" />
              </div>
              <p className="text-xs font-medium text-accent-bright uppercase tracking-widest">
                Policy Management
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
              All your policies.
              <br />
              <em className="italic">One searchable library.</em>
            </h1>

            <p className="text-[19px] text-gray-300 font-light leading-relaxed max-w-150 mb-10">
              A centralised library for every policy, procedure, and certificate
              your compliance programme depends on. Bulk upload, AI text
              extraction, and full-text search — so your documents work for you
              instead of sitting in a folder somewhere.
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
              Upload once. Find anything.
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
                Upload. Organise. Let AI do the rest.
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
                The knowledge base behind the AI
              </p>
              <h2
                className="font-serif text-white mb-4 max-w-150"
                style={{
                  fontSize: "clamp(24px, 3vw, 38px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                Your documents become your AI&apos;s memory.
              </h2>
              <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-150 mb-6">
                When RiskGuard&apos;s AI Advisor answers a questionnaire question or gives compliance
                guidance, it isn&apos;t guessing from generic training data. It&apos;s searching your Document
                Centre — finding the most relevant excerpt from your actual Information Security
                Policy, your Access Control Procedure, your Business Continuity Plan.
              </p>
              <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-150">
                That&apos;s the difference between an AI assistant and a compliance assistant. One knows
                your organisation.
              </p>
            </div>
          </FadeUp>
        </section>

        {/* Trust signals */}
        <section className="pb-10 px-6 max-w-300 mx-auto">
          <FadeUp>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: ShieldCheck, label: "Org-scoped storage RLS — cross-tenant isolation enforced at the storage layer" },
                { icon: Layers, label: "Three document types: Policies, Procedures, Evidence Certificates" },
                { icon: Zap, label: "Text extracted at upload — documents are searchable within seconds" },
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
