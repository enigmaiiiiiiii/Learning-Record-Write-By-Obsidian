# Python - Pip

## What It Is

- package manager for python

## Where to Install Package

- global
- [virtual environment](python-virtual-environment.md)

## Install Package

- `pip install <package>`

## Where Packages Are Installed

- `pip show <package>` to see where it is installed

## Query Installed Packge List

```sh
python -m pip list
```

## Install Package

- version number can be specified by `==version_number` after package name

```shell
python -m pip install numpy==1.1.0
```

## Remove Package

- uninstall package1 package2

```sh
python -m pip uninstall package1 package2
```

## File requirements.txt

Create Environment from `requirements.txt`

```shell
pip install -r requirements.txt
```

Write Current Environment to `requirements.txt`

```shell
pip freeze > requirements.txt
```
