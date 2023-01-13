# Garbage Collection

index.html

``` html
<style>
  *, ::after, ::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  buton {
    width: 25%;
    height: 5%;
    background-color: #4C0F50;
  }

  #spinner {
    width: 100vw;
    height: 100vw;
    background-color: #aquamarine;
  }

</style>
<body>
  <button id="conservative">Conservative</button>
  <div id="spinner"></div>
  <button id="wasteful">Wasteful</button>
</body>
```

script.js

```js
import { rotate } from './anim.js';

const square = document.getElementById('spinner');
rotate(square);

const count = 10000000;

console.log(`Createing ${count} item array`);
const items = new Array(count);

for (let i = 0; i < count; i++) {
  items[i] = {
    counter: 0,
  }
}

console.log(items);

const conservativeButton = document.getElementById('conservative');

// conservase
conservativeButton.addEventListener('click', function conserver() {
  console.log('Conservative increment');
  for (const element of items) {
    element.counter = element.counter + 1;
  }
})

const wastefulButton = document.getElementById('wasteful');

// waste
wastefulButton.addEventListener('click', function waste() {
  console.log('Wasteful increment');
  for (let i = 0; i < count; i++) {
    items[i] = {
      counter: items[i].counter + 1,
    }
  }
})
```

anim.js

```js
export function rotate(element) {
  function update(time) {
    element.style.transform = `rotateZ(${time / 36}deg)`;
    requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}
```