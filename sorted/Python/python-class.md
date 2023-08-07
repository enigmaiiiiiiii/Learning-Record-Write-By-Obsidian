# Python - Class

## Define a class

```py
class Person:

    def __init__(self, name, age):
        self.name = name 
        self.age = age

    def foo(self):
        print("Hello, my name is " + self.name)

```

## Instiantiate a class

```py
p = Persion("john", 36)
print(p.name)
print(p.age)
```

## Accessibility Control

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

