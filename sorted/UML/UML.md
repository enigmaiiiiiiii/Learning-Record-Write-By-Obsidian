# UML

* [What it is](#what-it-is)
* [Represent A Class](#represent-a-class)
* [󰔷 Clear Triangle Arrow(Inheritance)](#󰔷-clear-triangle-arrow(inheritance))
* [󰁔 Line: Association](#󰁔-line:-association)
* [󱀝 Clear Diamond (Aggregation)](#󱀝-clear-diamond-(aggregation))
* [󰣏 Black Diamond (Composition)](#󰣏-black-diamond-(composition))
* [Multiplicity.](#multiplicity.)
* [cheat sheet](#cheat-sheet)

## What it is

- uml is not about code implementation
- uml is about objective design

## Represent A Class

1. **class name** at the top of the box

---

2. attributes (properties of the class)

- The properties format

```sh
-name: string
-age: int
+id: int
```

- private is `-`
- public is `+`
- protected is `#` (protected means it can only be accessed by the same class or subclasses)

---

3. The methods are below the attributes and look like this:

```sh
-setName()
-doSomething()
+isActive
```

## 󰔷 Clear Triangle Arrow(Inheritance)

continous line with Triangle Arrow: **Extends Class**

- subclass inherits from the parent class.
- subclass points to the parent class.

dot line with Triangle Arrow: **Implements Interface**

- subclass implements an interface.
- subclass points to the interface.

## 󰁔 Line: Association

line with `>` arrow

- represents an association between classes.
- The line could have text that described the association.
- if A 󰁔 B, then A has an instance of B
- not **visa versa**

```js
class A {
  private b: B;
}
class B {

}
```

> for example: A line between User and Food could have the text "eats"

line without arrow

- represents the dependency exist in each other

```ts
class A {
  private b: B;
}
class B {
  private a: A;
}
```

## 󱀝 Clear Diamond (Aggregation)

- Represents the "has a" relationship.
- If diamond 󱀝 at A end, then A has an instance of B
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

## 󰣏 Black Diamond (Composition)

- If diamond at A side, then typically B will **new** in A's constructor
- B can't exist without A
- B can't reference outside of A

```ts
class A {
  private b: B;
  constructor() {
    this.b = new B();
  }
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

## Multiplicity.

You can set number values to relationships using syntax such as 1..\* (one to many).

0..1 Zero to one (optional)

n specific number

0..\* zero to many

1..\* one to many

m..n specific number range

## cheat sheet

![uml cheat sheet](../../image/umlcheatsheet.jpg)
