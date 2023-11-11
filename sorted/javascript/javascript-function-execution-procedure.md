# JavaScript Function Execution Procedure

example

```javascript
function compare(value1, value2) {
  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
    return 1;
  } else {
    return 0;
  }
}
let result = compare(5, 10);
```

When **defining** the `compare()` function

- It will create a [scope chain], **pre-load** the **global variable** object, and store it in the internal `[[Scope]]`.

When **calling** this function

- It will create a corresponding execution context, then create its scope chain by copying the function's `[[Scope]]`.
- Next, it will create the function's activation object (used as the variable object) and push it to the front of the scope chain.

> In this example, it means that the scope chain of the `compare()` function's execution context contains two variable objects: the local variable object and the global variable object.
> The scope chain is essentially a list containing pointers, each pointing to a variable object, but it does not physically contain the corresponding objects.

When the code inside the function accesses variables,

- It will look up variables in the scope chain using the provided names.
- After the function execution is complete, the local activation object will be destroyed, leaving only the global scope in memory.

