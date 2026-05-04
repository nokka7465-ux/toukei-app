"use client";

import { useEffect, useRef } from "react";

type AdUnitProps = {
  slot: string;
  format?: "auto" | "fluid" | "rectangle";
  layout?: string;
  layoutKey?: string;
  className?: string;
  style?: React.CSSProperties;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdUnit({
  slot,
  format = "auto",
  layout,
  layoutKey,
  className = "my-8 block",
  style,
}: AdUnitProps) {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const ref = useRef<HTMLModElement | null>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (!clientId || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // adsbygoogle may not be loaded yet (e.g. ad blockers); silently ignore
    }
  }, [clientId]);

  if (!clientId) return null;

  return (
    <ins
      ref={ref}
      className={`adsbygoogle ${className}`}
      style={{ display: "block", ...style }}
      data-ad-client={clientId}
      data-ad-slot={slot}
      data-ad-format={format}
      data-ad-layout={layout}
      data-ad-layout-key={layoutKey}
      data-full-width-responsive="true"
    />
  );
}
