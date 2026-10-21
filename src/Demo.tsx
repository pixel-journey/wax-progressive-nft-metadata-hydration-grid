"use client";

import { missing } from "./hydrate";

export function Demo() {
  const gap = missing(["name", "image"], { name: "Oak", image: "  " });
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>A blank image is missing</h1>
      <p className="lede">name is Oak. image is only spaces, so it counts as missing. Nothing was fetched.</p>
      {gap.ok ? <p>Missing: {gap.missing.join(", ") || "none"}.</p> : <p>{gap.reason}</p>}
    </main>
  );
}
