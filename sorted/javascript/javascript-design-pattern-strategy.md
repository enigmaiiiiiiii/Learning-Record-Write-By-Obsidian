# Javascript Design Patterns - Strategy

## Feature

- kind of behavioral pattern
- define a series of algorithms
- have the similar structures with
  - [state](javascript-design-pattern-state.md)
  - [bridge]

## When To Use Strategy Pattern

- when there are multiple algorithms for a specific task
- In behavior-interchangeable system

## Consist of Strategy Pattern

- [context](#context)
- [strategy inteface](#strategy-interface)
- [concrete strategy](#concrete-strategy)

## Context

1. hold a fields reference to the [strategy object](#concrete-strategy)
2. a method to set the strategy
3. a method to use the strategy

```ts
class Context {
  private strategy: Strategy;
  constructor() {
    this.strategy = new Strategy();
  }
  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }
  executeStrategy() {
    this.strategy.execute();
  }
}
```

## Strategy Interface

- declare the method to execute the algorithm

```ts
interface Strategy {
  execute(): void;
}
```

## Concrete Strategy

- implement their own algorithm

## Code

context

```ts
class Context {
  private strategy: Strategy;
  constructor() {
    this.strategy = new Add();
  }
  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }
  executeStrategy(a: number, b: number) {
    return this.strategy.execute(a, b);
  }
}
```

strategy interface

```ts
interface Strategy {
  execute(a: number, b: number): number;
}
```

concrete strategy

- `Add.ts, Subtract.ts, Multiply.ts`

```ts
class Add implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}

class Sub implements Strategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}

class Mul implements Strategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}
```

`index.ts`

```ts
const context = new Context();
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function InputStrategy() {
  rl.question(
    'a=3, b=5 1: +, 2: -, 3: *, q: quit',
    (input: string) => {
      if (input === '1') {
        context.setStrategy(new Add())
      } else if (input === '2') {
        context.setStrategy(new Sub());
      } else if (input === '3') {
        context.setStrategy(new Mul());
      } else if (input === 'q') {
        rl.close();
        return;
      } else {
        console.log('input error')
      }
      const result = context.executeStrategy(3, 5);
      console.log(result);
      InputStrategy();
    })
}

InputStrategy();
```