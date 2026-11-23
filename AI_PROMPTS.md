# AI handoff — progressive NFT metadata hydration

## Non-negotiables

1. Blank means the string is **missing or only whitespace**.
2. Image made of spaces is **missing**. Name is kept when present.
3. **Nothing is fetched.** Not an AtomicAssets assets call. Does not know schema formats.
4. Usecases build HTTP requests with `executed: false`.
5. Earlier README product claims are **not** what this tree ships.

## Prompt seeds

- "Whitespace-only image field — missing or present?"
- "Refuse claiming a live AtomicAssets row was hydrated."
- "Contrast with schema explorer format validation (different product)."

## Do not

- Fetch metadata in unit tests.
- Treat whitespace as a valid image URL.
- Invent schema format checks here.
