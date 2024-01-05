# Python - Syntax Sugar

## Create Dict With for Loop

from tuple list

```py
data = [('a', 1), ('b', 2), ('c', 3)]
d = {k: v for k, v in data}
```

from two list

```py
k = ['a', 'b', 'c']
v = [1, 2, 3]
d = {k: v for k, v in zip(k, v)}
```

from another dict and filter

```py
d1 = {'a': 1, 'b': 2, 'c': 3}
d2 = {k: v for k, v in d1.items() if v > 1}
```
