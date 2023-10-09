# Python - Import System

## What will happen when import a module

1. first lookup `sys.modules`

- `sys.modules` is a cache of all modules that have been previously imported

2. lookup built-in module

- lookup [python standard library]

3. Directory Search

- `sys.path` or subpackage's `__path__`

4. Module Binding
5. Module Initialization

## Import Regular Package

> Definition of [regular package is here](python-glossary.md#package)
> `__init__.py` is similar to [`index.js`](javascript-module.md#indexjs-file) in nodejs

- when regular package is imported, this package's `__init__.py` will be executed

## Import Namespace Package

```
snake-corp/
│
├── snake-corp-dateutil/
│   ├── snake_corp/
│   │   └── dateutil.py
│   └── pyproject.toml
│
├── snake-corp-magic-numbers/
│   ├── snake_corp/
│   │   └── magic.py
│   └── pyproject.toml
│
└── snake-service/
    └── snake_service.py
```

- there is a namespce package called `snake_corp`

## Relative Import

For example, A package layout like this

```
package/
    __init__.py
    subpackage1/
        __init__.py
        moduleX.py
        moduleY.py
    subpackage2/
        __init__.py
        moduleZ.py
    moduleA.py
```

in `subpackage1/moduleX.py` or `subpackage1/__init__.py`, the following are valid relative imports:

```py
from .moduleY import spam 
from .moduelY import spam as ham
from . import moduleY
```

## Directory Search Path

[Illustrate Directory Search Path With Demo](python-illustrate-module-search-path.md)

