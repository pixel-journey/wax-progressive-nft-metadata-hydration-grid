# wax-progressive-nft-metadata-hydration-grid

> **Trust label:** `educational-reference`  
> **Status:** Course-format upgrade (2026-11-26)  
> **Catalog:** `wax-ecosystem-blueprint-catalog` (private index; not this public course)

**One-sentence goal:** Teach which required metadata keys are **absent or blank** — whitespace counts as missing — without fetching AtomicAssets or IPFS.

## Locked scene

| Have | Required | Result |
| --- | --- | --- |
| `name: "Oak"`, `image: "  "` | name, image | missing `["image"]` |
| `name: "Oak"` only | name, image | missing `["image"]` |
| `name: "Oak"` | name | missing `[]` |

```ts
import { missing } from "./src/hydrate";
missing(["name", "image"], { name: "Oak", image: "  " });
// { ok: true, missing: ["image"] }
```

## What is actually in the repo

| Piece | Role |
| --- | --- |
| `src/hydrate.ts` | Pure blank-field check |
| `src/hydrate.test.ts` | Locked claims (key shape, 1..20, blanks) |
| `src/usecases.ts` | HTTP shapes built and not sent |
| `src/Demo.tsx` | Offline page |
| [EDUCATION.md](EDUCATION.md) | Beginner → Intermediate → Masterclass course |

## Quick start

```bash
npm install
npm test
npm run dev
```

## Rules (locked)

| Rule | Detail |
| --- | --- |
| Key shape | `^[a-z][a-z0-9_]{0,31}$` |
| Required list | 1 to 20 keys; no duplicates |
| Blank | absent key or `trim() === ""` |

## Boundaries

- Nothing is fetched from AtomicAssets, IPFS, or HTTP
- Not schema validation of template formats
- Progressive UI can skeleton missing keys without claiming network failure

## Related

- [px-aa-mutable-deserialize-core](https://github.com/pixel-journey/px-aa-mutable-deserialize-core) — bytes → fields
- [docs.wax.io How-To AtomicAssets](https://docs.wax.io/build/tutorials/howto_atomicassets)

## License

MIT — Pixel Journey
