# Neovim - nvim Command

## Open File Or Directory

- most common usage is to open a file or directory

```sh
nvim file/dir
```

## Execute lua script with neovim lua api

for file `foo.lua`:

```lua
local api = vim.api
```

use lua command to execute this file, error reported

```
$ nvim foo.lua
lua: foo.lua:1: attempt to index a nil value (global 'vim')
stack traceback:
        foo.lua:1: in main chunk
        [C]: in ?
```

use nvim command with -l options to execute this file, no error reported

```sh
nvim -l foo.lua
```

