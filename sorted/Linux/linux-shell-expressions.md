# Linux Shell Programmming - Expressions

* [Arithmetic Expression](#arithmetic-expression)
* [Evaluate Expression](#evaluate-expression)
* [Conditional Expressions](#conditional-expressions)
* [Extend Conditional Expressions](#extend-conditional-expressions)

## Arithmetic Expression

- double parentheses `(( ))` for arithmetic expression
- used to perform caculation

```sh
sum=$((1 + 2))
```

## Evaluate Expression

- use `expr` command to evaluate expression

```sh
sum=`expr 1 + 2`
```

> command in ["``"](linux-shell-variable.md#assign-value-to-variable-from-command) will assign command result to variable

## Conditional Expressions

- double brackets `[ ]` for condition expression

> space `' '` between `[` and `]` is required. eg. `[ $num1 -eq $num2 ]`

- usually use with [`if` statement or loops](linux-shell-flow-control.md)

```sh
if [ $num1 -eq $num2 ]; then
  echo "equal"
elif [ $num1 -gt $num2 ]; then
  echo "greater"
else
  echo "less"
fi
```

File Examines Options

- `[ -e file ]`   - True if file exists
- `[ -z string ]` - True if the length of string is zero
- `[ -f file ]`   - True if file exists and is a regular file
- `[ -n string ]` - True if the length of string is non-zero
- `[ -a file ]`   - True if file exists
- `[ -b file ]`   - True if file exists and is a [block special]() file
- `[ -c file ]`   - True if file exists and is a [character special]() file
- `[ -d file ]`   - True if file exists and is a directory
- `[ -h file ]`   - True if file exists and is a symbolic link
- `[ -x file ]`   - True if file exists and is executable

string compares operators

- `[ string1 = string2 ]`: true if strings are equal
- `[ string1 < string2 ]`: lexically less than

arithmetic operators

- `-eq`: compare two **integers** whether equal

## Extend Conditional Expressions

- `[[ ]]` for extended condition expression
- `if [[ [options] expression ]]; then ... fi`

options


