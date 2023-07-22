# Python Virtual Environment

* [Virtual Env](#virtual-env)
* [manage package](#manage-package)
* [requirements.txt](#requirementstxt)
* [how venvs work](#how-venvs-work)

## Virtual Env

it's general to create virtual environment in current working directory

```shell
python -m venv .venv
```

create virtual environment, and specify the virtual environment directory as `env_path`

```shell
python -m venv env_path
```

activate virtual environment

- windows
  - **cmd**: `env_path/Scripts/activate.bat`
  - **PowerShell**: `env_path/Scripts/Activate.ps1`
- unix or MacOs
  - bash/zsh: `source env_path/bin/activate`
  - fish: `source env_path/bin/activate.fish`
  - csh/tcsh: `source env_path/bin/activate.csh`
  - PowerShell: `env_path/bin/Activate.ps1`

check current activated virtual environment

- linux

```shell
echo $VIRTUAL_ENV
```

- windows

```shell
$env:VIRTUAL_ENV
```

## Manage Package

Installed Packge List

```sh
python -m pip list
```

Install Package

- version number can be specified by `==version_number` after package name

```shell
python -m pip install numpy==1.1.0
```

Remove Package

- uninstall package1 package2

```sh
python -m pip uninstall package1 package2
```

## requirements.txt

Create Environment from `requirements.txt`

```shell
pip install -r requirements.txt
```

Write Current Environment to `requirements.txt`

```shell
pip freeze > requirements.txt
```

## how venvs work

- python interperter running from a virtual environment
- `sys.prefix` and `sys.exec_prefix` point to the virtual environment
- `sys.base_prefix` and `sys.base_exec_prefix` point to the base environment
- use `sys.prefix == sys.base_prefix` to determine if the current interpreter is running from a virtual environment

```py
sys.prefix == sys.base_prefix
```
