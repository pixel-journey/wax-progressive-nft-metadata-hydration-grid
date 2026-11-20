# Security — metadata presence check

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Absent key | listed as missing |
| Whitespace-only value | listed as missing |
| Bad key charset / empty required list | refused by key rules |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Network | Host must fetch; this lab does not |
| XSS from image URLs | Validate before rendering |
| Schema authenticity | Not a template proof |

## Attack angles

1. Shipping space-padded "images" as complete.  
2. Claiming IPFS hydration from this pure function.

## Honesty limits

No network. No wasm. [docs.wax.io AtomicAssets](https://docs.wax.io/build/tutorials/howto_atomicassets) · [deserialize-core](https://github.com/pixel-journey/px-aa-mutable-deserialize-core).
