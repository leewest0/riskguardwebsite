type Props = {
  size?: number;
  glow?: boolean;
  className?: string;
};

export function LogoMark({ size = 32, glow = true, className = "" }: Props) {
  const fontSize = Math.round(size * 0.5);
  return (
    <div
      className={`flex items-center justify-center rounded-lg bg-accent font-bold text-white ${className}`}
      style={{
        width: size,
        height: size,
        fontSize,
        boxShadow: glow ? "0 0 20px rgba(79,110,247,0.4)" : "none",
      }}
    >
      R
    </div>
  );
}
