# shell

## basic

[Echo](linux-shell-echo.md)

[Variable](linux-shell-variable.md)

[Operator](linux-shell-operator.md)

## execute

```sh
bash script.sh
```

## useful shell script

1. download file from ftp server

```sh
HOST = "192.168.0.104"      # Server's hostname
USER = "lapowner"           # Server login username
PASSWORD = "1234asdf@Z"     # Server login password

SOURCE = $1  # $1 first parameter of input
ALL_FILES="${@:2}"  # ${@:2} all parameter except first

# Begin input to FTP
ftp -inv $HOST <<EOF
user $USER $PASSWORD
cd $SOURCE
mget $ALL_FILES
bye
EOF  # End input to FTP
```

use it

```sh
./script.sh file1  # down file1
./script.sh *.c file1 # down file1 and *.c
```

