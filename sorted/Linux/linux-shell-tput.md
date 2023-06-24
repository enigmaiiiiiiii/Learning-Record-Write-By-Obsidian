# Linux Shell - tput

## Practical Script

clear screen before displaying output

```sh
#!/bin/bash
tput clear
echo "Hello, World!"
```

move cursor to a specific position before displaying output

```sh
#!/bin/bash
tput cup 10 20
echo "Hello, World!"
```

display output with different colors and attributes

```sh
#!/bin/bash
tput setaf 1
echo "This text is red"
tput setaf 2
echo "This text is green"
tput bold
echo "This text is bold"
tput sgr0
echo "This text has default attributes"
```