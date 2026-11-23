# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io AtomicAssets](https://docs.wax.io/build/tutorials/howto_atomicassets) | Metadata product context |
| [atomicassets-contract](https://github.com/pinknetworkx/atomicassets-contract) | Official contract |
| [schema explorer](https://github.com/pixel-journey/wax-atomic-template-and-schema-explorer) | Format validation (different product) |
| [deserialize-core](https://github.com/pixel-journey/px-aa-mutable-deserialize-core) | Bytes → fields (different product) |
| [atomic-knowledge](https://github.com/atomicassets/atomic-knowledge) | Network before live AA reads |
| [wharfkit/skill](https://github.com/wharfkit/skill) | SessionKit if a host later writes metadata |

```bash
git clone https://github.com/wharfkit/skill.git ~/.claude/skills/wharfkit
```

## Product facts locked by tests

- Missing = key absent **or** `trim()` empty.
- Image made of spaces is missing. Name is kept when present.
- Keys: `^[a-z][a-z0-9_]{0,31}$`, required list length 1..20.
- Nothing is fetched from AtomicAssets or IPFS.
- Usecases stay `executed: false`.

## Portability

Blank/whitespace rules port. Schema formats and indexer URLs are chain-local.

## Suggested topics

`antelope` `education` `pixel-journey` `nft` `wax`
