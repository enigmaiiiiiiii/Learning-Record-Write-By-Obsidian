# Pytest - Test Items

## What Is Test Item

- functions or methods prefixed with `test`
- function prefixed with `test` inside classes prefixed with `Test`(without `__init__` method)

## Parametrizing Test Functions

```py
@pytest.mark.parametrize("test_input, expected", [
    ("3+5", 8),
    ("2+4", 6),
    ("6*9", 42),
])
def test_eval(test_input, expected):
    assert eval(test_input) == expected
```

this test result is 1 Failed, 2 Passed

