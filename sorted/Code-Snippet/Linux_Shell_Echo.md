# echo

- `echo ${variable}`用来显示变量信息

```bash
#!/bin/bash

echo "current count is $USER, UID is $UID"
echo "current count root directory is $HOME"
echo "current work directory is $PWD"
echo "return a random number(0~32767): $RANDOM"
echo "current script name is $0"
echo "current script first args is $1"
```