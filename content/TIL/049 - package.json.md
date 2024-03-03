---
date: 2024-02-18
tags:
  - til
  - npm
---

## name, version

No need to say more.

## exports

`exports` define the public API for your library.

- Defines what can and cannot be imported from your library, and what the name of it is. If it's not listed in `exports`, then developers cannot `import`/`require` it. In other words, it acts like a public API for users of your library and helps define what is public and what is internal
- Allows you to change which file is imported based on conditions (that you can define), such as "Was the file `import`ed or `require`d?

One example that covers the most common use-cases: 

```json
{
  "exports": {
    ".": {
      "module": "./dist/index.mjs",
      "import": {
        "types": "./dist/index.d.mts",
        "default": "./dist/index.mjs"
      },
      "require": {
        "types": "./dist/index.d.cts",
        "default": "./dist/index.cjs"
      },
      "default": "./dist/index.mjs"
    },
    "./package.json": "./package.json"
  },
  "types": "./dist/index.d.ts"
}
```

- `"."` indicates the default entry for your package
- The resolution happens from **top to bottom** and stops as soon as a matching field is found; the order of entries is very important
- The `module` field is an "unofficial" field that is supported by bundlers like Webpack and Rollup. It should come before `import` and `require`, and point to an `esm`-only bundle -- which can be the same as your original `esm` bundle if it's purely `esm`. As noted in the [formats section](https://github.com/frehner/modern-guide-to-packaging-js-library#output-to-esm-cjs-and-umd-formats), it is meant to help bundlers only include one copy of your library, no matter if it was `import`ed or `require`ed. For a deeper dive and the reasoning behind this decision, you can read more [here](https://github.com/webpack/webpack/issues/11014#issuecomment-641550630), [here](https://github.com/webpack/webpack/issues/11014#issuecomment-643256943), and [here](https://github.com/rollup/plugins/pull/540#issuecomment-692078443)
- The `import` field is for when someone `import`s your library
- The `require` field is for when someone `require`s your library
- The `default` field is used as a fallback for if none of the conditions match

If a bundler or environment understands the `exports` field, then the `package.json`'s top-level [main](https://github.com/frehner/modern-guide-to-packaging-js-library#set-the-main-field), [types](https://github.com/frehner/modern-guide-to-packaging-js-library#set-the-types-field), [module](https://github.com/frehner/modern-guide-to-packaging-js-library#set-the-module-field), and [browser](https://github.com/frehner/modern-guide-to-packaging-js-library#set-the-browser-field) fields are ignored, as `exports` supersedes those fields.

- `main` defines the CommonJS entry
- `module` defines the ESM entry
- `types` defines the TypeScript types
## files

The [`files`](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#files) field indicates to the `npm` CLI which files and folders to include when you package your library to be put on NPM's package registry.

For example, if you transform your code from TypeScript into JavaScript, you probably don't want to include the TypeScript source code in your NPM package. (Instead, you should include [sourcemaps](https://github.com/frehner/modern-guide-to-packaging-js-library#create-sourcemaps))

## sideEffects

`sideEffects` can either be set to `false` to indicate that none of your modules have side effects, or an array of strings to list which files have side effects.

Much a like creating a [pure function](https://en.wikipedia.org/wiki/Pure_function) can bring benefits, creating a "pure module" enables certain benefits as well; bundlers can do a much better job of tree shaking your library.

## peerDependencies

If you rely on another framework or library, set it as a peer dependency.

## Example

```json
{
  "sideEffects": false,
  "exports": {
    ".": {
      "import": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.js"
      },
      "require": {
        "types": "./dist/index.d.cts",
        "default": "./dist/index.cjs"
      }
    }
  },
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "typesVersions": {
    "*": {
      "*": ["./dist/*", "./dist/index.d.ts"]
    }
  },
  "files": ["dist"]
}
```

## Thanks

- [frehner/modern-guide-to-packaging-js-library](https://github.com/frehner/modern-guide-to-packaging-js-library)