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

### Centering in a single direction

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

### Centering elements with unknown sizes

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

- Flexbox is often a simpler choice for centering without delving into complexities

## Centering a stack of elements

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

## Centering Text

```css
.container {
  text-align: center;
}
```

## Choosing the Right Centering Method

- Use auto margins in a flow layout to center a single element without affecting siblings.
- For UI elements like modals, use fixed positioning with auto margins.
- Stack elements using CSS Grid for central alignment.
- `text-align: center;` is best for centering text, compatible with other centering methods.
- Flexbox is the go-to for most situations; it's versatile for centering single or multiple elements both horizontally and vertically.

## Thanks

- [How To Center a Div](https://www.joshwcomeau.com/css/center-a-div/)
