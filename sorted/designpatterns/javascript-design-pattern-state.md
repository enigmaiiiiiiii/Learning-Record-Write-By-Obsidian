# Javascript Design Patterns - State

* [Feature](#feature)
* [What Problem To Solve](#what-problem-to-solve)
* [Class Consist of State Pattern](#class-consist-of-state-pattern)
* [Context](#context)
* [state interface](#state-interface)
* [concrete states](#concrete-states)
* [code](#code)

## Feature

- kind of behavioral pattern
- similar structure
   - [strategy](javascript-design-pattern-strategy.md)

## What Problem To Solve

- more and more state make the code hard to maintain
- most method will contain monstrous conditions

## Class Consist of State Pattern

- [context](#context)
- [state interface](#state-interface)
- [concrete states](#concrete-states)

## Context

1. hold a fields reference to the [state object](#concrete-state)
2. one or more methods that change the state

```js
class Context {
  // 1. state field
  private state: State;
  // 2. changing state method
  methodToChangeState() {
    this.state = new ConcreteState();
  }
}
```

## state interface

- declare all the methods that the context can call to change state

```ts
interface State {
  changeToA(): void;
  changeToB(): void;
}
```

## concrete states

- provide their own implementations for the state-specific method

> may provide intermediate abstract class for duplicate code

- state object store a backreference to the [context object]()
- for fetch required info from [context object](#context)

## code

state interface

```ts
abstract class State {
  abstract pullUp(wrapper?: Chain): void;
  abstract pullDown(wrapper?: Chain): void;
}
```

concrete state

```ts
class Off extends State {
  pullUp(wrapper?: Chain) {
    wrapper?.setState(new Low());
    console.log(' low speed');
  }
  pullDown() {
    console.log(' already off');
  }
}

class Low extends State {
  pullUp(wrapper?: Chain) {
    wrapper?.setState(new Medium());
    console.log(' medium speed');
  }
  pullDown(wrapper?: Chain) {
    wrapper?.setState(new Off());
    console.log(' turning off');
  }
}

class Medium extends State {
  pullUp(wrapper?: Chain) {
    wrapper?.setState(new High());
    console.log(' high speed');
  }
  pullDown(wrapper?: Chain) {
    wrapper?.setState(new Low());
    console.log(' low speed');
  }
}

class High extends State {
  pullUp(wrapper?: Chain) {
    console.log(' already the highest');
  }
  pullDown(wrapper?: Chain) {
    wrapper?.setState(new Medium());
    console.log(' medium speed');
  }
}
```

context

- `Chain.ts`

```ts
class Chain {
  private current: State;
  constuctor() {
    this.current = new Off();
  }
  setState(state: State) {
    this.current = state;
  }
  pullUp() {
    this.current.pullUp(this);
  }
  pullDown() {
    this.current.pullDown(this);
  }
}
```

index.ts

```ts
const chain = new Chain();
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
function switchState() {
  rl.question('any key to continue(\'q\' to exit)', (input) => {
    if (input === 'q') {
      rl.close();
    } else if (input === 'up') {
      chain.pullUp();
      switchState();
    } else if (input === 'down') {
      chain.pullDown();
      switchState();
    } else {
      console.error('invalid input')
      switchState();
    }
  })
}
switchState();
```
