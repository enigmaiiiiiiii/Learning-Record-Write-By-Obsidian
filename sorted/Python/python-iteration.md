# Python - iteration

## iterator

- representing a stream of data
- iterator's method `__next__()` returns the next item in the stream

## generator

- A special kind of [iterator](#iterator)
- yield statement is used when defining a generator

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

## yield from

- `yield from` is used to delegate subgenerator

```py
def generator_with_yield_from():
    yield 1
    yield from [2, 3, 4]
    yield 5

gen = generator_with_yield_from()
print(list(gen))  # Output: [1, 2, 3, 4, 5]
```

## method: __iter__ 

- return an iterator to be used in [for]() or [in]() statements

```py
class MyIterable:
    def __init__(self, data):
        self.data = data

    def __iter__(self):
        # Return an iterator object (in this case, 'self' is used as the iterator)
        yield 1
        yield 2
        yield 3

    def __next__(self): 
        if not self.data:
            raise StopIteration
        return self.data.pop(0)

# Create an instance of MyIterable
my_iterable = MyIterable([3, 4, 5, 6,7])
# Use it in a for loop
for item in my_iterable:
    print(item)
```





