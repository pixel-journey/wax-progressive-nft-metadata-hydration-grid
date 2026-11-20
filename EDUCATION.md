# Education — a blank field is missing

> **Rung:** `npm test` passes. The object is an argument. Nothing is fetched from AtomicAssets or IPFS.  
> **The test is the rule.** How mutable bytes become fields is [px-aa-mutable-deserialize-core](https://github.com/pixel-journey/px-aa-mutable-deserialize-core). This file does not deserialize anything.

## Predict, then run

A key is missing when it is absent or when `trim()` is empty. Whitespace is blank.

| Call | Locked result |
| --- | --- |
| `name: "Oak"`, `image: "  "` | missing `["image"]` |
| `name: "Oak"` and `image` required but absent | missing `["image"]` |
| `name: "Oak"` and only `name` required | missing `[]` |

Keys must match `^[a-z][a-z0-9_]{0,31}$`. One to twenty keys. A blank is not a fetched image.

The HTTP examples include an Atomic Packs `unboxassets` row. That request is unsent, and it is not this check.
