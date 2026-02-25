"use client";

import { useEffect } from "react";

export default function ReferralPage() {
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data.height) {
        const iframe = document.getElementById("waitlist-IqtD") as HTMLIFrameElement | null;
        if (iframe) iframe.style.height = event.data.height + "px";
      }
    }
    window.addEventListener("message", handleMessage);

    const urlParams = new URLSearchParams(window.location.search);
    const m = urlParams.get("m");
    const verify = urlParams.get("verify");

    if (m || verify) {
      const iframe = document.getElementById("waitlist-IqtD") as HTMLIFrameElement | null;
      if (iframe) {
        const src = new URL(iframe.src);
        if (m) src.searchParams.set("m", m);
        if (verify) src.searchParams.set("verify", verify);
        iframe.src = src.toString();
      }
    }

    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <iframe
      id="waitlist-IqtD"
      src="https://wt.ls/embed/me/6fa986a0-cf25-40de-8582-cd2eab580633?transparent=false&confetti=true&fullpage=true&parentReferrer="
      style={{ width: "100%", border: "none", minHeight: "100vh", display: "block" }}
      allow="web-share; clipboard-read; clipboard-write *"
      width="100%"
      seamless
    />
  );
}
