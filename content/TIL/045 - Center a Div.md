---
date: 2024-02-14
tags:
  - til
  - css
---

## Auto Margins

```css
.element {
  max-width: fit-content;
  /* margin-left: auto; */
  /* margin-right: auto; */
  margin-inline: auto;
}
```

- Constrain the element's width
- `fit-content` makes `width` behave like `height`, so that the element's size is determined by its content
- Each auto margin will try to gobble up as much space as possible

## Flexbox

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Within the viewport

```css
.element {
  /* 1. Fixed positioning */
  position: fixed;
  /* 2. Anchoring to all 4 edges */
  inset: 0px;
  /* 3. Constrained width and height */
  width: 12rem;
  height: 5rem;
  max-width: 100vw;
  max-height: 100dvh;
  /* 4. Auto margins */
  margin: auto;
}
```

- `inset` is a shorthand that sets `top, left, right, bottom` all to the same value
- Element can't be 0px from the left *and* 0px from the right *and* only 12rem wide (assuming the viewport is wider than 12rem), we can only pick 2 of the 3
- `margin:auto` resolves the impossible condition to center an element both horizontally *and* vertically

### Center in a single direction

```css
.element {
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 8px;
  width: 12rem;
  max-width: calc(100vw - 8px * 2);
  margin-inline: auto;
}
```

### Center elements with unknown sizes

```css
.element {
  position: fixed;
  inset: 0;
  width: fit-content;
  height: fit-content;
  margin: auto;
}
```

## CSS Grid

```css
.container {
  /* 1x1 grid */
  display: grid;
  /* justify-content and align-content */
  place-content: center;
}
```

- It's simpler to use Flexbox instead, to avoid the rabbithole

## Center a stack of elements

```html
<div class="container">
  <img class="element" />
  <img class="element" />
  <img class="element" />
  <img class="element" />
</div>
```

```css
.container {
  display: grid;
  place-content: center;
}

.element {
  grid-row: 1;
  grid-column: 1;
}
```

- Assign multiple elements to the same cell
- This can work _even when the child elements are different sizes
- Add `place-items: center;` to avoid all stack in the top-left corner

## Center Text

```css
.container {
  text-align: center;
}
```

## When to use which method

- If we want to horizontally center a single element without disturbing any of its siblings, we can use the [Flow layout auto margin strategy](https://www.joshwcomeau.com/css/center-a-div/#centering-with-auto-margins)
- If we have a piece of floating UI, like a modal or a banner, we can center it using [Positioned layout and auto margins](https://www.joshwcomeau.com/css/center-a-div/#centering-within-the-viewport)
- If we want to center a stack of elements one on top of the other, we can use [CSS Grid](https://www.joshwcomeau.com/css/center-a-div/#centering-a-stack-of-elements)
- If we want to center text, we can use [text-align](https://www.joshwcomeau.com/css/center-a-div/#centering-text). This can be used in conjunction with any of the additional methods
- Finally, in most other situations, we can use [Flexbox](https://www.joshwcomeau.com/css/center-a-div/#centering-with-flexbox). It's the most versatile method; it can be used to center one or multiple children, horizontally and/or vertically, whether they're contained or overflowing

## Thanks

- [How To Center a Div](https://www.joshwcomeau.com/css/center-a-div/)
