# Linux Shell Programming - Flow Control

* [What Can Be Statement](#what-can-be-statement)
* [if statement](#if-statement)
* [case statement](#case-statement)
* [loop statement](#loop-statement)
* [while read loop](#while-read-loop)

## What Can Be Statement

- Command, like `ls -l`
- [expression](linux-shell-expressions.md)

## if statement

for [conditional expression](linux-shell-expressions.md#conditional-expressions) check

if...then...fi

```sh
if [expression]; then
  statement
fi
```

if...then...else...fi

```sh
if [expression]; then
  statement
else
  statement
fi
```

## case statement

```sh
case word in
  [patternA [| patternB]]...) command-list ;;
  [patternC [| patternD]]...) command-list ;;
esac
```

- execute the command list corresponding to the first pattern that matches the word
- pattern: [regex](regex.md) pattern
- command-list: like `echo "It's an apple."`

`script.sh`

```shell
fruit="apple"
case $fruit in
    "apple")
        echo "It's an apple."
        ;;
    "banana")
        echo "It's a banana."
        ;;
    *)
        echo "Unknown fruit."
        ;;
esac
```

- `*`: default case

## loop statement

`for i in list`

```sh
for fruit in apple banana orange; do
  echo "I like $fruit"
done
```

while loop

```sh
count = 1
while [ $count -le 5 ]; do
  echo "Count: $count"
  count=$((count + 1))
done
```

until loop

```sh
count=1
until [ $count -gt 5 ]; do
  echo "Count; $count"
  count=$((count + 1))
done
```

## while read loop

> [here is read in shell](linux-shell-read.md)

read a file

```sh
while read -r line; do
  echo "$line"
done < /etc/passwd
```

read from another process

```sh
awk '{print $2}' home/dir/file.txt | while read num do
  echo "Number: $num"
done
```
