---
date: 2024-01-20
---

## Observable

An observable object usually contains:

- `observers`: an array of observers that will get notified whenever a specific event occurs
- `subscribe()`: a method in order to add observers to the observers list
- `unsubscribe()`: a method in order to remove observers from the observers list
- `notify()`: a method to notify all observers whenever a specific event occurs

## ES6 Demo

```js
class Observable {
  constructor() {
    this.observers = []
  }

  subscribe(f) {
    this.observers.push(f)
  }

  unsubscribe(f) {
    this.observers = this.observers.filter((subscriber) => subscriber !== f)
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data))
  }
}

export default new Observable()
```


## Pros and Cons

- Separation of concerns and the single-responsiblity principle
- Objects aren't tightly coupled and can be (de)coupled at any time
- The observable object is responsible for monitoring the events, while the observers simply handle the received data
- But if an observer becomes too complex, it may cause performance issues when notifying all subscribers

## Thanks

- [Observer Pattern](https://www.patterns.dev/vanilla/observer-pattern)
- [JavaScript Design Patterns: The Observer Pattern](https://www.sitepoint.com/javascript-design-patterns-observer-pattern/)
