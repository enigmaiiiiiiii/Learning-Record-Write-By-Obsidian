# Practical Command

## Check Port

查看所有端口

```bash
netstat -ano
```

查看指定端口

```bash
netstat -ano | findstr "8080"
```

## winget

## Get-Help 获得帮助文档

- Get-Help cmdlet 获得某个cmdlet的帮助文档
- Get-Help About_&lt;topic-name&gt;

## md

- make dir

## dir

- 显示目录中文件列表

## Directory Tree

- 显示目录树
- `tree /f` 显示文件

## print env variable

```shell
$env:VARIABLE_NAME
```