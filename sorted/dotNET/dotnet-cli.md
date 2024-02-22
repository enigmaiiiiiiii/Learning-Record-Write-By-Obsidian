# .NET - Command Line Interface

## What It Is

- Command line tools, used to build program like integrated development environment(Visual Studio and vscode)

> like [npm](nodejs-npm-cli.md) in nodejs

## install dotnet in linux 

```shell
wget https://download.visualstudio.microsoft.com/download/pr/c505a449-9ecf-4352-8629-56216f521616/bd6807340faae05b61de340c8bf161e8/dotnet-sdk-6.0.201-linux-x64.tar.gz

mkdir -p $HOME/dotnet && tar zxf dotnet-sdk-6.0.201-linux-x64.tar.gz -C $HOME/dotnet
```

## Add dotnet command permanently

Add following text to `~/.bashrc` 

```shell
export DOTNET_ROOT=$HOME/dotnet
export PATH=$PATH:$HOME/dotnet
```

## Set dotnet command output language

Set to English

```bash
setx DOTNET_CLI_UI_LANGUAGE en
```

- goto `dotnet/sdk/<version>`, delete language directory,  for example `zh-Hans`
