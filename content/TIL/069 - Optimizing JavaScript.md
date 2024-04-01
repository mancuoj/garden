---
date: 2024-03-09
tags:
  - til
  - js
---

I often feel like javascript code in general runs much slower than it could, simply because it’s not optimized properly.

- Avoid work - like memoization, laziness and incremental computation
- Avoid string comparisons
- Avoid different shapes - monomorphic
- Avoid array/object methods - imprative > functional
- Avoid indirection - direct access > proxy access
- Avoid cache misses - sequential > random
- Avoid large objects - direct access > `[]` access
- Use eval
- Use strings, carefully - concatenation > mutation
- Use specialization
- Data structures
- Benchmarking
  - Start with the top
  - Avoid micro-benchmarks
  - Doubt your results
  - Pick your target

## Thanks

- [optimizing-javascript](https://romgrk.com/posts/optimizing-javascript)
