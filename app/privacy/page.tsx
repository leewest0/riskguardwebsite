import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { ObfuscatedEmail } from "@/app/_components/ObfuscatedEmail";

export const metadata: Metadata = {
  title: "Privacy Policy — RiskGuard",
  description:
    "How TrusTrak Solutions Ltd collects, uses, and protects your data on the RiskGuard platform.",
};

const LAST_UPDATED = "1 May 2026";

const SECTIONS = [
  {
    title: "1. Who we are",
    body: `RiskGuard is operated by TrusTrak Solutions Ltd, a private limited company registered in England and Wales. Our registered office is in London, UK. In this policy "we", "us", and "our" refer to TrusTrak Solutions Ltd.\n\nIf you have any questions about this policy, contact us at privacy@riskguardhq.com.`,
  },
  {
    title: "2. What data we collect",
    body: `We collect the following categories of personal data:\n\n**Account data** — your name, email address, company name, and password (stored as a hashed value, never in plain text) when you register for an account.\n\n**Usage data** — information about how you interact with the platform, including pages visited, features used, and timestamps. This helps us improve the product.\n\n**Compliance data** — documents, risk entries, control records, and evidence files you upload to the platform as part of your GRC workflow. You own this data entirely.\n\n**Communications** — emails you send to us, support requests, and feedback.\n\n**Technical data** — IP address, browser type, device information, and cookies (see Section 8).`,
  },
  {
    title: "3. Legal basis for processing",
    body: `We process your personal data under the following lawful bases under UK GDPR:\n\n**Contract** — to provide the RiskGuard service you have signed up for.\n\n**Legitimate interests** — to improve our platform, prevent fraud, and ensure the security of our systems.\n\n**Legal obligation** — where we are required by law to process or retain data.\n\n**Consent** — for marketing communications, where you have opted in. You can withdraw consent at any time.`,
  },
  {
    title: "4. How we use your data",
    body: `We use your data to:\n\n- Create and manage your account\n- Deliver and improve the RiskGuard platform\n- Respond to support requests\n- Send transactional emails (account confirmations, password resets)\n- Send product updates and marketing, if you have opted in\n- Detect and prevent fraud or security incidents\n- Meet our legal obligations`,
  },
  {
    title: "5. Data sharing",
    body: `We do not sell your personal data. We share it only with:\n\n**Service providers** — third-party processors who help us operate the platform (hosting, email delivery, analytics). These are bound by data processing agreements and may not use your data for their own purposes.\n\n**Law enforcement or regulators** — where we are required by law or court order.\n\n**Auditors** — where you have granted an external auditor access via a time-limited token. You control what they can see.\n\nWe will never share your compliance data with any third party without your explicit instruction.`,
  },
  {
    title: "6. Data storage and transfers",
    body: `Your data is stored on servers located in the United Kingdom and European Economic Area (EEA). We do not transfer personal data outside the UK/EEA without appropriate safeguards in place.\n\nCompliance data (risk registers, evidence files, control records) is stored with AES-256 encryption at rest. All data in transit is protected by TLS 1.2 or higher.`,
  },
  {
    title: "7. Data retention",
    body: `We retain your personal data for as long as your account is active. If you close your account, we will delete or anonymise your personal data within 90 days, unless we are required by law to retain it longer.\n\nCompliance data uploaded by you is deleted within 30 days of account closure, unless you request earlier deletion.`,
  },
  {
    title: "8. Cookies",
    body: `We use a small number of strictly necessary cookies to keep you logged in and maintain session state. We do not use tracking cookies or advertising cookies.\n\nYou can disable cookies in your browser settings, but this may prevent you from logging in to the platform.`,
  },
  {
    title: "9. Your rights",
    body: `Under UK GDPR, you have the right to:\n\n- **Access** — request a copy of the personal data we hold about you\n- **Rectification** — ask us to correct inaccurate data\n- **Erasure** — ask us to delete your data ("right to be forgotten")\n- **Restriction** — ask us to stop processing your data in certain circumstances\n- **Portability** — receive your data in a machine-readable format\n- **Object** — object to processing based on legitimate interests\n- **Withdraw consent** — for any processing based on consent\n\nTo exercise any of these rights, email privacy@riskguardhq.com. We will respond within 30 days. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.`,
  },
  {
    title: "10. Changes to this policy",
    body: `We may update this policy from time to time. We will notify you of material changes by email or by displaying a prominent notice in the platform. The "Last updated" date at the top of this page reflects the most recent revision.\n\nContinuing to use RiskGuard after a policy update constitutes acceptance of the revised terms.`,
  },
];

// Safely renders **bold** markers and - bullet lists as React elements — no HTML injection
function renderInline(text: string): React.ReactNode[] {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 0 ? part : <strong key={i} className="text-white font-medium">{part}</strong>
  );
}

function renderParagraph(para: string, index: number): React.ReactNode {
  const lines = para.split("\n").filter((l) => l.length > 0);
  const isList = lines.length > 0 && lines.every((l) => l.startsWith("- "));

  if (isList) {
    return (
      <ul key={index} className="flex flex-col gap-1.5 list-none">
        {lines.map((line, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[16px] text-gray-300 font-light leading-relaxed">
            <span className="mt-2.5 w-1 h-1 rounded-full shrink-0" style={{ background: "var(--color-accent)" }} aria-hidden />
            {renderInline(line.slice(2))}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p key={index} className="text-[16px] text-gray-300 font-light leading-relaxed">
      {renderInline(para)}
    </p>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        {/* Hero */}
        <section className="pt-40 pb-16 px-6 text-center">
          <p className="text-xs font-medium text-accent-bright uppercase tracking-widest mb-4">
            Legal
          </p>
          <h1
            className="font-serif text-white mx-auto mb-4"
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              maxWidth: 640,
            }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>
        </section>

        {/* Content */}
        <section className="px-6 pb-24 border-t border-white/8">
          <div className="max-w-190 mx-auto pt-16 flex flex-col gap-12">
            <p className="text-[17px] text-gray-300 font-light leading-relaxed">
              This Privacy Policy explains how TrusTrak Solutions Ltd (&ldquo;RiskGuard&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
              collects, uses, and protects your personal data when you use our platform or visit
              our website. We are committed to handling your data transparently and in accordance
              with UK GDPR and the Data Protection Act 2018.
            </p>

            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2
                  className="font-serif text-white mb-4"
                  style={{ fontSize: "clamp(20px, 3vw, 26px)", letterSpacing: "-0.02em" }}
                >
                  {s.title}
                </h2>
                <div className="flex flex-col gap-3">
                  {s.body.split("\n\n").map((para, i) => renderParagraph(para, i))}
                </div>
              </div>
            ))}

            <div className="border-t border-white/8 pt-10 text-sm text-gray-500">
              Questions? Email us at{" "}
              <ObfuscatedEmail
                user="privacy"
                domain="riskguardhq.com"
                className="text-accent-bright hover:text-white transition-colors"
              />
              . This policy is governed by the laws of England and Wales.{" "}
              <Link href="/terms" className="text-accent-bright hover:text-white transition-colors">
                View our Terms of Service →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
