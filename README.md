# A blank field is missing

**Trust label:** `educational-reference`  
**Catalog:** `wax-ecosystem-blueprint-catalog` (private index; not this public course)

image made of spaces is missing. name is kept. Nothing is fetched. Blank means the string is missing or only whitespace. This is not an AtomicAssets assets call, and it does not know schema formats.

The earlier README described a live product. This tree does not ship that.

## What is actually in the repo

| Piece | Role |
| --- | --- |
| `src/hydrate.ts` | The pure rules |
| `src/hydrate.test.ts` | The claims in the verification log |
| `src/usecases.ts` | HTTP requests, built and not sent |
| `src/Demo.tsx` | Offline page |

The course is [EDUCATION.md](EDUCATION.md). `npm test` runs the rules. `npm run dev` opens the page.

## Queries

`executed` is false. This repo did not call any host. No transaction is invented.
