# Neovim - Module Not Found Problem

* [Error Message](#error-message)
* [Who Cause This Problem](#who-cause-this-problem)
* [Detail Of My Code](#detail-of-my-code)
* [Why](#why)
* [Related Knowledge](#related-knowledge)

## Error Message

Something Like That

```
E5113: Error while calling lua chunk: /home/cau/.config/nvim/lua/pluginlist/plugin-name.lua:1: module 'plugin-name' not found:
    no field package.preload['packer']
    no file '/usr/share/luajit-2.1.0-beta3/packer.lua'
    no file '/usr/local/share/lua/5.1/packer.lua'
    no file '/usr/local/share/lua/5.1/packer/init.lua'
    no file '/usr/share/lua/5.1/packer.lua'
    no file '/usr/share/lua/5.1/packer/init.lua'
    no file './packer.lua'
    no file '/usr/local/share/lua/5.1/packer.so'
    no file '/usr/lib/x86_64-linux-gnu/lua/5.1/packer.so'
    no file '/usr/lib/lua/5.1/packer.so'
    no file '/usr/local/lib/lua/5.1/packer.so'
    no file '/usr/lib/x86_64-linux-gnu/lua/5.1/loadall.so'
    no file './packer.so'
```

## Who Cause This Problem

- happened on loaded plugin neovim lua api
- cause by expression `require('plugin-name')`

## Detail Of My Code

my `.config/nvim/lua/pluginconfig/some-plugin.lua` write like that

```lua
local some_plugin = require('some-plugin')
```

my `.config/nvim/init.lua` write like that

```lua
require('pluginconfig.keymaps')

-- require('pluginconfig.some-plugin')  -- ①  

require('pluginconfig.lazynvim')

require('pluginconfig.some-plugin')  -- ②
```


if write like ①, it will cause error message like above

② : is the right way to loaded plugin by lazy.nvim

## Why

conclusion: 

1. **lazy.nvim plugin manager will change the neovim runtimepath**
2. [lua `package.path`](lua-require-function.md#package.path) is not identical to [neovim runtimepath](neovim.md#neovim-runtimepath)

check runtimepath like that

add `print(vim.inspect(vim.api.nvim_list_runtime_paths())` in `.config/nvim/init.lua`)

```lua
require('pluginconfig.keymaps')
print('runtimepath before lazy.nvim loaded:\n' .. vim.inspect(vim.api.nvim_list_runtime_paths()))
require('pluginconfig.lazynvim')
print('runtimepath after lazy.nvim loaded:\n' .. vim.inspect(vim.api.nvim_list_runtime_paths()))
```

when open neovim, get following message

```
runtimepath before lazy.nvim loaded: 
{ "/Users/username/.config/nvim", "/Users/username/.local/share/nvim/site", "/opt/homebrew/Cellar/neovim/0.9.1/share/nvim/runtime", "/opt/homebrew/Cella r/neovim/0.9.1/lib/nvim" } 
runtimepath after lazy.nvim loaded:
{ "/Users/username/.config/nvim", "/Users/username/.local/share/nvim/site", "/Users/username/.local/share/nvim/lazy/lazy.nvim", "/Users/username/.local/s hare/nvim/lazy/nvim-cmp", "/Users/username/.local/share/nvim/lazy/telescope.nvim", "/Users/username/.local/share/nvim/lazy/cmp-cmdline", "/Users/username/.local/share/nvim/lazy/cmp -path", "/Users/username/.local/share/nvim/lazy/mini-functions.nvim", "/Users/username/.local/share/nvim/lazy/cmp_luasnip", "/Users/username/.local/share/nvim/lazy/nvim-tree.lua", ... }
```

there are lot of new path with prefix `/Users/username/.local/share/nvim/lazy/` added to runtimepath

## Related Knowledge

- function `vim.api.nvim_list_runtime_paths()` check neovim runtimepath in lua code
- neovim [runtime path](neovim.md#neovim-runtimepath)
- [lua package search path](lua-require-function.md#search-paths)

