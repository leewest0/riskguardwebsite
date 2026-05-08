const FRAMEWORKS = [
  { abbr: "ISO", label: "ISO 27001", bg: "rgba(79,110,247,0.15)", fg: "#4F6EF7" },
  { abbr: "S2", label: "SOC 2", bg: "rgba(12,207,176,0.12)", fg: "#0CCFB0" },
  { abbr: "N", label: "NIST CSF", bg: "rgba(251,176,36,0.12)", fg: "#FBB024" },
  { abbr: "PCI", label: "PCI DSS", bg: "rgba(239,68,68,0.12)", fg: "#EF4444" },
  { abbr: "G", label: "GDPR", bg: "rgba(168,85,247,0.12)", fg: "#A855F7" },
  { abbr: "H", label: "HIPAA", bg: "rgba(59,130,246,0.12)", fg: "#3B82F6" },
];

export function FrameworkLogos() {
  return (
    <div className="py-15 px-6 text-center border-y border-white/[0.08]">
      <p className="text-xs text-gray-500 uppercase tracking-[0.1em] mb-8">
        Supports all major compliance frameworks
      </p>
      <div className="flex items-center justify-center gap-12 flex-wrap">
        {FRAMEWORKS.map((fw) => (
          <div
            key={fw.label}
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-300 transition-colors"
          >
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center text-[11px] font-bold"
              style={{ background: fw.bg, color: fw.fg }}
            >
              {fw.abbr}
            </div>
            {fw.label}
          </div>
        ))}
      </div>
    </div>
  );
}
