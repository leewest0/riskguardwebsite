import { FadeUp } from "./FadeUp";

const FEATURES = [
  {
    icon: "📋",
    title: "Risk Register",
    desc: "Document, score, and track every risk with automated likelihood and impact scoring. Assign owners and monitor remediation progress in real time.",
  },
  {
    icon: "✅",
    title: "Controls Library",
    desc: "Pre-built controls mapped to ISO 27001, SOC 2, NIST, PCI DSS, and GDPR. Import via CSV or build your own — then track testing across audits.",
  },
  {
    icon: "📁",
    title: "Evidence Locker",
    desc: "Secure file storage with SHA-256 integrity verification. Every piece of audit evidence is tamper-evident and ready for external auditors.",
  },
  {
    icon: "🤖",
    title: "AI Advisor",
    desc: "Ask Claude anything about your compliance posture. Get risk guidance, control recommendations, and audit prep advice — in plain English.",
  },
  {
    icon: "👥",
    title: "External Auditor Portal",
    desc: "Generate secure, time-limited access tokens for external auditors. They get scoped access to evidence — nothing more, nothing less.",
  },
  {
    icon: "📊",
    title: "PDF Audit Reports",
    desc: "One-click executive reports with compliance scores, control status, and findings. Board-ready, auditor-approved, automatically generated.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6 max-w-300 mx-auto">
      <p className="text-xs font-medium text-accent-bright uppercase tracking-widest mb-4 text-center">
        Everything you need
      </p>
      <h2
        className="font-serif text-white max-w-150 mx-auto mb-4 text-center"
        style={{
          fontSize: "clamp(32px, 5vw, 52px)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}
      >
        GRC without the complexity
      </h2>
      <p className="text-[17px] text-gray-300 text-center max-w-125 mx-auto mb-16 font-light leading-relaxed">
        Everything a growing UK tech company needs to get audit-ready — in one
        platform.
      </p>

      <FadeUp>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/8"
        style={{ background: "rgba(255,255,255,0.08)" }}
      >
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="group relative bg-navy hover:bg-navy-light p-9 transition-colors overflow-hidden"
          >
            <div
              className="absolute top-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
              }}
            />
            <div
              className="w-11 h-11 rounded-[10px] flex items-center justify-center text-xl mb-5"
              style={{
                background: "rgba(79,110,247,0.15)",
                border: "1px solid rgba(79,110,247,0.2)",
              }}
            >
              {f.icon}
            </div>
            <h3 className="text-base font-semibold text-white mb-2.5 tracking-tight">
              {f.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed font-light">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
      </FadeUp>
    </section>
  );
}
