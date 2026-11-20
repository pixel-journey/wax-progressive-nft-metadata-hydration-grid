# Education — a blank field is missing

> **Rung:** `npm test` passes. The object is an argument. Nothing is fetched from AtomicAssets or IPFS.  
> **The test is the rule.** How mutable bytes become fields is [px-aa-mutable-deserialize-core](https://github.com/pixel-journey/px-aa-mutable-deserialize-core). This file does not deserialize anything.

Official context: [docs.wax.io How-To AtomicAssets](https://docs.wax.io/build/tutorials/howto_atomicassets) · [pinknetworkx/atomicassets-contract](https://github.com/pinknetworkx/atomicassets-contract).

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Treat whitespace as missing |
| Intermediate | Enforce key shape and 1..20 required keys |
| Masterclass | Refuse to call this an IPFS load |

---

## Beginner — one scene

A key is missing when it is absent or when `trim()` is empty. Whitespace is blank.

| Call | Locked result |
| --- | --- |
| `name: "Oak"`, `image: "  "` | missing `["image"]` |
| `name: "Oak"` and `image` required but absent | missing `["image"]` |
| `name: "Oak"` and only `name` required | missing `[]` |

```bash
npm test
```

---

## Intermediate

| Rule | Detail |
| --- | --- |
| Key shape | `^[a-z][a-z0-9_]{0,31}$` |
| Required list | 1 to 20 keys |
| Value | string; after trim, empty means missing |

A blank is not a fetched image. Progressive UI can still show a skeleton for missing keys without claiming the network failed.

---

## Masterclass

### Common mistakes

1. Treating spaces as a valid image URL.  
2. Fetching IPFS inside the pure missing-key helper.  
3. Confusing this with mutable deserialize (bytes → fields).

### Exercises

1. `image: "   "` with required image — missing? (Yes.)  
2. Max required keys? (20.)  
3. Does this call AtomicAssets? (No.)

---

## What this course will not teach

- IPFS / HTTP image loading
- Schema validation of template formats
- Unbox actions (unsent examples only)
