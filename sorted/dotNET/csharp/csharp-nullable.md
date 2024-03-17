## CSharp - Nullable

- Can be created from any [value type]()
- Can not be created from a [reference type] or another nullable type
- Nullable and non-nullable types can be implicit converted to each other

```c
int? myNInt = 28;
```

`int?` is nullable type, `myNInt` is nullable variable

Assignment of a nullable type

- `??` operator: `myNInt ?? -1`, if myNInt is not null, keep the original value, otherwise assign -1

