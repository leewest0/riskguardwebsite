"use client";

// Fires a custom event that CookieConsent.tsx listens for — opens the preferences panel.
// Kept as a separate client component so Footer.tsx can stay a server component.
export function CookieSettingsLink() {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("rg:open-cookie-prefs"))}
      className="text-[13px] text-gray-500 hover:text-gray-300 transition-colors"
    >
      Cookie Settings
    </button>
  );
}
