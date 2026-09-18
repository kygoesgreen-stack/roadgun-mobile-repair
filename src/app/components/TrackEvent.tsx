"use client";

import { useEffect } from "react";

// Inlined at build time. Point it at the n8n /events webhook in Cloudflare Pages.
const ENDPOINT = process.env.NEXT_PUBLIC_EVENT_WEBHOOK;

function send(type: "call_click" | "form_submit") {
  if (!ENDPOINT || typeof navigator.sendBeacon !== "function") return;
  try {
    navigator.sendBeacon(
      ENDPOINT,
      JSON.stringify({
        site: "roadgunrepairs.com",
        page: location.pathname,
        type,
        ts: Date.now(),
      })
    );
  } catch {
    // Tracking must never break a call or a form submit.
  }
}

/** Delegated listeners for tel: clicks and ContactForm submits. Mounted once in layout.tsx. */
export default function TrackEvent() {
  useEffect(() => {
    if (!ENDPOINT) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target?.closest?.('a[href^="tel:"]')) send("call_click");
    };
    const onSubmit = (e: SubmitEvent) => {
      const form = e.target as Element | null;
      if (form?.closest?.("#contact")) send("form_submit");
    };

    document.addEventListener("click", onClick, { capture: true });
    document.addEventListener("submit", onSubmit, { capture: true });
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      document.removeEventListener("submit", onSubmit, { capture: true });
    };
  }, []);

  return null;
}
