# Java - Installation

## Install JDK

linux

```bash
dnf search openjdk
sudo dnf install java-1.8.0-openjdk-devel
```

macos

```sh
brew install openjdk
```

- for the system java wrappers to find this JDK, symlink it with

```sh
sudo ln -sfn $HOMEBREW_PREFIX/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk
```

## Add JDK to PATH

> and jdk/bin to PATH

- In Linux

```shell
export PATH=jdk/bin:$PATH
```

- In Windows


