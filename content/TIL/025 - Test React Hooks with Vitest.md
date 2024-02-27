---
date: 2024-01-25
tag:
  - test
  - react
---

## Install

```sh
ni -D vitest @vitest/ui jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

## Config

```ts title="vite.config.ts"
/// <reference types="vitest" />
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
  },
})
```

```ts title="src/tests/setup.ts"
import { afterEach } from "vitest"
import { cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/vitest"

afterEach(() => {
  cleanup()
})
```

```json title="package.json"
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui"
  }
}
```

## Example

```ts
import { describe, expect, it } from "vitest"
import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import useCounter from "../hooks/use-counter"

describe("useCounter", () => {
  it("should increment", () => {
    const { result } = renderHook(() => useCounter())
    act(() => {
      result.current.inc()
    })
    expect(result.current.count).toBe(1)
  })
})
```

```ts
export interface RenderHookResult<Result, Props> {
  /**
   * Triggers a re-render. The props will be passed to your renderHook callback.
   */
  rerender: (props?: Props) => void
  /**
   * This is a stable reference to the latest value returned by your renderHook
   * callback
   */
  result: {
    /**
     * The value returned by your renderHook callback
     */
    current: Result
  }
  /**
   * Unmounts the test component. This is useful for when you need to test
   * any cleanup your useEffects have.
   */
  unmount: () => void
}
```

## Thanks

- [vitest/examples/react-testing-lib/src](https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/src/hooks/useCounter.test.ts)
- [快速起步 | 指南 | Vitest](https://cn.vitest.dev/guide/)
- [Test API 索引 | Vitest](https://cn.vitest.dev/api/)
- [Example | Testing Library](https://testing-library.com/docs/react-testing-library/example-intro)
