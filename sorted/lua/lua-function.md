# Lua - Function

## Define a Function

```lua
function foo(a)
  -- function body
end
```

## Call a Function

regular function call

```lua
function foo(a)
  print(a)
end
foo("hello")
```

special call for parameter is a string literal

```lua
foo "hello"  -- equal to foo("hello")
```

special call for parameter is a table constructor

```lua
foo{a=1, b=2}  -- equal to foo({a=1, b=2})
```

## Multiple Result

get multiple result

```lua
s, e = string.find("hello Lua users", "Lua")
print(s, e)  -- 7 9
```

write a function return multiple result

```lua
-- return the maximum and the index in an array
function maximum(a)
  local mi = 1 -- maximum index
  local m = a[mi] -- maximum value
  for i, val in ipairs(a) do
    if val > m then
      mi = i
      m = val
    end
  end
  return m, mi
end
```

## Multiple Assignment

```lua
function foo0 () end                  -- returns no results
function foo1 () return 'a' end       -- returns 1 result
function foo2 () return 'a','b' end   -- returns 2 results
```

Function call is not the last element always produce one result

```lua
x, y = foo2(), 20                     -- x='a', y=20
```

multiple assignment appear in another 3 places

- arguments to function
- [table constructors](lua-table.md)
- return statement

## unpack function

> seems like [spread operator in JavaScript](javascript-spread-syntax.md)

- receive an array and return its elements as multiple results

```lua
a, b = unpack{10, 20, 30}  -- a=10, b=20, 30 is discarded
```

## variable number of arguments

- `...` to receive a variable number of arguments

```lua
function foo(...)
  -- ...
  for i, v in ipairs(arg) do
    print(v)
  end
end
```

- hidden parameter `arg` collected in a **table**

