import Image from "next/image";

type Props = {
  size?: number;
  className?: string;
};

export function LogoMark({ size = 32, className = "" }: Props) {
  return (
    <Image
      src="/riskguard-logo.png"
      alt="RiskGuard"
      width={size}
      height={size}
      priority
      className={`object-contain ${className}`}
      style={{ mixBlendMode: "screen" }}
    />
  );
}
