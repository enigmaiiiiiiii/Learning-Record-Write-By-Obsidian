# Python - Built-in Type

## Query Type

```py
a = [1, 2, 3]
print(type(a)) # <class 'list'>
```

## Mapping Type - dict

[dict](python-dict.md)

## Tuple

- immutable sequence

```py
tp1 = 3, 5, 'hello!'
tp2 = (3, 5, 'hello!')
tp3 = tuple([3, 5, 'hello!'])  # with tuple([iterable])
```

> parentheses are optional, it's for avoiding ambiguity. for function `f(1, 2, 3)` take 3 arguments, `f((1, 2, 3))` take sole 3-tuple argument


