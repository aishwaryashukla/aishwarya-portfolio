"use client";

import { useSyncExternalStore } from "react";

import { site } from "@/content/site";

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: site.timeZone,
  hour: "numeric",
  minute: "2-digit",
});

function subscribe(callback: () => void) {
  const id = window.setInterval(callback, 10_000);
  return () => window.clearInterval(id);
}

// Snapshot changes once per minute, so re-renders only happen when the clock does.
const currentMinute = () => Math.floor(Date.now() / 60_000);

/** Live local time in Hong Kong. Renders nothing on the server to avoid stale, prerendered times. */
export default function LocalTime() {
  const minute = useSyncExternalStore(subscribe, currentMinute, () => null);
  if (minute === null) return <span aria-hidden="true">&nbsp;</span>;

  return (
    <time dateTime={new Date(minute * 60_000).toISOString()}>
      {formatter.format(minute * 60_000)} {site.timeZoneLabel}
    </time>
  );
}
