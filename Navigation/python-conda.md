# conda

## 创建环境

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

## 激活环境

激活myenv conda环境

```shell
conda activate myenv
```

## 网络问题

- 添加资源地址

```shell
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/
```