# Pytest - Request Fixture 

## What Requesting Fixture Mean

- This process means using fixtures in tests
- test fixture are accessed by [test items](python-pytest.md#test-items) through arguments
- [test items](python-pytest.md#test-items) let the name of parameters same as the name of fixture function to determine which fixture to use
- test fixture function will be **automatically called** by pytest framework when used by test items

## Simple Example

```py
import pytest
@pytest.fixture
def one():
    return 1

def test_addition(one):
    assert one + 1 == 2

```

- `one` in `test_addition` will be replaced by the **return value** of `one` fixture function

## fixtures can be used by other fixtures

```py
import pytest

@pytest.fixture
def one():
    return 1

@pytest.fixture
def two(one):
    return one + 1
```

## Factories as fixtures

```py
@pytest.fixture
def make_customer_record():
    def _make_customer_record(name):
        return {
            "name": name,
            "orders": []
        }
    return _make_customer_record

def test_customer_records(make_customer_record):
    customer_1 = make_customer_record("Lisa")
    customer_2 = make_customer_record("Mike")
```

## Fixture Parametrization



## Use Fixture From request context

use [`request`](python-pytest.md#request) module to request fixture test from context 

```py
```
