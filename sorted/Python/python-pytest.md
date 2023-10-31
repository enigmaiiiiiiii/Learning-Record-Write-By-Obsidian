# Python - pytest

* [Automically Find Test](#automically-find-test)
* [What Will Be Test](#what-will-be-test)
* [Test Files](#test-files)
* [Test Items](#test-items)
* [Fixtures Mechanism](#fixtures-mechanism)
* [Take A Look](#take-a-look)

## Automically Find Test

`pytest` automatically finds 

- test files
- test function

## What Will Be Test

- [test items](#test-items) in [test files](#test-files)

## Test Files

- files of the form `test_*.py` or `*_test.py` in current directory and subdirectories

## Test Items

[pytest test items](pytest-test-items.md)

## Fixtures Mechanism

> [test fixture concept](python-unittest.md#test-fixture)

[Fixtures Mechanism](pytest-fixture.md)

## Request Object

- a object give access to the requesting test context

`property`

- node
  - node.name: current test function or method
- module
  - python [module](python-module.md) object where the test function, class or method was collected

## Take A Look

```py
import pytest

class Fruit:
    def __init__(self, name):
        self.name = name
    def __eq__(self, other):
        return self.name == other.name

@pytest.fixture
def my_fruit():
    return Fruit("apple")

@pytest.fixture
def fruit_basket(my_fruit):
    return [Fruit("banana"), my_fruit]

def test_my_fruit_in_basket(my_fruit, fruit_basket):
    assert my_fruit in fruit_basket
```

