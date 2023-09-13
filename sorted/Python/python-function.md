# Python - Function

## dict as argument

```py
def func(a, b, c):
    print(a, b, c)
d = {'a': 1, 'b': 2, 'c': 3}
func(**d)
```

## lambda

```py
f = lambda x: x + 1
print(f(1))  # 2
```

## args and kwargs

```py
def foo(*args, **kwargs):
    print(args)
    print(kwargs)
foo(1, 2, 3, a=1, b=2, c=3)
```

- args: tuple argument
- kwargs: dict argument
