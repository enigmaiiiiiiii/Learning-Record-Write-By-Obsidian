# Python - Special Literal

* [triple dots `...`](#triple-dots-`...`)
* [double asterisk `**`](#double-asterisk-`**`)

## triple dots `...`

it is an special object

```py
print(...) # Ellipsis
```

placeholder foo parameter, function body

```py
def foo(...):
    ...
```

extended syntax in [numpy](python-numpy.md)

## double asterisk `**`

- unpacking dictionary

```py
my_dict = {'a': 1, 'b': 2, 'c': 3}
def foo(a, b, c):
    print(a, b, c)
foo(**my_dict)  # 1 2 3
```

- exponentiation

```py
print(2 ** 3)  # 8
```


