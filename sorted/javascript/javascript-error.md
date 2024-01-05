# Javascript - Error

> global object in javascript

## handling a specific error

```js
try {
  foo.bar();
} catch (e) {
  if (e instanceof TypeError) {
    // handle type error
  } else if (e instanceof RangeError) {
    // handle range error
  } else {
    // handle other errors
  }
}
```

## Error Types

## Custom Error

```js
class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
