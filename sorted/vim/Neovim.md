# Neovim

## where config file locate

```
Unix       ~/.config/nvim/init.vim        (or init.lua)
Windows    ~/AppData/Local/nvim/init.vim  (or init.lua)
```

## packer

> Neovim中的插件管理工具

packer 提供的 command:

- `:PackerInstall`: 安装插件
- `:PackerClean`: 移除未使用或不能使用的插件
- `:PackerUpdate`: Clean and update
- `:PackerCompile`: 修改插件配置后, recompile才能生效
- `:PackerSync`: 执行 PackerUpdate 和 PackerCompile

## Nvimtree

## TeleScope

- 文件查找, 查看变量定义, 变量引用

command:

- `:Telescope find_files`: 查找文件