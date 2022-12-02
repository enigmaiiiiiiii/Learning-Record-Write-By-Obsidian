# Java环境安装

## 安装JDK

linux

```bash
dnf search openjdk
sudo dnf install java-1.8.0-openjdk-devel
```

## 环境设置

将jdk/bin目录增加到执行路径中

- Linux中

```shell
export PATH=jdk/bin:$PATH
```

- Windows中设置环境变量

