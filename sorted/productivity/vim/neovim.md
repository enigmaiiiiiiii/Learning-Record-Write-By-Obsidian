# Neovim

## where config file locate

```
Unix       ~/.config/nvim/init.vim        (or init.lua)
Windows    ~/AppData/Local/nvim/init.vim  (or init.lua)
```

## Config

- Edit `~/.config/nvim/init.lua`
- To check config effect, `:source %` to reload config

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