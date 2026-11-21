# Security — metadata presence check

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Absent key | listed as missing |
| Whitespace-only value | listed as missing (`trim()` empty) |
| Bad key charset | refused (`^[a-z][a-z0-9_]{0,31}$`) |
| Empty required list | refused |
| More than **20** required keys | refused |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Network / IPFS | Host must fetch; this lab does not |
| XSS from image URLs | Validate and sandbox before rendering |
| Schema authenticity | Not a template or collection proof |
| Mutable vs immutable fields | Presence only — deserialize is a sibling product |

## Attack angles

1. Shipping space-padded "images" as complete metadata.  
2. Claiming IPFS hydration from this pure function.  
3. Treating missing-key lists as proof the asset is invalid on-chain.  
4. Loading 21+ required keys and calling the failure a network error.  
5. Confusing this with [deserialize-core](https://github.com/pixel-journey/px-aa-mutable-deserialize-core) (bytes → fields).

## Honesty limits

No network. No wasm. No AtomicAssets RPC.

| Sibling | Distinction |
| --- | --- |
| [deserialize-core](https://github.com/pixel-journey/px-aa-mutable-deserialize-core) | Mutable bytes → fields |
| [3D explorer](https://github.com/pixel-journey/wax-immersive-3d-nft-explorer) | Layout only |
| [locale dictionary](https://github.com/pixel-journey/wax-localized-language-metadata-dictionary) | Locale fallback |

[docs.wax.io AtomicAssets](https://docs.wax.io/build/tutorials/howto_atomicassets) · [atomicassets-contract](https://github.com/pinknetworkx/atomicassets-contract).
