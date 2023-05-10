# NodeJS Readline

## Continuous Read Input

```js
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function readInput() {
  rl.qusetion('any key to continue(\'q\' to exit)', (input) => {
    if (input = 'q') {
      rl.close();
      return;
    }
    console.log(`Received: ${input}`);
  });
}

readInput();
```