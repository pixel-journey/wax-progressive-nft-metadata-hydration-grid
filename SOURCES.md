# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io AtomicAssets](https://docs.wax.io/build/tutorials/howto_atomicassets) | Metadata product context |
| [atomicassets-contract](https://github.com/pinknetworkx/atomicassets-contract) | Official contract |
| [deserialize-core](https://github.com/pixel-journey/px-aa-mutable-deserialize-core) | Bytes → fields (different product) |

## Product facts locked by tests

- Missing = key absent **or** `trim()` empty.
- Keys: `^[a-z][a-z0-9_]{0,31}$`, required list length 1..20.
- Nothing is fetched from AtomicAssets or IPFS.
