# then()

**Promise实例**状态改变时, 要执行的函数, 返回一个新的**Promise实例**

- promiseInstance.then(onResolved, onRejected)

## onResolved

- a function to be called when the `promiseInstance` is resolved
- this function has one parameter, the **resolved value** of `promiseInstance`
- 如果是单一值, 相当于`((x) => x)`

## onRejected

- a function to be called when the `promiseInstance` is **rejected** or an **error** is thrown

## Example

```js
const p1 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("Success!"); // Yay! Everything went well!
    }, 250);
});

p1.then(
    (successMessage) => {
        console.log("Yay! " + successMessage);
    },
    (errorMessage) => {
        console.error("Error: " + errorMessage);
    }
);
```
