# Python - iteration

## yield

```py
def gen_func(x):
    for i in range(x):
        yield i

for value in gen_func(5):
    print(value)
```

output

```
0
1
2
3
4
```

- rather than computing result at once sending back like a list, `yield` will send back result one by one
- allows to create a stream of data consume in a memory-efficient way
