import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "./FadeUp";
import { FEATURES } from "./featureData";

export function Features() {
  return (
    <section id="features" className="py-24 px-6 max-w-300 mx-auto">
      <p className="text-xs font-medium text-accent-bright uppercase tracking-widest mb-4 text-center">
        Everything you need
      </p>
      <h2
        className="font-serif text-white max-w-150 mx-auto mb-5 text-center"
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
            <Link
              key={f.slug}
              href={`/features/${f.slug}`}
              className="group relative bg-navy hover:bg-navy-light p-9 transition-colors overflow-hidden flex flex-col"
            >
              {/* Accent gradient line on hover */}
              <div
                className="absolute top-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
                }}
              />

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-5 shrink-0"
                style={{
                  background: "rgba(79,110,247,0.15)",
                  border: "1px solid rgba(79,110,247,0.2)",
                }}
              >
                <f.icon size={20} className="text-accent-bright" aria-hidden="true" />
              </div>

              <h3 className="text-[17px] font-semibold text-white mb-3 tracking-tight">
                {f.title}
              </h3>
              <p className="text-[15px] text-gray-400 leading-relaxed font-light flex-1">
                {f.desc}
              </p>

              {/* Learn more indicator */}
              <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent-bright opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowRight size={13} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
