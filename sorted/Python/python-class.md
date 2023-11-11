# Python - Class

* [Define a class](#define-a-class)
* [Method](#method)
* [Instiantiate a class](#instiantiate-a-class)
* [Accessibility Control](#accessibility-control)
* [Inheritance](#inheritance)
* [Magic Method](#magic-method)
* [Magic Field](#magic-field)

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

    # private method
    def __bar(self):
        print("I am a private method")
    # static method
    @staticmethod
    def baz():
        print("I am a static method")

p = Person("john", 98)
Person.baz() # I am a static method
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

## Attributes

```py
class User:
    # here is class attribute
    name = "John"
    age = 123

    def __init__(self, name, age):

        # here is instance attribute
        self.name = name
        self.age = age

a = User("Fido", 89)
b = User("Buddy", 99)

print(User.name) # John
print(a.name) # Fido
print(b.name) # Buddy
```

- **Class attributes** can be assigned directly, for example: `User.name = "john"`
- **Class attributes** are shared by all instances of the class
- **Class attributes** will be overrided by instance attribute

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

## Parameter self and cls

*no mandatory, just a convention*

- `self` for instance method
- `cls` for class method

## Property

> [property in typescript](typescript-class.md#getters/setters)

```py
class Person:

    def __init__(self, age):
        self.age = _age

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, age):
        if age < 0:
            raise ValueError("age cannot be negative")
        self._age = age

p = Person(90)
print(p.age) # 90
p.age = -1 # ValueError: age cannot be negative
```

