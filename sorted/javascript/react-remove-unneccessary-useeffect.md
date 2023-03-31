# Remove unnecessary useEffect

- [caching expensive calculations](#caching-expensive-calculations)
- [Resetting all state when a prop change](#resetting-all-state-when-a-prop-change)
- [adjusting some state when a prop changes](#adjusting-some-state-when-a-prop-changes)
- [Sharing logic between event handlers](#sharing-logic-between-event-handlers)
- [Sending a POST request](#sending-a-post-request)
- [Chains of computations](#chains-of-computations)
- [Initializing the application](#initializing-the-application)
- [Notifying parent components about state changes](#notifying-parent-components-about-state-changes)

## caching expensive calculations

- unnecessary and inefficient

```js
function TodoList({ todos, filter }) {
  const [filteredTodos, setFilteredTodos] = useState(todos);

  // 🔴 Avoid: redundant state and unnecessary Effect
  useEffect(() => {
    setFilteredTodos(todos.filter(todo => todo.includes(filter)));
  }, [todos, filter]);

  // ...
}
```

- remove the `useEffect`, write the calculation **on top level**

```js
function TodoList({todos, filter}) {
  const [newTodo, setNewToto] = useState('');

  const visibleTodos = getFilteredTodos(todos, filter);
}
```

> write on top level is based on getFilteredTodos is not expensive

- since **expensive cost**, you **don't want to recalculate**  when some unrelated state variable like `newTodo` has change
- then use [useMemo](react-hooks-usememo.md)

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

  // 🔴 Avoid: Resetting state on prop change in an Effect
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

  // ✅ This and any other state below will reset on key change automatically
  const [comment, setCommend] = useState('');
}
```

## adjusting some state when a prop changes

for example reset `selection` to `null` whenever the `items` change

```js
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false);
  const [selection, setSelection] = useState([]);

  // 🔴 Avoid: Adjusting state on prop change in an Effect
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

  // ✅ Best: Calculate everything during rendering
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
  // 🔴 Avoid: Event-specific logic inside an Effect
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

  // ✅ Good: Event-specific logic is called from event handlers
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

```js
functgion Form() {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');

  // ✅ Good: This logic should run because the component was displayed
  useEffect(() => {
    post('/analytics/event', { eventName: 'visit_form' });
  }, []);

  const [jsonToSummit, setJsonToSubmit] = useState(null);

  // 🔴 Avoid: Event-specific logic inside an Effect
  useEffect(() => {
    if(jsonToSubmit !== null) {
      post('/api/register', jsonToSubmit);
    }
  }, [jsonToSubmit]);

  function handleSubmit(e) {
    e.preventDefault();
    setJsonToSubmit({ firstName, lastName });
  }
}
```

- First useEffect is reasonable, `/analytics/event` is to analysis the form was displayed
- Second useEffect is to send the POST request when user trigger submit event
  - this is not a good idea

```js
function Form() {
  const [firstname, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');

  // ✅ Good: This logic runs because the component was displayed
  useEffect(() => {
    post('/analytics/event', { eventName: 'visit_form' });
  })

  // ✅ Good: Event-specific logic is in the event handler
  function handleSubmit(e) {
    e.preventDefault();
    post('/api/register', { firstName, lastName });
  }
}
```

conclusion:

- if post request is caused by user interaction, keep it in the vent handler

## Chains of computations

```js
function Game() {
  const [card, setCard] = useState(null);
  const [goldCardCount, setColdCardCount] = useState(0);
  const [round, setRound] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (card !== null && card.gold) {
      setGoldCardCount(c => c + 1);
    }
  }, [card]);

  useEffect(() => {
    if (goldCardCount > 3) {
      setRound(r => r + 1);
      setGoldCardCount(0);
    }
  }, [goldCardCount]);

  useEffect(() => {
    if (round > 5) {
      setIsGameOver(true);
    }
  }, [round]);

  useEffect(() => {
    alert('Good game!');
  }, [isGameOver]);

  function handlePlaceCard(nextCard) {
    if(isGameOver) {
      throw Error('Game already ended.');
    } else {
      setCard(nextCard);
    }
  }
}
```

in the worst case there are three unnecessary re-renders

- `setCard` -> render -> `setGoldCardCount` -> render -> `setRound` -> render -> `setIsGameOver` -> render

```js
function Game() {
  const [card, setCard] = useState(null);
  const [goldCardCount, setGoldCardCount] = useSate(0);
  const [round, setRound] = useState(1);

  // ✅ Calculate what you can during rendering
  const isGameOver = round > 5;

  function handlePlaceCard(nextCard) {
    if (isGameOver) {
      throw Error('Game already ended.');
    }

    // ✅ Calculate all the next state in the event handler
    setCard(nextCard);
    if(nextCard.gold) {
      if (goldCardCount <= 3) {
        setGoldCardCount(goldCardCount + 1);
      } else {
        setGoldCardCount(0);
        setRound(round + 1);
        if (routnd === 5) {
          alert('Goold game!');
        }
      }
    }
  }
}
```

## Initializing the application

## Notifying parent components about state changes

```js
function Toggle({ onChange }) {
  const [isOn, setIsOn] = useState(false);

  // 🔴 Avoid: The onChange handler runs too late
  useEffect(() => {
    onChange(isOn)
  }, [isOn, onChange]);

  function handleClick() {
    setIsOn(!isOn);
  }

  function handleDragEnd(e) {
    if (isCloserToRightEdge(e)) {
      setIsOn(true);
    } else {
      setIsOn(faluse);
    }
  }
}
```

```js
function Toggle({ onChange }) {
  const [isOn, setIsOn] = useState(false);

  // ✅ Good: Perform all updates during the event that caused them
  function updateToggle(nextIsOn) {
    setIsOn(nextIsOn);
    onChange(nextIsOn);
  }

  function handleClick() {
    updateToggle(!isOn);
  }

  functoin handleDragEnd(e) {
    if (isCloserToRightEdge(e)) {
      updateToggle(true);
    } else {
      updateToggle(false);
    }
  }
}
```

