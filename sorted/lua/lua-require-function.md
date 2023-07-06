# Lua - require function

* [What It Is](#what-it-is)
* [Feature](#feature)
* [LUA\_PATH](#lua_path)
* [package.path](#packagepath)
* [Search On Path](#search-on-path)
* [Who determine the search path](#who-determine-the-search-path)
* [Return Value](#return-value)

## What It Is

- to load and run libraries
- do the same job as [`dofile`](lua-built-in-functions.md) function, but has different mechanism and more features

## Feature

- controls whether a library has already been run to avoid running it twice

## LUA_PATH

- `require` first search `LUA_PATH`

## package.path

```lua
print(package.path)
```

- package.path is a string initialized by the environment variable [`LUA_PATH`](#lua_path)

## Search On Path

If A search path: `?;?.lua;c:\windows\?;/usr/local/lua/?/?.lua`

`require "foo"` will try to open the following files:

- `foo`
- `foo.lua`
- `c:\windows\foo`
- `/usr/local/lua/foo.lua`

## Who determine the search path

- first, the global variable `LUA_PATH` is checked `

## Return Value

add.lua

```lua
function add(a, b)
    return a + b
end
```

main.lua

```lua
local f = require "add"
sum = f.add(1, 2)
```

