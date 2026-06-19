import type { Metadata } from "next";
import Link from "next/link";
import {
  UserCog,
  ArrowLeft,
  ArrowRight,
  Mail,
  Shield,
  Users,
  Key,
  UserX,
  Clock,
  ClipboardList,
  FolderLock,
  FileBarChart,
  ShieldCheck,
  Lock,
  Database,
} from "lucide-react";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { FinalCTA } from "@/app/_components/FinalCTA";
import { FadeUp } from "@/app/_components/FadeUp";
import { CALENDLY_URL } from "@/app/_components/config";

export const metadata: Metadata = {
  title: "User Management — RiskGuard",
  description:
    "Invite-only onboarding with a 6-role RBAC system. Every user gets exactly the access their role requires — enforced at the database layer, not just the UI.",
};

const ROLES = [
  { name: "Admin", desc: "Full system access — invite, edit, and delete users; manage all settings" },
  { name: "Auditor", desc: "Full audit management — write controls, upload evidence, manage questionnaires" },
  { name: "Risk Owner", desc: "Edit own assigned risks (status, mitigation, notes); read-only elsewhere" },
  { name: "Member", desc: "Update status on assigned audit controls and upload evidence to assigned controls" },
  { name: "Viewer", desc: "Read-only access across all areas — for stakeholders who need visibility, not edit rights" },
  { name: "External Auditor", desc: "Limited temporary access via OTP-verified portal — scoped to what you choose to share" },
];

const CAPABILITIES = [
  {
    icon: Mail,
    title: "Invite-only onboarding",
    desc: "No open registration. Admins invite users by email and role. Invitees receive a secure link, set their own password, and land directly in the organisation. The invite link is single-use and expires after 24 hours.",
  },
  {
    icon: Shield,
    title: "6-role RBAC",
    desc: "Admin, Auditor, Risk Owner, Member, Viewer, External Auditor. Each role is defined with specific, minimal permissions — enforced in both API middleware and Supabase Row Level Security write policies.",
  },
  {
    icon: Key,
    title: "Database-layer enforcement",
    desc: "Permissions aren't just enforced at the UI layer. Every role check goes through `get_my_role()` — a SECURITY DEFINER function that enforces the access model at the database itself. There's no way to bypass it from the frontend.",
  },
  {
    icon: Users,
    title: "Team visibility",
    desc: "See every active user, their role, their last login, and their current status. Admins can update roles instantly — without any downtime or re-invitation required.",
  },
  {
    icon: Clock,
    title: "Last login tracking",
    desc: "Every login event is tracked with a timestamp per user. Know who's active, who hasn't logged in recently, and when access patterns change — all without a separate audit tool.",
  },
  {
    icon: UserX,
    title: "Full user deletion",
    desc: "Remove a user completely — their profile row and their Supabase Auth account are deleted atomically. No orphaned auth records, no data leakage, no ghost accounts.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Invite by email and role",
    desc: "Enter the user's email and select their role. RiskGuard sends them a secure invite link. They click it, set their password, and are immediately placed into your organisation with exactly the permissions their role carries — nothing more.",
  },
  {
    number: "02",
    title: "They join — you stay in control",
    desc: "From the moment they join, every action they take is governed by their role. A Risk Owner can edit their assigned risks and nothing else. A Member can update controls they're assigned to. The system enforces this at every layer — not just the page they can see.",
  },
  {
    number: "03",
    title: "Update or remove anytime",
    desc: "Promote a Member to Auditor. Downgrade a role. Remove a user entirely. All changes take effect immediately. When someone leaves the organisation, their account is deleted — auth record and all. No cleanup required.",
  },
];

const RELATED = [
  {
    slug: "auditor-portal",
    icon: Users,
    title: "External Auditor Portal",
    desc: "External auditors don't need a user account. They get a time-limited, OTP-verified portal link that gives them exactly the access scope you define.",
  },
  {
    slug: "evidence-locker",
    icon: FolderLock,
    title: "Evidence Locker",
    desc: "Row-level security means users can only access evidence from their own organisation. The RBAC system and the locker's security model are built on the same foundation.",
  },
  {
    slug: "audit-reports",
    icon: FileBarChart,
    title: "PDF Audit Reports",
    desc: "Audit reports show control assessments, findings, and corrective actions. The RBAC system controls who can generate, view, and export these reports.",
  },
];

export default function UserManagementPage() {
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
                <UserCog size={22} className="text-accent-bright" aria-hidden="true" />
              </div>
              <p className="text-xs font-medium text-accent-bright uppercase tracking-widest">
                Access Control
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
              The right access for
              <br />
              <em className="italic">the right people.</em>
            </h1>

            <p className="text-[19px] text-gray-300 font-light leading-relaxed max-w-150 mb-10">
              Invite-only onboarding with a 6-role RBAC system — enforced at the
              database layer, not just the UI. Every user gets exactly the access
              their role requires. Nothing more, nothing less.
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

        {/* Role reference */}
        <section
          className="py-10 px-6 border-y border-white/8"
          style={{ background: "rgba(13,21,38,0.6)" }}
        >
          <div className="max-w-300 mx-auto">
            <FadeUp>
              <p className="text-[11px] font-medium text-gray-600 uppercase tracking-widest mb-6 text-center">
                6 roles — least-privilege by design
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ROLES.map((r) => (
                  <div
                    key={r.name}
                    className="bg-navy-light border border-white/8 rounded-xl px-5 py-4"
                  >
                    <p className="text-[13px] font-semibold text-white mb-1">{r.name}</p>
                    <p className="text-[13px] text-gray-500 leading-snug">{r.desc}</p>
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
              Secure by default. Managed with ease.
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
                Invite. Assign. Control.
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

        {/* Security callout */}
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
                SOC 2 CC6.1 — Logical access controls
              </p>
              <h2
                className="font-serif text-white mb-4 max-w-150"
                style={{
                  fontSize: "clamp(24px, 3vw, 38px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                Access controls your auditor will actually believe.
              </h2>
              <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-150 mb-6">
                SOC 2 Trust Services Criteria CC6.1 requires that logical access to systems is
                restricted to authorised users and based on least privilege. RiskGuard&apos;s 6-role
                system satisfies this by design — each role is defined with the minimum permissions
                needed and nothing more.
              </p>
              <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-150">
                And because enforcement happens at the database layer via Row Level Security —
                not just in the UI — your SOC 2 auditor can verify the access controls are real,
                not just a UI lock on a page that a direct API call could bypass.
              </p>
            </div>
          </FadeUp>
        </section>

        {/* Trust signals */}
        <section className="pb-10 px-6 max-w-300 mx-auto">
          <FadeUp>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: ShieldCheck, label: "Invite-only — no open registration, no unauthorised account creation" },
                { icon: Database, label: "Row-level security enforced at the database layer on every request" },
                { icon: Lock, label: "Full user deletion — profile row and Auth account removed atomically" },
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
