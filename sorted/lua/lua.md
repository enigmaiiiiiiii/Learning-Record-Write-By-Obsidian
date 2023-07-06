# lua

[Compile]()

[Fundamental](lua-fundamental.md)

[Metatable](lua-metatable.md)

[Object-Oriented Programming](lua-object-oriented-programming.md)

[Packages](lua-packages.md)


## pcall

```lua
pcall(f[, arg1, ···])
```

- error inside `f` will not be thrown
- `arg1...` is the arguments of `f`

return value

- 