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


