# Python - tuple

## Tuple

- immutable sequence

```py
tp1 = 3, 5, 'hello!'
tp2 = (3, 5, 'hello!')
tp3 = tuple([3, 5, 'hello!'])  # with tuple([iterable])
```

> parentheses are optional, it's for avoiding ambiguity. for function `f(1, 2, 3)` take 3 arguments, `f((1, 2, 3))` take sole 3-tuple argument

## collections.namedtuple()

`collectoins.namedtuple(typename, field_names, *, rename=False, defaults=None, module=None)`

- return a new tuple subclass `typename`

## Typing.NamedTuple

Typed Version of [collections.namedtuple()](#collections.namedtuple)

```py
class Employee(NamedType):
    name: str
    id: int
# equivalent to
Employee = namedtuple('Employee', ['name', 'id'])
```

instance

```py
employee = Employee('John', 1)
```



