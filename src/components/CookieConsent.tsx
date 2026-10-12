import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

/**
 * Turn on only when an analytics/marketing tool is added to the site.
 * While false, no banner is shown and nothing optional is loaded.
 */
export const OPTIONAL_TRACKING_ENABLED = false;

const STORAGE_KEY = "ct-cookie-consent";
type Choice = "accepted" | "rejected";

export function getConsent(): Choice | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === "accepted" || v === "rejected" ? v : null;
}

/** Load optional scripts only through this helper, after consent. */
export function hasTrackingConsent() {
  return OPTIONAL_TRACKING_ENABLED && getConsent() === "accepted";
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (OPTIONAL_TRACKING_ENABLED && getConsent() === null) setOpen(true);
  }, []);

  if (!open) return null;

  function choose(choice: Choice) {
    window.localStorage.setItem(STORAGE_KEY, choice);
    setOpen(false);
  }

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-md border border-border bg-background p-6 shadow-lg"
    >
      <p id="cookie-title" className="font-display text-xl">
        Cookies
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        Usamos cookies de estatística apenas se aceitar. Saiba mais na{" "}
        <Link to="/cookies" className="text-primary underline underline-offset-4">
          Política de Cookies
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => choose("rejected")}
          className="min-h-11 flex-1 rounded-md border border-foreground/25 px-4 text-sm uppercase tracking-widest"
        >
          Recusar
        </button>
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="min-h-11 flex-1 rounded-md bg-primary px-4 text-sm uppercase tracking-widest text-primary-foreground"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
