import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/app/_components/Nav";
import { Footer } from "@/app/_components/Footer";
import { ObfuscatedEmail } from "@/app/_components/ObfuscatedEmail";

export const metadata: Metadata = {
  title: "Terms of Service — RiskGuard",
  description:
    "The terms governing your use of the RiskGuard platform, operated by TrusTrak Solutions Ltd.",
};

const LAST_UPDATED = "1 May 2026";

const SECTIONS = [
  {
    title: "1. Acceptance of terms",
    body: `By creating an account or using the RiskGuard platform, you agree to be bound by these Terms of Service and our Privacy Policy. If you are accepting on behalf of a company or other legal entity, you represent that you have the authority to bind that entity.\n\nIf you do not agree to these terms, do not use the platform.`,
  },
  {
    title: "2. The service",
    body: `RiskGuard is a cloud-based Governance, Risk and Compliance (GRC) platform operated by TrusTrak Solutions Ltd. It provides tools for risk registers, controls libraries, evidence storage, compliance reporting, and AI-assisted compliance guidance.\n\nWe reserve the right to modify, suspend, or discontinue any part of the service at any time. We will give reasonable notice of material changes where possible.`,
  },
  {
    title: "3. Account registration",
    body: `You must provide accurate and complete information when registering. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.\n\nYou must notify us immediately at support@riskguardhq.com if you become aware of any unauthorised use of your account.\n\nYou must be at least 18 years old and have the legal capacity to enter into contracts to use this service.`,
  },
  {
    title: "4. Acceptable use",
    body: `You agree not to:\n\n- Use the platform for any unlawful purpose or in violation of any applicable law or regulation\n- Upload content that infringes the intellectual property rights of any third party\n- Attempt to gain unauthorised access to any part of the platform or its infrastructure\n- Introduce malware, viruses, or other malicious code\n- Use the platform to store, process, or transmit data that you do not have the legal right to handle\n- Reverse engineer, decompile, or disassemble any part of the platform\n- Resell or sublicense access to the platform without our written consent`,
  },
  {
    title: "5. Subscriptions and payment",
    body: `Access to RiskGuard requires a paid subscription. Subscription fees are billed in advance on a monthly or annual basis, depending on your plan.\n\nAll fees are exclusive of VAT. VAT will be applied at the applicable UK rate where required.\n\nSubscriptions auto-renew unless cancelled before the renewal date. You may cancel at any time through your account settings. No refunds are issued for partial subscription periods unless required by law.\n\nWe reserve the right to change pricing with 30 days' notice. Continued use after the effective date constitutes acceptance of the new pricing.`,
  },
  {
    title: "6. Your data",
    body: `You retain full ownership of all data you upload to the platform ("Customer Data"). We process Customer Data solely to provide the service and in accordance with your instructions.\n\nWe do not access, analyse, or use Customer Data for any purpose other than delivering the platform, maintaining security, and meeting legal obligations.\n\nYou are responsible for ensuring you have the right to upload and process any data you submit to the platform, including ensuring compliance with applicable data protection laws.`,
  },
  {
    title: "7. Intellectual property",
    body: `The RiskGuard platform, including its design, code, features, and content (excluding Customer Data), is the exclusive property of TrusTrak Solutions Ltd and is protected by UK and international intellectual property laws.\n\nThese terms do not grant you any rights to our trademarks, trade names, or branding.\n\nWe grant you a limited, non-exclusive, non-transferable licence to use the platform solely for your internal business purposes during your subscription period.`,
  },
  {
    title: "8. Uptime and service levels",
    body: `We aim to maintain 99.9% platform uptime, excluding scheduled maintenance windows. Scheduled maintenance will be communicated in advance where reasonably practicable.\n\nWe do not guarantee uninterrupted or error-free service. Downtime does not entitle you to a refund unless specified in a separate Service Level Agreement.`,
  },
  {
    title: "9. Limitation of liability",
    body: `To the maximum extent permitted by applicable law, TrusTrak Solutions Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of or inability to use the platform.\n\nOur total aggregate liability to you for any claim arising from these terms or your use of the platform shall not exceed the total fees paid by you in the 12 months preceding the claim.\n\nNothing in these terms limits our liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded by law.`,
  },
  {
    title: "10. Termination",
    body: `Either party may terminate these terms at any time. You may cancel your account through the platform. We may suspend or terminate your account if you breach these terms, fail to pay fees, or if we are required to do so by law.\n\nOn termination, your access to the platform will cease. We will retain your Customer Data for 30 days following termination, during which time you may request an export. After 30 days, Customer Data will be permanently deleted.`,
  },
  {
    title: "11. Governing law",
    body: `These terms are governed by the laws of England and Wales. Any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.\n\nIf any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.`,
  },
  {
    title: "12. Changes to these terms",
    body: `We may update these terms from time to time. We will notify you of material changes by email at least 14 days before they take effect. If you do not agree to the revised terms, you may cancel your account before the effective date.\n\nContinued use of the platform after the effective date constitutes acceptance of the revised terms.`,
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

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>
        </section>

        {/* Content */}
        <section className="px-6 pb-24 border-t border-white/8">
          <div className="max-w-190 mx-auto pt-16 flex flex-col gap-12">
            <p className="text-[17px] text-gray-300 font-light leading-relaxed">
              These Terms of Service govern your access to and use of the RiskGuard platform,
              operated by TrusTrak Solutions Ltd, a company registered in England and Wales.
              Please read them carefully before using the service.
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
                user="support"
                domain="riskguardhq.com"
                className="text-accent-bright hover:text-white transition-colors"
              />
              .{" "}
              <Link href="/privacy" className="text-accent-bright hover:text-white transition-colors">
                View our Privacy Policy →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
