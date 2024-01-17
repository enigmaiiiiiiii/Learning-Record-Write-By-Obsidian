# Python - Type Hint

## What It Is

```py
def greeting(name: str) -> str:
    return 'Hello ' + name
```

- type hint is **not a type restriction**
- it is just a hint for the programmer and the IDE
- it is **not enforced** by the interpreter

## Forward Reference

When a type hint contains names that have not been defined yet

use string literal to represent the type hint

```py
class Tree:

    def __init__(
            self, 
            left: Tree,  # ① 
            right: 'Tree'  # ②
        ):
        self.left = left
        self.right = right
```

- ①  annotation will not work
- ②  annotation will work

## typing

`class typing.Type[T]`

- Annotating a variable is a type of class itself
- in another word, annotating a variable is a constructor call
- Already deprecated, Also known as `type[T]` or [`type(Object)`](#type)

```py
from typing import Type
class User: ...
class ProUser(User): ...
class TeamUser(User): ...

def make_new_user(user_class: Type[User]) -> User:
    # ...
    return user_class()
```

- `user_class` can be used to create a new instance of the `User` or any of its subclasses

## type()



