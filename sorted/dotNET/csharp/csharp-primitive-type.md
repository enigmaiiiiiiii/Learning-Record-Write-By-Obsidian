# CSharp - Primitive Type

Godot includes analyzers that inspect c# source code and check for invalid or unsupported code. In VSCode, i can GD rules diagnostics raised, but in neovim with lsp server, i only see the diagnostics from omnisharp, not the GD rules diagnostics. what's the problem?

## Primitive Type

## Conversion

Implicit conversion

```c
int intValue = 10;
long longValue = intValue;  
```

Explicit cast

```c
double doubleValue = 3.14;
float floatValue = (float)doubleValue;

int intValue = (int)doubleValue;
```

