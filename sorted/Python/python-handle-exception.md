# Python - Handle Exception

## Exception

## Built-in Exceptions

`BaseException`

- base class of **all exceptions**

`Exception`

- subclass of `BaseException`
- base class of all **non-fatal** exceptions
  - `ValueError`
  - ...
- programmers are **encouraged to derive new exceptions from this class**
- can be used as wildcard that catch almost everything

exceptions not subclass of `Exceptions`

- which indicates that the program should terminate

## Raise Exceptions

```py
if True:
    raise Exception("message")
```


## Except clause

```py
try:
    x = int(input("Please enter a number: "))
    break
except ValueError as e:
    print("Oops!  That was no valid number.  Try again...")
# handle multiple exceptions
except (RuntimeError, TypeError, NameError):
    pass
```

## `else` clause

- code in `else` clause will be executed if try block **does not** raise an exception
- `else` clause is useful for code that must be executed if the try clause does not raise an exception

> different with [`finally` clause](#finally-clause), which is executed even an exception is raised

```py
for arg in sys.argv[1:]:
    try:
        f = open(arg, 'r')
    except OSError:
        print('cannot open', arg)
    else:
        print(arg, 'has', len(f.readlines()), 'lines')
        f.close()
```

## `finally` clause

- exception will be raised at the end of `finally` clause
- if execute a `return`, `break` or `continue` statement in `finally` clause, the exception is discarded

## Custom Exception

## Exception Compatibility

```py
class B(Exception):
    pass
class C(B):
    pass
class D(C):
    pass

for cls in [B, C, D]:
    try:
        raise cls()
    except D:
        print("D")
    except C:
        print("C")
    except B:
        print("B")
# output: B C D
for cls in [B, C, D]:
    try:
        raise cls()
    except B:
        print("B")
    except C:
        print("C")
    except D:
        print("D")
# output: B B B
```

## Traceback Package

```py
import traceback

try:
    raise Exception("message")
except:
    traceback.print_exc()
```
