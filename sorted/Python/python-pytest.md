# Python - pytest

## Automically Find Test

`pytest` automatically finds 

- test files
- test function

## Test Files

- files of the form `test_*.py` or `*_test.py` in current directory and subdirectories

## Test Items 

- functions or methods prefixed with `test`
- function prefixed with `test` inside classes prefixed with `Test`

## Define Test Fixture

[test fixture concept](python-unittest.md#test-fixture)

- `@pytest.fixture` decorator to tell pytest this is a fixture

```py
import pytest

@pytest.fixture
def my_fixture():
    return 42
```

## Use Test Fixture

- test fixture are accessed by [test items](#test-items) through arguments
- [test items](#test-items) let the name of parameters same as the name of fixture function to determine which fixture to use
- test fixture function will be **automatically called** by pytest framework when used by test items 

```py
import pytest
@pytest.fixture
def one():
    return 1

def test_addition(one):
    assert one + 1 == 2

```

- `one` in `test_addition` will be replaced by the **return value** of `one` fixture function

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

