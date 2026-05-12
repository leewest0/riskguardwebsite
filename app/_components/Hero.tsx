import { CALENDLY_URL } from "./config";

const TRUST_ITEMS = [
  "No compliance team needed",
  "Audit-ready in weeks",
  "ISO 27001 & SOC 2 ready",
  "GDPR compliant",
];

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(79,110,247,0.18) 0%, transparent 60%), radial-gradient(ellipse 40% 30% at 80% 60%, rgba(12,207,176,0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 20% 80%, rgba(79,110,247,0.06) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      <div className="relative inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-[13px] font-medium animate-fade-up"
        style={{
          background: "rgba(79,110,247,0.12)",
          border: "1px solid rgba(79,110,247,0.3)",
          color: "var(--color-accent-bright)",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse-dot" />
        Built for UK tech startups
      </div>

      <h1
        className="relative font-serif text-white max-w-205 mb-6 animate-fade-up"
        style={{
          fontSize: "clamp(44px, 7vw, 80px)",
          lineHeight: 1.08,
          letterSpacing: "-0.02em",
          animationDelay: "0.1s",
        }}
      >
        Compliance automation
        <br />
        that{" "}
        <em className="italic text-accent-bright">actually works</em>
        <br />
        for growing teams
      </h1>

      <p
        className="relative text-gray-300 max-w-130 mb-11 font-light animate-fade-up"
        style={{
          fontSize: "clamp(16px, 2vw, 19px)",
          lineHeight: 1.65,
          animationDelay: "0.2s",
        }}
      >
        RiskGuard automates ISO 27001, SOC 2, and GDPR compliance — so your team
        can focus on building, not paperwork.
      </p>

      <div
        className="relative flex items-center flex-wrap justify-center gap-4 mb-18 animate-fade-up"
        style={{ animationDelay: "0.3s" }}
      >
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] font-medium text-white bg-accent rounded-[10px] px-7 py-3.5 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
          style={{ boxShadow: "0 0 40px rgba(79,110,247,0.35)" }}
        >
          Book a Free Demo
          <span aria-hidden>→</span>
        </a>
        {/* Walkthrough button — commented out until dashboard video is ready
        <a
          href="#"
          className="text-[15px] font-normal text-gray-300 hover:text-white bg-transparent border border-white/8 hover:border-white/20 hover:bg-white/4 rounded-[10px] px-7 py-3.5 transition-all inline-flex items-center gap-2"
        >
          <span aria-hidden>▶</span>
          Watch 2-min walkthrough
        </a>
        */}
      </div>

      <div
        className="relative flex items-center flex-wrap justify-center gap-6 animate-fade-up"
        style={{ animationDelay: "0.4s" }}
      >
        {TRUST_ITEMS.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 text-[13px] text-gray-500"
          >
            <span className="text-teal text-sm" aria-hidden>
              ✓
            </span>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
