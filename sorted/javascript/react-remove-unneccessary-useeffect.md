# Remove unnecessary useEffect

## caching expensive calculations

- unnecessary and inefficient

```js
function TodoList({ todos, filter }) {
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    setFilteredTodos(todos.filter(todo => todo.includes(filter)));
  }, [todos, filter]);

  // ...
}
```

- if you **don't want to recalculate** if some unrelated state variable like `newTodo` has change
  - [useMemo](react-hooks-usememo.md)

```js
import { useMemo, useState } from 'react';

function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState('');
  const visibleTodos = useMemo(() => {
    return getFilteredTodos(todos, filter);
  }, [todos, filter]);
}
```

## Resetting all state when a prop change

- inefficient because it will re-render

```js
export default function ProfilePage({ userId }) {
  const [comment, setCommend] = useSate('');

  useEffect(() => {
    setComment('')
  }, [userId]);
}
```

- instead

```js
export default function ProfilePage({ userId }) {
  return (
    <Profiel
      userid={userId}
      key={userId}
    />
  )
}

function Profile({ userId }) {
  // 
  const [comment, setCommend] = useState('');
}
```

## adjusting some state when a prop changes

for example reset `selection` to `null` whenever the `items` change

```js
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false);
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    setSelection(null);
  }, [items])
}
```

- Every time the `items` change, cause render with stale `selection`
- then run `useEffect`, the `setSelection(null)` will cause another re-render

adjust the state directly during rendering

```js
function List({ items }) {
  const [isReverse, setIsreverse] = useState(false);
  const [selection, setSelection] = useState(null);

  // store previous
  const [prevItems, setPrevitems] = useState(items);
  if (items !== prevItems) {
    setPrevItems(items);
    setSelection(null);
  }
  // ...
}
```

## Sharing logic between event handlers

this useEffect is unnecessary

```js
function ProductPage({ product, addToCart }) {
  useEffect(() => {
    if (product.isInCart) {
      showNotification(`Added ${product.name} to the shopping cart!`);
    }
  }, [product]);

  function handleBuyClick() {
    addToCart(product);
  }

  function handleCheckoutClick() {
    addToCart(product);
    navigate('/checkout');
  }
}
```

remove the unnecessary `useEffect`

```js
function ProductPage({ product, addToCart }) {

  function buyProduct() {
    addToCart(product);
    showNotification(`Added ${product.name} to the shopping cart!`);
  }

  function handleBuyClick() {
    buyProduct();
  }

  function handleCheckoutClick() {
    buyProduct();
    navigateTo('/checkout');
  }

}
```

## Sending a POST request

## Chains of computations

## Initializing the application

##
