# Python - Glossary

## Module

- a **single python file**

> detail for [module](python-module.md)

## Package

- A **directory** with `__init__.py` file
- Also is a [module](#module), contains **submodules**

## namespace

## namespace package

- A **package** that **does not have `__init__.py` file**
- no physical representation

## import path

- a list of locations that Python will search for modules and packages
- usually from `sys.path`
- for subpackage it may also come from `__path__` attribute

## PEP

- abbreviation of Python Enhancement Proposal

## Wheel

- A built Distribution format introduced by official
- It is intended to replace the [Egg](#egg) format

## Distribution

- A versioned archive file that contains python [package](#package), [modules](#module)
- what users will get it by command `pip install pkg`
- what users will download from internet

## build distribution

- containing files and metadata only need to be moved to the target system 
- [.whl](#wheel) is a build distribution format

## source distribution

- provides metadata and source files needed for installing by a tool like pip
- .tar.gz is a source distribution format

## Build Backend

- Such as: [Setuptools](python-setuptools.md), hatch's hatchling

## Build Frontend

- Example: pip and build

## Egg

- introduced by [setuptools](python-setuptools.md)
- eggs are to python as [jars](java-jar-file.md) are to java

## PyPA

- Python Packaging Authority
- A working group that maintains many of the relevant projects in Python packaging

## PyPI

- Python Package Index
- Where developers can publish their packages

