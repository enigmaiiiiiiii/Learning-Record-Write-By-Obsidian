# Lua - Package

## What Is Package In Lua

- lua package represented by [table](lua-table.md)

## Define A Package

```lua
cmp = {}
function cmp.eq(a, b) return a == b end
function cmp.lt(a, b) return a < b end
return cmp
```

- `cmp` acts as a package

## Require Function

[Require function](lua-require-function.md)

