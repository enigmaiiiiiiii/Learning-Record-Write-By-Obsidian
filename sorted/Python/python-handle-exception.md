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

## Custom Exception

## Handle Exception

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

code must be executed if try block **does not** raise an exception

- `else` clause

> different with [`finally` clause](java-exception-handling.md#finally-block) in java, which is executed even an exception is raised

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

Exception Compatibility

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
