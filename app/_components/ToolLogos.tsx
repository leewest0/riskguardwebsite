import { FadeUp } from "./FadeUp";
import {
  SiGithub,
  SiSlack,
  SiJira,
  SiNotion,
  SiVercel,
  SiFigma,
  SiLinear,
  SiDocker,
} from "react-icons/si";
import type { IconType } from "react-icons";

/* Tools shown in the social proof strip.
   These are tools the target ICP (startup engineering teams) use daily —
   showing them signals that RiskGuard fits into the stack they already run. */
const TOOLS: { name: string; icon: IconType }[] = [
  { name: "GitHub", icon: SiGithub },
  { name: "Slack", icon: SiSlack },
  { name: "Jira", icon: SiJira },
  { name: "Notion", icon: SiNotion },
  { name: "Vercel", icon: SiVercel },
  { name: "Figma", icon: SiFigma },
  { name: "Linear", icon: SiLinear },
  { name: "Docker", icon: SiDocker },
];

export function ToolLogos() {
  return (
    <section className="py-16 px-6 border-y border-white/8 text-center">
      <FadeUp>
        <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-10">
          Built for the teams already using
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
          {TOOLS.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 opacity-40 hover:opacity-80 transition-opacity"
            >
              {/* aria-hidden: purely decorative brand icons, name in visible text below */}
              <Icon size={28} className="text-white" aria-hidden="true" />
              <span className="text-[11px] text-gray-500 font-light">{name}</span>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
