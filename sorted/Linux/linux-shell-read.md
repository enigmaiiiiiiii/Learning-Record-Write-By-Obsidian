# Linux Shell Programming - read

* [Where Can Read From](#where-can-read-from)
* [Take A Look](#take-a-look)
* [Default Variable REPLY](#default-variable-reply)
* [Value Assigned To Multiple Variables](#value-assigned-to-multiple-variables)
* [Syntax](#syntax)

## Where Can Read From

read from standard input

```sh
read -p "Enter your name: " name
```

## Take A Look

```sh
read -p "Enter your name: " name
echo "Hello $name"
```

- `-p`: display prompt message
  - only display if input from terminal

## Default Variable REPLY

if no `name` suplied in above section, use input will assigned to `REPLY` variable

```sh
echo "What is your name?"
read
echo "Hello $REPLY!"
```

## Value Assigned To Multiple Variables

```sh
read -p "Enter your name: " first last
echo "Hello $first $last"
```

type `John Doe` when prompt display, the following will show

```sh
Enter your name: John Doe
Hello John Doe
```

## Syntax

`read [-ers] [-a aname] [-d delim] [-i text] [-n nchars] [-N nchars] [-p prompt] [-t timeout][-u fd] [name ...]`
