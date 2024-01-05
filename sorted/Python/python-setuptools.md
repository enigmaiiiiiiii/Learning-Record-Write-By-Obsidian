# Python - Setuptools

## What It Is

- A [build backend](python-glossary.md#build-backend)
- build a distribution package
- Adding a set of additional files containing metadata and configuration 
  - such as project dependencies, version, author, etc.

## Installation

```sh
pip install --upgrade setuptools
```

## How To Use

Project Structure

```
.
├── pyproject.toml
├── setup.cfg
└── src
    └── hello-python-packaging
        ├── __init__.py
        └── main.py
```

pyproject.toml

```toml
[build-system]
  requires = ["setuptools"]
  build-backend = "setuptools.build_meta"
[metadata]
  name = "hello-python-packaging"
  version = "0.0.1"
  author = "Your Name"
  author_email = "foo@example.com"
```

generate distribution

```sh
pip install -q build
python -m build
```

