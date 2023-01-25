# Windows Terminal

## PowerLine

[Windows Terminal Powerline设置教程](https://docs.microsoft.com/zh-cn/windows/terminal/tutorials/powerline-setup)

> Import-Module posh-git

```
Import-Module oh-my-posh
Set-PoshPrompt Paradox
Set-PSReadLineKeyHandler -Key Tab -Function Complete
```

## PowerShell命令


## Windows Terminal快捷键

- `Alt + shift + '+'` 右侧新建窗口
- `Alt + shift + '-'` 下侧新建窗口

## oh my posh

set theme

1. create profile first

```
New-Item -Path $PROFILE -Type File -Force
```

2. edit $PROFILE, add following code

```ps
oh-my-posh init pwsh --config ~/theme-name.omp.json | Invoke-Expression
```

- `theme-name`: 主题名称
