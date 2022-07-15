# Python环境

## python命令设置环境

### 虚拟环境

创建虚拟环境， 指定虚拟环境目录为env_path

```shell
python -m venv env_path
```
启动虚拟环境

- win

```shell
env_path\Scripts\activate.bat
```

- unix or MacOs

source env_path/bin/activate

### 管理package

安装package

- 版本号通过名称后加`==版本号`来指定版本

```shell
python -m pip install numpy==1.1.0
```

删除package

- uninstall后加一个或多个package名称

```shell
python uninstall package1 package2
```

## conda

### 创建环境


```shell
conda create -n myenv python=3.9 # 创建myenv环境并指定python版本为3.9
conda create -n myenv scipy=0.17.3 # 创建myenv环境并指定package scipy版本
```

在指定位置创建环境

```shell
conda create -p <env-path> jupyterlab=3.2 matplotlib=3.5 numpy=1.21 
```

通过environment.yml文件创建环境

```shell
conda env create -f environment.yml
```

### 激活环境

激活myenv conda环境

```shell
conda activate myenv
```

### 网络问题

- 添加资源地址

```shell
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/
```