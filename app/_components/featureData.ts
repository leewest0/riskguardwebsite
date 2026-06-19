import {
  Bell,
  BookOpen,
  Bot,
  CheckSquare,
  ClipboardList,
  FileBarChart,
  FolderLock,
  LayoutDashboard,
  UserCog,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface FeatureSummary {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  desc: string;
  bullets: string[];
}

// Single source of truth for all feature metadata.
// Used by the homepage Features grid, the /features index page, and each detail page.
export const FEATURES: FeatureSummary[] = [
  {
    slug: "dashboard",
    icon: LayoutDashboard,
    title: "Dashboard",
    tagline: "Your entire compliance posture. At a glance.",
    desc: "A real-time command centre for your GRC programme. See total risks, open findings, audit progress, and compliance scores the moment you log in — no digging required.",
    bullets: [
      "Live compliance score across all active frameworks",
      "Risk summary: total, high, open, and overdue — in one view",
      "Interactive Recharts-based visualisations for trends and status breakdowns",
      "Recent activity feed — see exactly what changed and when",
    ],
  },
  {
    slug: "risk-register",
    icon: ClipboardList,
    title: "Risk Register",
    tagline: "Know every risk. Own every outcome.",
    desc: "Document, score, and track every risk with automated likelihood and impact scoring. Assign owners and monitor remediation progress in real time.",
    bullets: [
      "Full lifecycle: Identified → Assessed → Mitigating → Monitoring → Resolved → Closed",
      "AI-powered likelihood × impact scoring with residual risk estimation",
      "Risk-to-controls mapping — link any controls directly to each risk",
      "Assign owners, set due dates, and track accountability end to end",
    ],
  },
  {
    slug: "controls-library",
    icon: CheckSquare,
    title: "Controls Library",
    tagline: "401 controls. 6 frameworks. Zero duplication.",
    desc: "Pre-built controls mapped to ISO 27001, SOC 2, NIST, PCI DSS, GDPR, and HIPAA. One control covers every framework it belongs to — write it once.",
    bullets: [
      "401 TrusTrak-managed platform controls across 6 frameworks",
      "Cross-framework mapping — see which frameworks each control satisfies simultaneously",
      "4 control types: Preventive, Detective, Corrective, Compensating",
      "Bulk import existing controls via CSV; add unlimited custom controls",
    ],
  },
  {
    slug: "evidence-locker",
    icon: FolderLock,
    title: "Evidence Locker",
    tagline: "Tamper-evident proof. Every file.",
    desc: "Secure file storage with SHA-256 integrity verification. Every piece of audit evidence is hashed on upload and verified on every download.",
    bullets: [
      "SHA-256 hash generated and stored on every upload",
      "Visual integrity badges: Verified, Modified, or Corrupted",
      "Signed URLs — temporary, expiring links for secure auditor sharing",
      "Row-level security — only authorised users can access evidence",
    ],
  },
  {
    slug: "ai-advisor",
    icon: Bot,
    title: "AI Advisor",
    tagline: "Your compliance team — powered by AI.",
    desc: "Ask anything about your compliance posture. Powered by Claude — reads your own risks, controls, and evidence to give real, contextual guidance.",
    bullets: [
      "One-click risk creation from a plain English description",
      "Per-risk AI insights: inherent score, residual score, key next actions",
      "Bulk-answer security questionnaires from your own document knowledge base",
      "Streaming compliance chat — ask anything, get answers grounded in your data",
    ],
  },
  {
    slug: "auditor-portal",
    icon: Users,
    title: "External Auditor Portal",
    tagline: "Give auditors exactly what they need. Nothing more.",
    desc: "Time-limited, OTP-verified access portals for external auditors. Scoped, secure, fully logged — and revocable the moment you choose.",
    bullets: [
      "Time-limited JWT tokens with configurable expiry",
      "OTP email verification before any access is granted",
      "Read-only evidence and audit visibility — no system access",
      "Every view and download logged with auditor email and timestamp",
    ],
  },
  {
    slug: "audit-reports",
    icon: FileBarChart,
    title: "PDF Audit Reports",
    tagline: "Board-ready reports. One click.",
    desc: "Ten-section executive reports generated from your live compliance data — AI executive summary, compliance scores, priority findings, and a corrective action plan.",
    bullets: [
      "AI-written executive summary generated from live audit data",
      "Compliance score gauge with per-framework and per-category breakdowns",
      "Priority findings — critical non-compliant controls surfaced separately",
      "Corrective Action Plan satisfying ISO 27001 Clause 10.1",
    ],
  },
  {
    slug: "document-centre",
    icon: BookOpen,
    title: "Document Centre",
    tagline: "All your policies. One searchable library.",
    desc: "A centralised library for every policy, procedure, and evidence certificate your compliance programme depends on — with AI-powered full-text search built in.",
    bullets: [
      "Bulk multi-file upload with per-file name editing and live progress indicators",
      "Supported formats: PDF, DOCX, TXT, Markdown",
      "Text extracted at upload and indexed for AI search — scanned PDFs flagged, not failed",
      "AI search status per document: Searchable, Limited, No text, or Pending",
    ],
  },
  {
    slug: "user-management",
    icon: UserCog,
    title: "User Management",
    tagline: "The right access for the right people.",
    desc: "Invite-only onboarding with a 6-role RBAC system. Every user gets exactly the access their role requires — no more, no less.",
    bullets: [
      "6 roles: Admin, Auditor, Risk Owner, Member, Viewer, External Auditor",
      "Invite-only — no open registration; users join via email link and set their own password",
      "Last login tracking and full user lifecycle management including deletion",
      "Row-level security enforced at the database layer for every role",
    ],
  },
  {
    slug: "notifications",
    icon: Bell,
    title: "Notifications & Alerts",
    tagline: "Know what needs attention. Before your auditor does.",
    desc: "Automated alerts keep your team on top of every risk, audit, and deadline — so nothing falls through the cracks between compliance cycles.",
    bullets: [
      "Instant alerts: risk created, assigned, level changed, status updated",
      "Overdue remediation cron — daily 9 AM digest of tasks past their due date",
      "Audit lifecycle alerts: assigned, completed, and compliance reminders",
      "Manual reminder buttons on any risk or audit for ad-hoc nudges",
    ],
  },
];
