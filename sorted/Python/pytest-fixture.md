# Pytest - Fixture Mechanism

* [Define Test Fixtures](#define-test-fixtures)
* [Request Test Fixture](#request-test-fixture)
* [Autouse Fixtures](#autouse-fixtures)
* [Fixtures Scope](#fixtures-scope)
* [Teardown/Cleanup](#teardown/cleanup)
* [Sharing Fixture Across Files](#sharing-fixture-across-files)
* [Fixture From Plugin](#fixture-from-plugin)
* [Fixture Instantiation Order](#fixture-instantiation-order)

## Define Test Fixtures

- `@pytest.fixture` decorator to tell pytest this is a fixture

```py
import pytest

@pytest.fixture
def my_fixture():
    return 42
```

## Request Test Fixture

[Request Fixture](python-pytest-request-fixture.md)

## Autouse Fixtures

- Fixtures that all tests will execute

## Fixtures Scope

syntax

- `@pytest.fixture(scope="module")`

available scope

- `function`: default scope, destroyed at the end of the test
- `class`: destroyed during [teardown]() of the last test in the class
- [`module`](python-glossary.md#module): destroyed during teardown of the last test in the module
- [`package`](python-glossary.md#package): destroyed during teardown of the last test in the package
- `session`: destroyed at the end of the test session

## Teardown/Cleanup

> also called Finalization

what it is

- specific steps for fixture to clean up after itself

how to do it? this can be done in 2 ways

- Option 1
  - [`yield`](python-iteration.md#yield) instead of `return`
  - place teardown code after `yield`

## Sharing Fixture Across Files

- File `conftest.py` providing fixtures for an entire directory
- fixtures in `conftest.py` can be found in `subpackage/test_subpackage.py`
- fixtures in `subpackage/conftest.py` can not be found in `test_top.py`

```
tests/
├── __init__.py
├── conftest.py
├── test_top.py
└── subpackage
    ├── conftest.py
    └── test_subpackage.py
```

`conftest.py`

```py
import pytest
@pytest.fixture
def order():
    return []

@pytest.fixture
def top(order, innermost):
    order.append("top")
```

`test_top.py`

```py
import pytest

@pytest.fixture
def innermost(order):
    order.append("innermost top")
def test_order(order):
    assert order == ["innermost top", "top"]
```

## Pass Data To Fixture With Markers

```py
import pytest

@pytest.fixture
def fixt(request: pytest.FixtureRequest):
    marker = request.node.get_closest_marker("fixt_data")
    if marker is None:
        data = None
    else:
        data = marker.args[0]

    return data

@pytest.mark.fixt_data(42)
def test_fixt(fixt):
    assert fixt == 42
```

## Fixture From Plugin

## Fixture Instantiation Order

Affected by 3 factors

1. [scope](#fixtures-scope): higher scope fixtures are instantiated first

- session > package > module > class > function

2. [dependencies]

```py
@pytest.fixture
def order():
    return []

@pytest.fixture
def a(order):
    order.append("a")

@pytest.fixture
def b(a, order):
    order.append("b")

@pytest.fixture
def c(a, b, order):
    order.append("c")
```

- dependencies relationship

```
     a
    /|
   / |  
  b  |
   \ |  
    \|  
     c
```

- this denpendencies can be flatten to this

```
  a
  |
  b
  |
  c
```

- if there is any ambiguity, pytest will execute at one of the possible order

```
a     b
 \   /
  \ /
   c
```

3. [autouse](#autouse-fixtures)

- autouse fixtures execute first at there scope
- autouse fixtures make its dependencies also autouse

```py
@pytest.fixture
def a(order):
    order.append("a)"

@pytest.fixture
def b(a, order):
    order.append("b")

@pytest.fixture(autouse=True)
def c(b, order):
    order.append("c")

@pytest.fixture
def d(b, order):
    order.append("d") 
```

- a, b is dependencies of c
- c is autouse, so a, b is also autouse
- autouse is executed first

```py
    a
    |
    |
    b
   /|
  / |
 c  |
    |
    |
    d
```
