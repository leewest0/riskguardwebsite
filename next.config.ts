import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Applied to every response across the site
const SECURITY_HEADERS = [
  // Enforce HTTPS for 2 years, include subdomains
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Prevent clickjacking — no iframes from other origins
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Stop browsers guessing MIME types
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Only send origin on cross-origin requests, full URL on same-origin
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Disable browser features we don't use
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // CSP — 'unsafe-inline' required for Next.js hydration scripts and Tailwind inline styles.
  // 'unsafe-eval' added in dev only — React uses eval() for call-stack reconstruction in dev mode.
  // Tighten with nonces in Phase 2 when the app shell is built.
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      "connect-src 'self'",
      "media-src 'none'",
      "object-src 'none'",
      "frame-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
    ];
  },
};

export default nextConfig;
