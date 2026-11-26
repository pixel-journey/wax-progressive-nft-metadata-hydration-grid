# Architecture — blank-field missing keys

## Pure core

`missing(required, have)` lives in `src/hydrate.ts`.

```
required: 1..20 keys matching ^[a-z][a-z0-9_]{0,31}$
          no duplicates
have:     Record<string, string>

for each required key:
  value missing or trim empty → list it

return { ok: true, missing: string[] }
     or { ok: false, reason }
```

## What is not in the tree

- IPFS / HTTP image loading
- AtomicAssets RPC or template schema validation
- Mutable attribute deserialize (see `px-aa-mutable-deserialize-core`)
- Transaction broadcast

## UI

`Demo.tsx` is an offline illustration. It does not open a socket and it does not sign.

## Verification

`npm test` locks whitespace-as-missing, key shape refusals, 0/21 key lists, and duplicate keys.
