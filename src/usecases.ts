import { ATOMIC_ORIGIN } from "./api";
import { missing } from "./hydrate";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const gap = missing(["name", "image"], { name: "Oak", image: "  " });
if (!gap.ok) throw new Error(gap.reason);
const fields = gap;

export const USE_CASES: UseCase[] = [
  {
    title: "A template read is not this object",
    detail: `image is blank, so missing is ${fields.missing.join(", ")}. The template request is not sent.`,
    request: { method: "GET", url: `${ATOMIC_ORIGIN}/atomicassets/v1/templates/pixeljourney/1`, executed: false },
    transaction: null,
  },
  {
    title: "One asset is still not merged in",
    detail: "Blank strings count as missing. No mutable-data update is built.",
    request: { method: "GET", url: `${ATOMIC_ORIGIN}/atomicassets/v1/assets/1`, executed: false },
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (fields.missing.join() !== "image") throw new Error(fields.missing.join());
}
