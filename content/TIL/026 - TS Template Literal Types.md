---
date: 2024-01-26
tags:
  - ts
---

TS have the same syntax as template literal strings in JS, but are used in type positions.

```ts
type World = "world"

type Greeting = `hello ${World}`
// type Greeting = "hello world"
```

When a union is used in the interpolated position:

```ts
type EmailLocaleIDs = "welcome_email" | "email_heading"
type FooterLocaleIDs = "footer_title" | "footer_sendoff"

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`
// type AllLocaleIDs = "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"

// the union are cross multipied
type Lang = "en" | "ja" | "pt"
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`
// type LocaleMessageIDs = "en_welcome_email_id" | "en_email_heading_id" | "en_footer_title_id" | "en_footer_sendoff_id" | "ja_welcome_email_id" | "ja_email_heading_id" | "ja_footer_title_id" | "ja_footer_sendoff_id" | "pt_welcome_email_id" | "pt_email_heading_id" | "pt_footer_title_id" | "pt_footer_sendoff_id"
```

## Intrinsic String Manipulation Types

- `Uppercase<StringType>`
- `Lowercase<StringType>`
- `Capitalize<StringType>`
- `Uncapitalize<StringType>`

```ts
type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
type MainID = ASCIICacheKey<"my_app">
// type MainID = "ID-MY_APP"

type ASCIICacheKey<Str extends string> = `id-${Lowercase<Str>}`
type MainID = ASCIICacheKey<"MY_APP">
// type MainID = "id-my_app"

type LowercaseGreeting = "hello, world"
type Greeting = Capitalize<LowercaseGreeting>
// type Greeting = "Hello, world"

type UppercaseGreeting = "HELLO WORLD"
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>
// type UncomfortableGreeting = "hELLO WORLD"
```

## Thanks

- [TypeScript: Documentation - Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)
