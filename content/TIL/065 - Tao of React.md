---
date: 2024-03-05
tags:
  - til
  - react
---

Of course, there isn’t a universal best practice that can be applied to all businesses and applications. But there are some general rules that we can follow to build a productive codebase.

**Take everything here as an opinion**, not an absolute. There’s more than one way to build software.

## Components

- Favor Functional Components
- Write Consistent Components
- Name Components
- Organize Helper Functions
- Don't Hardcode Repetitive Markup
- Manage Component Size
- Write Comments in JSX
- Use Error Boundaries
- Destructure Props
- Manage the Number of Props
- Pass Objects Instead of Primitives
- Conditional Rendering
- Avoid Nested Ternary Operators
- Move Lists in a Separate Component
- Assign Default Props When Destructuring
- Avoid Nested Render Functions

## State Management  状态管理

- Use Reducers
- Prefer Hooks to HOCs and Render Props
- Use Data Fetching Libraries
- State Management Libraries

## Component Mental Models

- Container & Presentational
- Stateless & Stateful 

## Application Structure

- Group by Route/Module 
- Create a Common Module
- Use Absolute Paths
- Wrap External Components
- Move Components in Folders

## Performance

- **Don't Optimize Prematurely**
- Watch The Bundle Size
- Rerenders - Callbacks, Arrays and Objects

## Testing

- Don't Rely on Snapshot Tests
- Test Correct Rendering
- Validate State & Events
- Test Edge Cases
- Write Integration Tests

## Styling

- ~~Use CSS-in-JS~~
- Keep Styled Components Together

## Data Fetching

- Use a Data Fetching Library


## Thanks

- [Tao of React - Software Design, Architecture & Best Practices](https://alexkondov.com/tao-of-react/)