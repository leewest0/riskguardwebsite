const STATS = [
  {
    value: "6",
    suffix: "+",
    label: "Compliance frameworks supported out of the box",
  },
  {
    value: "99",
    suffix: ".9%",
    label: "Platform uptime — your compliance never sleeps",
  },
  {
    value: "10",
    suffix: "×",
    label: "Faster than spreadsheet-based compliance",
  },
];

export function Stats() {
  return (
    <section className="py-24 px-6 max-w-[1000px] mx-auto text-center">
      <p className="text-xs font-medium text-accent-bright uppercase tracking-[0.1em] mb-4">
        By the numbers
      </p>
      <h2
        className="font-serif text-white mx-auto"
        style={{
          fontSize: "clamp(32px, 5vw, 52px)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}
      >
        Built for teams
        <br />
        that move fast
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/[0.08] mt-15"
        style={{ background: "rgba(255,255,255,0.08)" }}
      >
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-navy py-10 px-8">
            <div
              className="font-serif text-white leading-none mb-2"
              style={{ fontSize: 52 }}
            >
              {stat.value}
              <span className="text-accent-bright">{stat.suffix}</span>
            </div>
            <div className="text-sm text-gray-500 font-light">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
