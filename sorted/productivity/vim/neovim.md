# Neovim

## where config file locate

```
Unix       ~/.config/nvim/init.vim        (or init.lua)
Windows    ~/AppData/Local/nvim/init.vim  (or init.lua)
```

## packer

> Plugin manager in neovim

commands provided by packer:

- `:PackerInstall`: Install plugins
- `:PackerClean`: remove unused plugins
- `:PackerUpdate`: Clean and update
- `:PackerCompile`: after modify the plugin config, recompile to make it work
- `:PackerSync`: execute `PackerUpdate` and `PackerCompile` in one

## Nvimtree

## TeleScope

command:

- `:Telescope find_files`: 查找文件