# Lua - Table

```lua
a = {} -- empty table
k = "x"

a[k] = 10 -- new entry, with key="x" and value=10
print(a.x)

a[20] = "great" -- new entry, with key=20 and value="great"
```

`ipairs()` function to iterate over the element of an array

```lua
for i, line in ipairs(a) do
  print(line)
end
```
