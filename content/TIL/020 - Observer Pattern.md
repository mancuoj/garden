---
date: 2024-01-20
tags:
  - til
  - pattern
---

Implementing a one-to-many dependency relationship between objects, when the state of an object changes, all objects that depend on it will be notified and automatically updated.

There are several important concepts: observable, also known as subject, can be likened to a news public account, and observers can be likened to the crowd. Observers can subscribe to the observable, and once a major event occurs, the observable can notify all observers subscribed to it. Of course, observers must also have a way to unsubscribe.

This model allows the observable to focus on event monitoring, while observers handle data processing, enabling easy decoupling.

Different from the observer pattern, the publish/subscribe pattern involves publishers and subscribers who are unaware of each other, communicating via a broker component.


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
