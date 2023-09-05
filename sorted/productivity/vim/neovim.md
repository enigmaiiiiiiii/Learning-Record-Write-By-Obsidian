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

## Custom Functions

[Custom function](neovim-generate-toc-for-markdown.md)

## Diff Mode

1. run command `nvim -d file1 file2` in shell
2. in neovim, run command `:diffs <filename>`

key mapping:

- `dp`: put changes from current window to another window
- `do`: get changes from another window to current window


