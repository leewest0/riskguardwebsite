import Image from "next/image";
import { FadeUp } from "./FadeUp";

export function DashboardMockup() {
  return (
    <section className="relative px-6 pb-24 flex justify-center">
      <FadeUp className="relative max-w-275 w-full">
        {/* Accent glow behind the mockup */}
        <div
          className="absolute -inset-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(79,110,247,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Browser chrome + screenshot */}
        <div
          className="relative rounded-2xl overflow-hidden border border-white/8 bg-navy-light"
          style={{
            boxShadow:
              "0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)",
          }}
        >
          {/* Browser title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-navy-mid border-b border-white/8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            <div className="flex-1 max-w-75 mx-auto bg-white/5 rounded-md px-3 py-1 text-[12px] text-gray-500 text-center">
              app.riskguardhq.com
            </div>
          </div>

          {/* Dashboard screenshot */}
          <Image
            src="/riskGuard-image.png"
            alt="RiskGuard dashboard"
            width={1440}
            height={900}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </div>
      </FadeUp>
    </section>
  );
}
