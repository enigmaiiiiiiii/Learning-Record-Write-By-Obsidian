# Color Science - Code

## Ansi Escape Code

- Is sequences of characters embedded in text
- To Control text formatting
- The color code range from 30 to 37 for foreground color and 40 to 47 for background color
  - 30:black
  - 31:red
  - 32:green
  - 33:yellow
  - 34:blue
  - 35:magenta
  - 36:cyan
  - 37:white
- 40 to 47 for background color
- syntax in characters sequence `\x1b[<code>m <text> \x1b[0m`
  - `\x1b[<code>m` is the color code
  - `\x1b[0m` is the reset code

```c
#include <stdio.h>

int main(void) {
    // Red text and blue background
    printf("\x1b[31m\x1b[44mHello, World]\n");  // 8bits
    printf("\x1b[38;2;255;100;0mTrue Color Text!\x1b[0m"); // 24-bit
}
```

24-bits color

- also called true color
