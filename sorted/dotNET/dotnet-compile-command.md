# dotnet命令

- 命令行工具，用于像集成开发环境(Visual Studio和vscode)一样构建程序
- javascript中的[npm](nodejs-npm.md)有很多相似的功能

[创建一个项目](dotnet-create-new-repository.md)

## Ubuntu中安装dotnet

```shell
wget https://download.visualstudio.microsoft.com/download/pr/c505a449-9ecf-4352-8629-56216f521616/bd6807340faae05b61de340c8bf161e8/dotnet-sdk-6.0.201-linux-x64.tar.gz

mkdir -p $HOME/dotnet && tar zxf dotnet-sdk-6.0.201-linux-x64.tar.gz -C $HOME/dotnet
```

## 永久添加dotnet命令

在文件`~/.bashrc`， 添加如下文本

```shell
export DOTNET_ROOT=$HOME/dotnet
export PATH=$PATH:$HOME/dotnet
```

在命令行输入，只能暂时添加dotnet命令

## 修改dotnet命令输出的提示信息的语言

设置为English

```bash
setx DOTNET_CLI_UI_LANGUAGE en
```

- goto `dotnet/sdk/<version>`, delete language directory,  for example `zh-Hans`