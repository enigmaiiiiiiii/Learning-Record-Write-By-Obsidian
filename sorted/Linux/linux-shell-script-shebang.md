# Linux Shell Script - Shebang

## What Is Shebang

- a character sequence: `#!`
- followed by the **path** of **interpreter**, like `#! /bin/bash`
- Used to indicate the **interpreter** for **executable text files or scripts**

## Take A Look

when `#! /bin/bash` at the top of a shell script

- the script will be executed by [**bash**](linux-bash.md) interpreter

```sh
#! /bin/sh
x=10
y=20
z=$((x+y)) # or z=`expr $x + $y`
echo $z
```

when `#! /bin/python` at the top of a shell script

- the script should write like this

```py
#! /bin/python
x = 10
y = 20
z = x + y
print(z)
```

## Advantage of /usr/bin/env

- it will search the interpreter in the `$PATH` environment variable
- make your script portable

when `#! /usr/bin/env python` at the top of a shell script

- it will search the **python** interpreter in the `$PATH` environment variable

*my confusion when reading this*

why use `#! /usr/bin/env python` is more portable than `#! /bin/python`?

- it is beacuse shebang followed by a **path** to indicate the interpreter
- **NOT A COMMAND**

`#! /usr/bin/env bash` is more portable than `#! /bin/bash`

```sh
#! /usr/bin/env bash
x=10
y=20
z=$((x+y)) # or z=`expr $x + $y`
echo $z
```

## Other Interpreters Example

you can use python interpreter to run `script.sh` write in python syntax

```sh
#! /usr/bin/env python3
x = 10
y = 20
z = x + y
print(z)
```
