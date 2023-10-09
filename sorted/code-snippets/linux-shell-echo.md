# Linux - echo

- `echo ${variable}`: print the value of variable
- `echo` doesn't read standard input

```bash
#!/bin/bash

echo "current count is $USER, UID is $UID"
echo "current count root directory is $HOME"
echo "current work directory is $PWD"
echo "return a random number(0~32767): $RANDOM"
echo "current script name is $0"
echo "current script first args is $1"
```
