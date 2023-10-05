# Python - Package

## Where to Install Package

- global
- [virtual environment](python-virtual-environment.md)

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
