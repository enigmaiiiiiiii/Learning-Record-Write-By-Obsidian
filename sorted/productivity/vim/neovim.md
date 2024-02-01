# Neovim


## where config file locate

```
Unix       ~/.config/nvim/init.vim        (or init.lua)
Windows    ~/AppData/Local/nvim/init.vim  (or init.lua)
```

## Config

[Config](neovim-config.md)

## Plugins

[Plugins](neovim-plugins.md)

[write a plugin]

## Custom Functions

[Custom function](neovim-generate-toc-for-markdown.md)

## Neovim runtimepath

for example if `runtimepath` is `foo, bar`, and package.cpath is `./?.so;./?.dll`, `require('mod')` search paths is:

- foo/lua/mod.lua
- foo/lua/mod/init.lua
- bar/lua/mod.lua
- bar/lua/mod/init.lua
- foo/lua/mod.so
- foo/lua/mod.dll
- bar/lua/mod.so
- bar/lua/mod.dll

check runtimepath in lua api

```lua
vim.inspect(vim.api.nvim_list_runtime_paths())
```

check runtimepath with command

```vim
:set runtimepath?
```

## Command of nvim itself

```sh
nvim [options] [file ...]
```

[Command of nvim itself](neovim-command-nvim.md)

## Diff Mode

1. run command `nvim -d file1 file2` in shell
2. in neovim, run command `:diffs <filename>`

key mapping:

- `dp`: put changes from current window to another window
- `do`: get changes from another window to current window

## Blog

[module not found](neovim-module-not-found.md)

