import type { Metadata } from "next";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { FinalCTA } from "@/app/_components/FinalCTA";
import { ObfuscatedEmail } from "@/app/_components/ObfuscatedEmail";

export const metadata: Metadata = {
  title: "Security — RiskGuard",
  description:
    "How RiskGuard protects your compliance data — encryption, integrity verification, access control, and responsible disclosure.",
};

const PILLARS = [
  {
    icon: "🔐",
    title: "Encryption in transit",
    body: "All data transmitted between your browser and our platform is encrypted using TLS 1.2 or higher. We enforce HTTPS across every endpoint — unencrypted connections are rejected.",
  },
  {
    icon: "🗄️",
    title: "Encryption at rest",
    body: "Customer data is encrypted at rest using AES-256. This includes risk records, controls, and all files stored in your Evidence Locker. Encryption keys are managed separately from the data they protect.",
  },
  {
    icon: "🧾",
    title: "SHA-256 evidence integrity",
    body: "Every file uploaded to the Evidence Locker receives a SHA-256 hash on ingestion. We store this fingerprint alongside the file and verify it on every retrieval. Any tampering — including by us — is immediately detectable.",
  },
  {
    icon: "🔑",
    title: "Access control",
    body: "RiskGuard uses role-based access control (RBAC). Users only see and interact with the data their role permits. External auditors receive time-limited, scoped tokens — they cannot access anything beyond what you explicitly grant them.",
  },
  {
    icon: "🏗️",
    title: "Infrastructure",
    body: "The platform runs on Vercel's edge infrastructure with data stored in the UK and European Economic Area. We do not use data centres outside the UK/EEA for customer data. Our infrastructure provider maintains ISO 27001 certification.",
  },
  {
    icon: "🔒",
    title: "Authentication",
    body: "Passwords are hashed using bcrypt with a work factor appropriate to current hardware. We support multi-factor authentication (MFA) and enforce minimum password complexity. Session tokens are short-lived and invalidated on logout.",
  },
];

const FAQ = [
  {
    q: "Do you have a bug bounty programme?",
    a: "Not formally — but we take all responsible disclosures seriously and will acknowledge researchers who report valid vulnerabilities. Email security@riskguardhq.com.",
  },
  {
    q: "Where is customer data stored?",
    a: "All customer data is stored in the United Kingdom and European Economic Area. We do not transfer data outside these regions without explicit agreement.",
  },
  {
    q: "Can RiskGuard employees access my data?",
    a: "Access to customer data by RiskGuard staff is strictly limited, logged, and requires a documented business reason. We do not access customer compliance data for any purpose other than delivering and supporting the service.",
  },
  {
    q: "How do I report a security issue?",
    a: "Email security@riskguardhq.com. Please include a description of the issue, steps to reproduce it, and the potential impact. We will acknowledge your report within 48 hours.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        {/* Hero */}
        <section className="pt-40 pb-20 px-6 text-center">
          <p className="text-xs font-medium text-accent-bright uppercase tracking-widest mb-4">
            Trust & security
          </p>
          <h1
            className="font-serif text-white mx-auto mb-6"
            style={{
              fontSize: "clamp(40px, 6.5vw, 72px)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              maxWidth: 760,
            }}
          >
            Security is the
            <br />
            <em className="italic text-accent-bright">product</em>, not a feature.
          </h1>
          <p
            className="text-gray-300 max-w-150 mx-auto font-light"
            style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.65 }}
          >
            We&apos;re a GRC platform. If we can&apos;t protect your compliance data, we
            have no business asking you to trust us with it. Here&apos;s exactly how
            we keep it safe.
          </p>
        </section>

        {/* Security pillars */}
        <section className="px-6 py-24 border-t border-white/8">
          <div className="max-w-300 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="bg-navy-light border border-white/8 rounded-2xl p-8 hover:border-accent/30 transition-colors"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5"
                    style={{
                      background: "rgba(31,77,196,0.15)",
                      border: "1px solid rgba(31,77,196,0.2)",
                    }}
                  >
                    <span aria-hidden>{p.icon}</span>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2.5 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Uptime */}
        <section className="px-6 py-20 bg-navy-mid border-y border-white/8 text-center">
          <div className="max-w-190 mx-auto">
            <p className="text-xs font-medium text-accent-bright uppercase tracking-widest mb-4">
              Availability
            </p>
            <div
              className="font-serif text-white mb-4"
              style={{ fontSize: "clamp(48px, 7vw, 80px)", lineHeight: 1.05 }}
            >
              99.9<span className="text-accent-bright">%</span>
            </div>
            <p className="text-[17px] text-gray-300 font-light leading-relaxed max-w-125 mx-auto">
              Target uptime commitment. Your compliance posture shouldn&apos;t depend on whether
              our servers are having a bad day. We monitor platform health 24/7 and publish
              incidents transparently.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-24">
          <div className="max-w-190 mx-auto">
            <p className="text-xs font-medium text-accent-bright uppercase tracking-widest mb-4">
              Common questions
            </p>
            <h2
              className="font-serif text-white mb-12"
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Security FAQ
            </h2>
            <div className="flex flex-col gap-6">
              {FAQ.map((item) => (
                <div
                  key={item.q}
                  className="border-b border-white/8 pb-6 last:border-b-0"
                >
                  <h3 className="text-base font-semibold text-white mb-2">{item.q}</h3>
                  <p className="text-[15px] text-gray-300 font-light leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-navy-light border border-white/8 rounded-2xl p-8">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-3">
                Responsible disclosure
              </p>
              <p className="text-[15px] text-gray-300 font-light leading-relaxed mb-4">
                Found a vulnerability? Please report it privately before disclosure. We commit to
                acknowledging all reports within 48 hours and resolving confirmed issues promptly.
              </p>
              <ObfuscatedEmail
                user="security"
                domain="riskguardhq.com"
                className="inline-block text-sm font-medium text-white bg-accent hover:bg-accent-bright rounded-lg px-5 py-2.5 transition-all hover:-translate-y-px"
                style={{ boxShadow: "0 0 20px rgba(31,77,196,0.3)" }}
              />
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
