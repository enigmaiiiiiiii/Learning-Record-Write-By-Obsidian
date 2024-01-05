# Python - pyproject.toml

## Features

- newer way to provide python project metadata
- strongly recommended

## Template

`pyproject.toml` template

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
classifiers = [
    "Programming Language :: Python :: 3",
    "Operating System :: OS Independent",
]

[project.urls]
Homepage = "https://your-project-homepage.com"
Repository = "https://your-project-repo-url.com"
Documentation = "https://your-project-docs-url.com"
Issues = "..."
```

Modernize A `setup.py` based project

- Equivalent `pyproject.toml` for the above `setup.py`

```toml
[build-system]
requires = ["setuptools"]
build-backend = "setuptools.build_meta"

[project]
name="example-pkg-YOUR-USERNAME-HERE"
version="0.0.1"
authors=["Example Author <foo@example.com>"]
```

## Fields(Keys)

classifiers

- only used for searching and browsing on [PyPI](python-glossary.md#pypi)

```toml
[project]
classifiers = [
    "Programming Language :: Python :: 3",
    "Operating System :: OS Independent",
]
```

- `Programming Language` and `Operating System` are called classifiers

available classifiers

- Framework
- Topic
- Development Status
- License
- Programming Language
- Operating System
- Environment
- Intended Audience
- Natural Language
- Typing

