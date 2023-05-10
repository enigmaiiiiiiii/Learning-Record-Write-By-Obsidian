# UML

* [Class](#class)
* [Clear arrow (Inheritance)](#clear-arrow-inheritance)
* [Line (Association)](#line-association)
* [Clear Diamond (Aggregation)](#clear-diamond-aggregation)
* [Black Diamond (Composition)](#black-diamond-composition)
* [Multiplicity.](#multiplicity)

## Class

**class name** at the top of the box

---

The attributes (properties of the class). The properties have this format:

```sh
-name: string
-age: int
+id: int
```

- private is `-`
- public is `+`
- protected is `#`   (protected means it can only be accessed by the same class or subclasses)

---

The methods are below the attributes and look like this:

```sh
-setName()
-doSomething()
+isActive
```

## Clear arrow (Inheritance)

The clear arrows is a subclass that points to the parent class. THe subclass inherits the attributes of the parent.

## Line (Association)

A line prepresents an association between classes. The line could have text that described the association. A line between User and Food could have the text "eats"
to describe the association between a user and food.

## Clear Diamond (Aggregation)

This is an aggregation. An aggregation is a special type of association that specifies a thing and its parts.

A User might be part of a Squad, but doesn't have to be. The clear diamond in that case would point to the Squad from the User

## Black Diamond (Composition)

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

When a child object can't exist without its parent object.
THe black diamond would point to the parent from the child.

## Multiplicity.

You can set number values to relationships using syntax such as 1..* (one to many).

0..1 Zero to one (optional)

n specific number

0..* zero to many

1..*  one to many

m..n specific number range

## cheat sheet

![uml cheat sheet](../../image/umlcheatsheet.jpg)