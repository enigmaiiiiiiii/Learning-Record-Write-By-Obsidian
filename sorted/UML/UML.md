# UML

* [What it is](#what-it-is)
* [Type Diagram](#type-diagram)
* [———▷ Inheritance](#———▷-inheritance)
* [---▷ Implementation](#---▷-implementation)
* [——󰁔 One Way Association](#——󰁔-one-way-association)
* [——— Association](#———-association)
* [󱀝——— Aggregation](#󱀝———-aggregation)
* [󰣏——— Composition](#󰣏———-composition)
* [.. Multiplicity](#..-multiplicity)
* [cheat sheet](#cheat-sheet)

## What it is

- uml is not about code implementation
- uml is about objective design

## Type Diagram

[Type Diagram](uml-type-diagram.md)

## ———▷ Inheritance

———▷: **Extends Class**

- sub class inherits from the parent class.
- sub class points to the parent class.

## ---▷ Implementation

---▷ : **Implements Interface**

- subclass implements an interface.
- subclass points to the interface.

## ——󰁔 One Way Association

line with `>` arrow

- represents an association between classes.
- The line could have text that described the association.
- if A 󰁔 B, then A has an instance of B, but B can exist without A

```js
class A {
  private b: B;
}
class B {

}
```

> for example: A line between User and Food could have the text "eats"

## ——— Association

- represents the dependency exist in each other

the code maybe looks likes that

```ts
class A {
  private b: B;
}
class B {
  private a: A;
}
```

## 󱀝——— Aggregation

- Represents the "has a" relationship.
- If A 󱀝——— B, then A has instance of B
- And A cannot create without B

```ts
class A {
  private b: B;
  constructor(b: B) {
    this.b = b;
  }
}
class B {}
```

## 󰣏——— Composition

- If A 󰣏——— B, then typically B will by **"new"** in A's constructor
- Special case of aggregation
- B will be removed when A is removed
- B can't exist without A in logic, which means an instance of B is meaningless without A
- B can't reference outside of A

```ts
class A {
  private b: B = new B();
}
class B {}
```

<svg xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="black-diamond" viewBox="0 0 10 10" refX="5" refY="5" 
            markerWidth="10" markerHeight="10" orient="auto-start-reverse">
      <path d="M 0 5 L 5 0 L 10 5 L 5 10 Z" fill="black"/>
    </marker>
  </defs>
  <path d="M 20 50 L 80 50" stroke="black" stroke-width="2" 
        marker-end="url(#black-diamond)"/>
</svg>

## .. Multiplicity

You can set number values to relationships using syntax such as 1..\* (one to many).

0..1 Zero to one (optional)

n specific number

0..\* zero to many

1..\* one to many

m..n specific number range

## cheat sheet

![uml cheat sheet](umlcheatsheet.jpg)
