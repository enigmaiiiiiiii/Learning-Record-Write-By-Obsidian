# Python - Class

- [Define a class](#define-a-class)
- [Instiantiate a class](#instiantiate-a-class)
- [Accessibility Control](#accessibility-control)
- [Inheritance](#inheritance)
- [Magic Method](#magic-method)

## Define a class

```py
class Person:

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def foo(self):
        print("Hello, my name is " + self.name)

```

## Method

```py
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def foo(self):
        print("Hello, my name is " + self.name)
```

> unlike c++, java, method in python does not support overloading methods by define multiple methods with the same name

## Instiantiate a class

```py
p = Persion("john", 36)
print(p.name)
print(p.age)
```

## Accessibility Control

private method or field is prefixed with `__`

```py
class Person:

    def __init__(self, name, age):
        self.name = name
        self.__age = age

    def __foo(self):
        print("Hello, my name is " + self.name)

p = Persion("john", 36)
p.__foo() # error
```

## Inheritance

```py
class Student(Person):

    def __init__(self, name, age, grade):
        super().__init__(name, age)
        self.grade = grade

    def foo(self):
        super().foo()
        print("I am a student")
```

## Magic Method

`__init__()`

`__str__()`: string representation

`__eq__()`

## Magic Field

`__dict__`

- store an **object**'s(writable) attributes
- which means the following code first output is `{}`

```py
class Foo:
    name = "foo"
f = Foo()
print(f.__dict__) # {}
print(f.__class__.__dict__) # {'__module__': '__main__', 'name': 'foo', ...}
```
