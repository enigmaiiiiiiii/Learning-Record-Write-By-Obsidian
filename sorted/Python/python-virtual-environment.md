# Python Virtual Environment

## Virtual Env

创建虚拟环境， 指定虚拟环境目录为env_path

```shell
python -m venv env_path
```
activate virtual environment

- windows
  - cmd: `env_path/Scripts/activate.bat`
  - powershell: `env_path/Scripts/Activate.ps1`
- unix or MacOs
  - bash/zsh: `source env_path/bin/activate`
  - fish: `source env_path/bin/activate.fish`
  - csh/tcsh: `source env_path/bin/activate.csh`
  - PowerShell: `env_path/bin/Activate.ps1`

## manage package

Install Package

- 版本号通过名称后加`==版本号`来指定版本

```shell
python -m pip install numpy==1.1.0
```

Remove Package

- uninstall package1 package2

```shell
python uninstall package1 package2
```

## how venvs work

- python interperter running from a virtual environment
- `sys.prefix` and `sys.exec_prefix` point to the virtual environment
- `sys.base_prefix` and `sys.base_exec_prefix` point to the base environment
- use `sys.prefix == sys.base_prefix` to determine if the current interpreter is running from a virtual environment

```py
sys.prefix == sys.base_prefix
```