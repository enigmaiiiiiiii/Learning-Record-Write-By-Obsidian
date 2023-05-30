# Linux - Tricks

* [grep](#grep)
* [get last command output](#get-last-command-output)
* [let command output as another command's parameter](#let-command-output-as-another-commands-parameter)
## grep

- use for searching and filtering text based on patterns

## get last command output

use `!!` to get last command output

```sh
echo "hello world"
```

then `echo !!` will

```sh
echo !!
```

## let command output as another command's parameter

use `$(command)` to get command output

- for example, use `date` command to get current date

```sh
echo "Today is $(date)"
```

remove related package

```sh
sudo apt remove $(dpkg-query --show --showformat='${Package}\n' | grep -i 'package-name')
```

## jump back to previous directory

```sh
cd -
```

back to two more previous directory

```sh
cd ~2
```

