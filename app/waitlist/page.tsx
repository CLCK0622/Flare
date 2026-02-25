"use client";

import { useEffect } from "react";

export default function WaitlistPage() {
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data.height) {
        const iframe = document.getElementById("waitlist-jmGq") as HTMLIFrameElement | null;
        if (iframe) iframe.style.height = event.data.height + "px";
      }
    }
    window.addEventListener("message", handleMessage);

    const urlParams = new URLSearchParams(window.location.search);
    const r = urlParams.get("r");
    if (r) {
      const iframe = document.getElementById("waitlist-jmGq") as HTMLIFrameElement | null;
      if (iframe) {
        const src = new URL(iframe.src);
        src.searchParams.set("r", r);
        iframe.src = src.toString();
      }
    }

    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <iframe
      id="waitlist-jmGq"
      src="https://wt.ls/embed/6fa986a0-cf25-40de-8582-cd2eab580633?transparent=false&fullpage=true&parentReferrer="
      style={{ width: "100%", border: "none", minHeight: "100vh", display: "block" }}
      allow="web-share; clipboard-read; clipboard-write *"
      width="100%"
      seamless
    />
  );
}
