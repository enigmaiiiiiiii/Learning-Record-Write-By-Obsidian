# Lua - Operator

## Logical Operator

and

or

not

not not

- one purpose of `not not` is to convert a value to boolean
  - `nil` to `false`
  - other except `false` values to true

```lua
print(nil)  -- nil
print(not nil) -- true
print(not not nil) -- false
```

ternary operator

> equivalent to `a ? b : c` in C language

- `a and b or c`

## Length Operator

- `#` is the length operator in Lua
- can be used on [strings](), [tables](), and [arrays]()

```lua
local str = "Hello World"
print(#str) -- 11
```



