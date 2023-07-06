# Linux - Get Stuck In Shell Programming

## `~` and `$HOME`

the critical difference between `~` and `$HOME` is that

```sh
echo ~
echo "~"
echo "$HOME"

echo ~/foo
echo "~/foo"
```

the output is

```
/home/username
~
/home/username
/home/username/foo
~/foo
```

more detail about `~`

- `~` is a **shell expansion**
- `~+` is the same as `$PWD`

