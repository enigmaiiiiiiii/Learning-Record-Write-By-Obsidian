# Python - Packaging Python Projects

## Content

- Packaging Python Projects with [setuptools](python-setuptools.md) and [build](python-project-manager.md#build)

## Minimal Example

Project Structure

```
.
├── README.md
├── pyproject.toml
└── src
    └── hello_python_packaging
        ├── __init__.py
        └── __main__.py
```

`pyproject.toml`

```toml
[build-system]
requires = ["setuptools"]
build-backend = "setuptools.build_meta"

[project]
name = "hello-python-packaging"
version = "0.0.1"
authors = [
   { name = "tutorial", email = "tutorial@example.com"}
]
description = "tutorial for python project packaging"
license = { text = "GPL-3"}
readme="README.md"
requires-python = ">=3.8"

[project.urls]
Homepage = "..."
Issues = "..."
```

install [setuptools]() and [build](python-project-manager.md#build)

```sh
pip install --upgrade setuptools build
pip install --upgrade build
```

generating [distribution archives](python-glossary.md#distribution)

```sh
python -m build
```

`dist/` directory will be generated

```
.
├── ...
├── dist/
│   ├── hello-python-packaging-0.0.1.tar.gz
│   └── hello_python_packaging-0.0.1-py3-none-any.whl
└── ...
```

- `*.tar.gz`: [source distribution](python-glossary.md#source-distribution)
- `*.whl`: built distribution

install local distribution

```sh
pip install ./dist/hello_python_packaging-0.0.1.tar.gz
```

publish the distribution to TestPyPI

> testPyPI is a separate instance of the [PyPI](python-glossary.md#pypi) that allows you to try out the distribution tools

## Packaging CLI Program

`__main__.py`

```py
def main():
    print("hello python packaging")

if __name__ == "__main__":
    main()
```

`pyproject.toml`: add following section

```toml
[project.scripts]
hyp = "hello_python_packaging.__main__:main"
```

build and install

```sh
python -m build
pip install ./dist/hello_python_packaging-0.0.1.tar.gz
```

run

```sh
$ hyp
hello python packaging
```




