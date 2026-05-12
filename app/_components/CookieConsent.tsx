"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const CONSENT_KEY = "rg-cookie-consent";
// Bump this string whenever new cookie categories are added — forces re-consent
const CONSENT_VERSION = "1.0";
// UK GDPR — ICO recommends refreshing consent at 12 months maximum
const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

interface ConsentData {
  essential: true;
  analytics: boolean;
  savedAt: string;
  version: string;
}

function readConsent(): ConsentData | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentData;
    // Stale consent — new categories have been added since last visit
    if (parsed.version !== CONSENT_VERSION) return null;
    // Expired consent — ICO recommends re-consent after 12 months
    if (Date.now() - new Date(parsed.savedAt).getTime() > CONSENT_MAX_AGE_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

function persistConsent(analytics: boolean): void {
  const data: ConsentData = {
    essential: true,
    analytics,
    savedAt: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(data));
}

export function CookieConsent() {
  // Start true to avoid flashing the banner on returning visitors before localStorage is read
  const [consentGiven, setConsentGiven] = useState(true);
  const [showPanel, setShowPanel] = useState(false);
  const [analyticsToggle, setAnalyticsToggle] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    setConsentGiven(existing !== null);

    // Footer "Cookie Settings" link fires this event to re-open the panel
    const handleOpen = () => {
      const current = readConsent();
      setAnalyticsToggle(current?.analytics ?? false);
      setShowPanel(true);
    };

    window.addEventListener("rg:open-cookie-prefs", handleOpen);
    return () => window.removeEventListener("rg:open-cookie-prefs", handleOpen);
  }, []);

  function acceptAll() {
    persistConsent(true);
    setConsentGiven(true);
    setShowPanel(false);
  }

  function essentialOnly() {
    persistConsent(false);
    setConsentGiven(true);
    setShowPanel(false);
  }

  function savePreferences() {
    persistConsent(analyticsToggle);
    setConsentGiven(true);
    setShowPanel(false);
  }

  function openPanel() {
    const current = readConsent();
    setAnalyticsToggle(current?.analytics ?? false);
    setShowPanel(true);
  }

  const showBanner = !consentGiven;

  // Nothing to render — component stays mounted to keep the event listener active
  if (!showBanner && !showPanel) return null;

  return (
    <>
      {/* Backdrop when panel is open */}
      {showPanel && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowPanel(false)}
          aria-hidden="true"
        />
      )}

      {/* Bottom banner — first visit only, hidden when panel is open */}
      {showBanner && !showPanel && (
        <div
          className="fixed bottom-0 inset-x-0 z-50 border-t border-white/8 px-6 py-5"
          style={{ background: "rgba(10,15,30,0.97)" }}
          role="region"
          aria-label="Cookie consent"
        >
          <div className="max-w-300 mx-auto flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white mb-1">We use cookies</p>
              <p className="text-[13px] text-gray-400 leading-relaxed">
                Essential cookies keep the site running. With your consent, we&apos;d also
                like to use analytics cookies to understand how visitors use RiskGuard.{" "}
                <Link href="/privacy" className="text-accent-bright hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {/* Both buttons same size and padding — equal visual prominence per ICO guidance */}
              <button
                onClick={essentialOnly}
                className="text-sm font-medium text-white border border-white/20 rounded-lg px-5 py-2.5 hover:bg-white/5 transition-colors"
              >
                Essential Only
              </button>
              <button
                onClick={acceptAll}
                className="text-sm font-medium text-white bg-accent hover:bg-accent-bright border border-transparent rounded-lg px-5 py-2.5 transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={openPanel}
                className="text-[13px] text-gray-400 hover:text-white transition-colors"
              >
                Manage preferences
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preferences panel — accessible from banner and from footer Cookie Settings link */}
      {showPanel && (
        <div
          className="fixed bottom-0 inset-x-0 z-50 border-t border-white/8 rounded-t-2xl"
          style={{ background: "rgba(10,15,30,0.99)" }}
          role="dialog"
          aria-label="Cookie preferences"
          aria-modal="true"
        >
          <div className="max-w-150 mx-auto px-6 py-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-base font-semibold text-white">Cookie Preferences</h2>
              <button
                onClick={() => setShowPanel(false)}
                className="text-gray-500 hover:text-white transition-colors p-1 -mr-1"
                aria-label="Close preferences panel"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-[13px] text-gray-400 leading-relaxed mb-2">
              Choose which cookies you&apos;re happy for us to use. You can update these
              at any time via the Cookie Settings link in the footer.
            </p>

            {/* Essential — locked on */}
            <div className="flex items-start justify-between gap-6 py-5 border-t border-white/8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-white">Essential</span>
                  <span className="text-[11px] text-gray-500 bg-white/5 border border-white/8 rounded-full px-2 py-0.5">
                    Always on
                  </span>
                </div>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  Required for the site to function correctly. Covers security and basic
                  session continuity. Cannot be disabled.
                </p>
              </div>
              {/* Visually locked toggle */}
              <div
                className="shrink-0 mt-0.5 w-10 h-6 rounded-full flex items-center px-1 opacity-50 cursor-not-allowed"
                style={{ background: "var(--color-accent)" }}
                aria-label="Essential cookies are always enabled"
                aria-hidden="true"
              >
                <span className="w-4 h-4 rounded-full bg-white block ml-auto" />
              </div>
            </div>

            {/* Analytics — user-controlled */}
            <div className="flex items-start justify-between gap-6 py-5 border-t border-white/8">
              <div className="flex-1">
                <span className="text-sm font-medium text-white block mb-1">Analytics</span>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  Helps us understand how visitors use the site so we can improve it.
                  No personal data is sold or shared with third parties.
                </p>
              </div>
              <button
                role="switch"
                aria-checked={analyticsToggle}
                aria-label="Toggle analytics cookies"
                onClick={() => setAnalyticsToggle((v) => !v)}
                className="shrink-0 mt-0.5 w-10 h-6 rounded-full flex items-center px-1 transition-colors"
                style={{
                  background: analyticsToggle
                    ? "var(--color-accent)"
                    : "rgba(255,255,255,0.1)",
                }}
              >
                <span
                  className="w-4 h-4 rounded-full bg-white block transition-transform duration-200"
                  style={{
                    transform: analyticsToggle ? "translateX(16px)" : "translateX(0)",
                  }}
                />
              </button>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-5 border-t border-white/8 mt-2">
              <button
                onClick={savePreferences}
                className="flex-1 sm:flex-none text-sm font-medium text-white border border-white/20 rounded-lg px-5 py-2.5 hover:bg-white/5 transition-colors"
              >
                Save Preferences
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 sm:flex-none text-sm font-medium text-white bg-accent hover:bg-accent-bright border border-transparent rounded-lg px-5 py-2.5 transition-colors"
              >
                Accept All
              </button>
            </div>

            <p className="text-[12px] text-gray-600 mt-4">
              <Link href="/privacy" className="hover:text-gray-400 transition-colors">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
