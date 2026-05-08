import { CALENDLY_URL } from "./config";

export function FinalCTA() {
  return (
    <section
      id="demo"
      className="relative py-24 px-6 text-center overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(79,110,247,0.1) 0%, transparent 70%)",
        }}
      />

      <div
        className="relative max-w-[680px] mx-auto bg-navy-light rounded-3xl px-8 py-16 sm:px-12"
        style={{
          border: "1px solid rgba(79,110,247,0.2)",
          boxShadow: "0 0 80px rgba(79,110,247,0.1)",
        }}
      >
        <h2
          className="font-serif text-white mb-4"
          style={{
            fontSize: "clamp(30px, 4vw, 44px)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          Ready to get
          <br />
          <em className="italic text-accent-bright">audit-ready?</em>
        </h2>
        <p className="text-base text-gray-300 mb-9 font-light leading-relaxed">
          Book a 30-minute demo and see how RiskGuard can get your startup
          compliant — without the consultant fees.
        </p>

        <div className="flex items-center justify-center gap-3.5 flex-wrap">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] font-medium text-white bg-accent rounded-[10px] px-7 py-3.5 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
            style={{ boxShadow: "0 0 40px rgba(79,110,247,0.35)" }}
          >
            Book a Free Demo →
          </a>
          <a
            href="#"
            className="text-[15px] font-normal text-gray-300 hover:text-white bg-transparent border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04] rounded-[10px] px-7 py-3.5 transition-all inline-flex items-center gap-2"
          >
            Start free trial
          </a>
        </div>
      </div>
    </section>
  );
}
