import { ShieldCheck } from "lucide-react";
import { FadeUp } from "./FadeUp";

const FRAMEWORKS = [
  { name: "ISO 27001", type: "Information Security", color: "#4F6EF7" },
  { name: "SOC 2", type: "Trust & Security", color: "#0CCFB0" },
  { name: "NIST CSF", type: "Cybersecurity", color: "#FBB024" },
  { name: "PCI DSS", type: "Payment Security", color: "#EF4444" },
  { name: "GDPR", type: "Data Privacy", color: "#A855F7" },
  { name: "HIPAA", type: "Healthcare", color: "#3B82F6" },
];

const HIGHLIGHTS = [
  {
    label: "No compliance team required",
    bg: "rgba(12,207,176,0.08)",
    border: "rgba(12,207,176,0.2)",
    color: "#0CCFB0",
  },
  {
    label: "Works alongside your existing tools",
    bg: "rgba(79,110,247,0.08)",
    border: "rgba(79,110,247,0.2)",
    color: "#6B8AFF",
  },
  {
    label: "Evidence integrity guaranteed",
    bg: "rgba(168,85,247,0.08)",
    border: "rgba(168,85,247,0.2)",
    color: "#C084FC",
  },
];

export function Frameworks() {
  return (
    <section
      id="frameworks"
      className="py-24 px-6 bg-navy-mid border-y border-white/8"
    >
      <FadeUp className="max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div>
          <p className="text-xs font-medium text-accent-bright uppercase tracking-widest mb-4">
            Multi-framework
          </p>
          <h2
            className="font-serif text-white mb-4"
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            One platform.
            <br />
            Every framework.
          </h2>
          <p className="text-[17px] text-gray-300 font-light leading-relaxed mb-10">
            Stop managing compliance in spreadsheets across five different
            frameworks. RiskGuard maps your controls and risks to every standard
            automatically.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FRAMEWORKS.map((fw) => (
              <div
                key={fw.name}
                className="bg-navy border border-white/8 hover:border-accent/30 rounded-[10px] px-4 py-4 flex items-center gap-3 transition-colors"
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: fw.color }}
                />
                <div>
                  <div className="text-[13px] font-medium text-white">
                    {fw.name}
                  </div>
                  <div className="text-[11px] text-gray-500 mt-px">
                    {fw.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-navy border border-white/8 rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-4" aria-hidden>
            <ShieldCheck className="w-12 h-12 text-accent" strokeWidth={1.5} />
          </div>
          <div className="font-serif text-white text-[28px] mb-2 leading-tight">
            Audit-ready
            <br />
            in weeks
          </div>
          <div className="text-sm text-gray-500 leading-relaxed mb-6">
            Not the months it takes with spreadsheets and consultants
          </div>
          <div className="flex flex-col gap-2.5">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.label}
                className="rounded-lg px-4 py-3 text-[13px] flex items-center gap-2.5"
                style={{
                  background: h.bg,
                  border: `1px solid ${h.border}`,
                  color: h.color,
                }}
              >
                <span aria-hidden>✓</span> {h.label}
              </div>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
