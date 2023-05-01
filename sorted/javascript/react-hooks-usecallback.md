# React Hooks useCallback

## what is this

- react hook **cache a function definition** between **re-renders**

## Syntax

```js
const cachedFn = useCallback(fn ,dependencies)
```

parameter

- fn: function you want to cache
- dependencies
  - [reactive values](react-glossary.md#reactive-value) **inside `fn` code**
  - affect by [linter], Linter will verify that every reactvie value is specified as dependency

return

- return function fn

## Usage

```js
function ProductPage({ productId, referer, theme }) {
  function handleSubmit(orderDetails) {
    post('/product/' + productId + '/buy',{
      referrer,
      orderDetails
    });
  }

  return (
    <div classname={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}
```
