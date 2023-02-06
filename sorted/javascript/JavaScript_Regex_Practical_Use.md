# JavaScript Regex Practical Use

## Find All Matches

- set regex with flag `g`
- use `exec` method

```js
const myRe = /ab*/g;
const str = "abbcdefabh";
let myArray;

while (myArray = myRe.exec(str)) {
  console.log(`Found ${myArray[0]}. Next starts at ${myRe.lastIndex}.`);
}
```

this follows cause infinit loop pitfalls(陷阱)

1. use regex literal or regex constructor instead of `myRe` in `while` loop
2. doesn't use `g` flag
3. match zero length characters(e.g. `/^/gm`)
