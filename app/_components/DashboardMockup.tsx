import { LogoMark } from "./Logo";
import { FadeUp } from "./FadeUp";

const SIDEBAR_ITEMS = [
  { icon: "📊", label: "Dashboard", active: true },
  { icon: "⚠️", label: "Risk Register" },
  { icon: "✅", label: "Controls" },
  { icon: "📋", label: "Audits" },
  { icon: "📁", label: "Evidence" },
  { icon: "🤖", label: "AI Advisor" },
  { icon: "👥", label: "Team" },
];

const STATS = [
  { label: "Total Risks", value: "24", sub: "↓ 3 resolved", subColor: "text-teal" },
  { label: "Controls Active", value: "87", sub: "↑ 12 this month", subColor: "text-teal" },
  { label: "Compliance Score", value: "94%", sub: "ISO 27001", subColor: "text-teal" },
  { label: "Open Audits", value: "3", sub: "2 due soon", subColor: "text-[#FBB024]" },
];

type Risk = {
  name: string;
  level: { label: string; tone: "red" | "yellow" };
  framework: string;
  status: { label: string; tone: "green" | "yellow" };
};

const RISKS: Risk[] = [
  {
    name: "Data breach via API",
    level: { label: "High", tone: "red" },
    framework: "ISO 27001",
    status: { label: "In Review", tone: "yellow" },
  },
  {
    name: "Access control gaps",
    level: { label: "Medium", tone: "yellow" },
    framework: "SOC 2",
    status: { label: "Resolved", tone: "green" },
  },
  {
    name: "Third-party vendor risk",
    level: { label: "Medium", tone: "yellow" },
    framework: "GDPR",
    status: { label: "Mitigated", tone: "green" },
  },
];

const TONE_STYLES: Record<"green" | "yellow" | "red", string> = {
  green: "bg-teal/15 text-teal",
  yellow: "bg-[#FBB024]/15 text-[#FBB024]",
  red: "bg-red-500/15 text-red-500",
};

function Badge({ tone, children }: { tone: "green" | "yellow" | "red"; children: React.ReactNode }) {
  return (
    <span
      className={`inline-block text-[10px] px-2 py-0.5 rounded-full font-medium ${TONE_STYLES[tone]}`}
    >
      {children}
    </span>
  );
}

export function DashboardMockup() {
  return (
    <section className="relative px-6 pb-24 flex justify-center">
      <FadeUp className="relative max-w-275 w-full">
        <div
          className="absolute -inset-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(79,110,247,0.12) 0%, transparent 70%)",
          }}
        />

        <div
          className="relative rounded-2xl overflow-hidden border border-white/8 bg-navy-light"
          style={{
            boxShadow:
              "0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)",
          }}
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-navy-mid border-b border-white/8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            <div className="flex-1 max-w-75 mx-auto bg-white/5 rounded-md px-3 py-1 text-[12px] text-gray-500 text-center">
              app.riskguardhq.com
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] min-h-105 p-6">
            <div className="hidden md:flex flex-col gap-1 bg-white/2 border-r border-white/8 p-3">
              <div className="flex items-center gap-2 px-2.5 pt-2 pb-4 text-[13px] font-semibold text-white">
                <LogoMark size={22} />
                RiskGuard
              </div>
              {SIDEBAR_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 px-2.5 py-2 rounded-md text-[12px] ${
                    item.active
                      ? "bg-accent/15 text-accent-bright"
                      : "text-gray-500"
                  }`}
                >
                  <span aria-hidden>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 px-6 py-5">
              <div className="flex items-center justify-between mb-1">
                <span className="text-base font-semibold text-white">
                  Risk Dashboard
                </span>
                <div
                  aria-hidden="true"
                  className="text-[11px] bg-accent text-white rounded-md px-3 py-1.5 select-none"
                >
                  + Add Risk
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/3 border border-white/8 rounded-lg p-3"
                  >
                    <div className="text-[10px] text-gray-500 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xl font-semibold text-white">
                      {stat.value}
                    </div>
                    <div className={`text-[10px] mt-0.5 ${stat.subColor}`}>
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white/2 border border-white/8 rounded-lg overflow-hidden">
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr] px-3.5 py-2.5 border-b border-white/8 text-[10px] uppercase tracking-wider text-gray-500">
                  <span>Risk Name</span>
                  <span>Level</span>
                  <span>Framework</span>
                  <span>Status</span>
                </div>
                {RISKS.map((risk) => (
                  <div
                    key={risk.name}
                    className="grid grid-cols-[2fr_1fr_1fr_1fr] px-3.5 py-2.5 border-b border-white/3 text-[11px] text-gray-300 items-center last:border-b-0"
                  >
                    <span>{risk.name}</span>
                    <span>
                      <Badge tone={risk.level.tone}>{risk.level.label}</Badge>
                    </span>
                    <span className="text-gray-500">{risk.framework}</span>
                    <span>
                      <Badge tone={risk.status.tone}>{risk.status.label}</Badge>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
