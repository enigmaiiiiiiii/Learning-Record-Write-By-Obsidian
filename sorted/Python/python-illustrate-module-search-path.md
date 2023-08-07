# Python - Illustrate Module Search Path

* [sys.path](#sys.path)
* [Demo Code](#demo-code)
* [Cannot import same level package when run script directly](#cannot-import-same-level-package-when-run-script-directly)
* [Explain With sys.path](#explain-with-sys.path)
* [How To Import Same Level Package](#how-to-import-same-level-package)

## sys.path

- `sys.path` is a list of strings that specifies the search path for modules

## Demo Code

For example, a directory structure like this

```
app
├── packageA
│   ├── __init__.py
│   └── module1.py
├── packageB
│   ├── __init__.py
│   └── script.py
└── run.py
```

code in `script.py`

```py
from ..packageA import module1
def func():
    print('hello')
```

code in run.py

```py
import packageB.script as foo
foo.func()
```

## Cannot import same level package when run script directly

run command `python packageB/script.py`, will get error

```sh
ImportError: attempted relative import with no known parent package
```

run command `python run.py`, the code will work

```sh
hello
```

## Explain With sys.path

modify code in `script.py` to

```py
# from ..packageA import module1
import sys
print(sys.path)
```

modify code in `run.py` to

```py
import sys
print(sys.path)
```

run command to check `sys.path`

```sh
$ python packageB/script.py
[
    '$HOME/path/to/app/packageB',
    '/Library/Frameworks/Python.framework/Versions/3.11/lib/python311.zip',
    '/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11',
    '/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11/lib-dynload',
    '$Home/path/to/app/.venv/lib/python3.11/site-packages'
]
$ python run.py
[
    '$HOME/path/to/app',
    '/Library/Frameworks/Python.framework/Versions/3.11/lib/python311.zip',
    '/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11',
    '/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11/lib-dynload',
    '$Home/path/to/app/.venv/lib/python3.11/site-packages'
]
```

- for command `python packageB/script.py`, `sys.path` is `['$HOME/path/to/app/b', ...]`
- for command `python run.py`, `sys.path` is `['$HOME/path/to/app', ...]`

## How To Import Same Level Package

if real has a requirement to import same level package, like

```py
from ..packageA import module1
```

option 1: sys.path.append

```py
import sys
sys.path.append('..')
```

option 2: from parent directory run with `-m` options

```sh
$ python -m packageB.script
```

option 3: use `PYTHONPATH` environment variable

```sh
export PYTHONPATH=$PYTHONPATH:/path/to/app
```


