"use client";

import { useEffect, useState } from "react";

interface ObfuscatedEmailProps {
  /** Local part — everything before the @ */
  user: string;
  /** Domain part — everything after the @ */
  domain: string;
  className?: string;
  style?: React.CSSProperties;
  /** Override link text. Defaults to the assembled address. */
  children?: React.ReactNode;
}

/**
 * Assembles the email address only in the browser — the SSR HTML never
 * contains a complete address, reducing exposure to harvesting bots.
 */
export function ObfuscatedEmail({
  user,
  domain,
  className,
  style,
  children,
}: ObfuscatedEmailProps) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(`${user}@${domain}`);
  }, [user, domain]);

  // SSR / pre-hydration: render an inert placeholder with no address
  if (!email) {
    return (
      <span className={className} style={style} aria-hidden="true">
        {children ?? ""}
      </span>
    );
  }

  return (
    <a href={`mailto:${email}`} className={className} style={style}>
      {children ?? email}
    </a>
  );
}
