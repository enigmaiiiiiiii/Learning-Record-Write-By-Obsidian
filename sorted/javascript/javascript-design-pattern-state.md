# Javascript Design Patterns - State

## What It Is

- kind of behavioral pattern

## What Problem To Solve

- more and more state make the code hard to maintain
- most method will contain monstrous conditions

## Components For State Pattern

- [context](#context)
- [state interface](#state-interface)
- [concrete states](#concrete-states)

## Context

- hold a reference to the state object

## state interface

- declares the state-specific method

## concrete states

- provide their own implementations for the state-specific method

> may provide intermediate abstract class for duplicate code

- state object may store a backreference to the [context object]()
- for fetch required info from [context object](#context)

## code

state interface

```js
abstract class State {
  pull(wrapper: Chain, direction: string): void {
    if (direction === 'up') {
      wrapper.setState(new Off());
      console.log(" turning off");
    } else if (direction === 'down') {
      console.log(" turning off");
    }
  }
}
```

concrete state

```ts
class Off extends State {
  pull(wrapper: Chain, direction: string) {
    if (direction === 'up') {
      wrapper.setState(new Low());
      console.log(" low speed");
    } else if (direction === 'down') {
      console.log(" no change, turning off");
    }
  }
}

class Low extends State {
  pull(wrapper: Chain, direction: string) {
    if (direction === 'up') {
      wrapper.setState(new Medium());
      console.log(" medium speed");
    } else if (direction === 'down') {
      wrapper.setState(new Off())
      console.log(" turning off");
    }
  }
}

class Medium extends State {
  pull(wrapper: Chain, direction: string) {
    if (direction === 'up') {
      wrapper.setState(new High());
      console.log(" high speed");
    } else if (direction === 'down') {
      wrapper.setState(new Low());
      console.log(" low speed");
    }
  }
}

class High extends State {
  pull(wrapper: Chain, direction: string) {
    if (direction === 'up') {
      wrapper.setState(new Off());
      console.log(" turning off");
    } else if (direction === 'down') {
      wrapper.setState(new Medium());
      console.log(" medium speed");
    }
  }
}
```

context

```ts
class Chain {
  private current: State;
  constuctor() {
    this.current = new Off();
  }
  setState(state: State) {
    this.current = state;
  }
  pull(direction: string = 'up') {
    this.current.pull(this, direction)
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
  rl.quest('any key to continue(\'q\' to exit)', (input) => {
    if (input === 'q') {
      rl.close();
    } else if (input === 'up') {
      chain.pull('up');
      switchState();
    } else if (input === 'down') {
      chain.pull('down');
      switchState();
    } else {
      console.log('invalid input');
      switchState();
    }
  }
}
switchState();
```