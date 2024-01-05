# Python - Project Manager

* [Summary](#summary)
* [setup.py](#setup.py)
* [pyproject.toml](#pyproject.toml)
* [build](#build)
* [Hatch](#hatch)
* [Setuptools](#setuptools)

## Summary

Package Metadata File

- where you can specify things such as:
  - license
  - python version
  - dependencies, etc.
  - build system
  - ...
- both [setup.py](#setup.py) and [pyproject.toml](#pyproject.toml) are for this purpose

Build Tools

- Package metadata file is used by build tools, such as:
  - [build](#build)
  - [Hatch](#Hatch)

## setup.py

- traditional way to provide python project metadata

simple `setup.py`

```py
import setuptools

setuptools.setup(
    name="example-pkg-YOUR-USERNAME-HERE", # Replace with your own username
    version="0.0.1",
    author="Example Author",
    author_email="foo@example.com"
)
```

## pyproject.toml

[pyproject.toml](python-pyprojecttoml.md)

## build

- A python packaging build frontend

installation

```sh
pip install build
```

## Hatch

[Hatch](python-hatch.md)

## Setuptools

[Setuptools](python-setuptools.md)

