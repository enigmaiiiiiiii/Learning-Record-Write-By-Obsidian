# Linux - Command xargs

## Used For What

- reads space, tab, newline and eof delimited string from **standard input**
- executes command with the strings as arguments

## Practical Use

rename all `*.txt` files to `*.txt.bak`

```sh
ls *.txt | xargs -I {} mv {} {}.bak
```

## Options

`-I replstr`

- take `replstr` as placeholder for input string and make new input with `replstr`

```sh
$ seq 5 | xargs -I {} echo "Number {}"
Number 1
Number 2
Number 3
Number 4
NUmber 5
```

`-t`

- echo the command to be executed to standard error


