# dnf

- next upcoming yum

```bash
dnf [options] [command] [package ...]
```

## options

`-y`: Automatically answer yes for all qquestions(自动确认)

## list installed package

```sh
dnf list installed
```

only list name of installed package

```sh
dnf list installed | awk '{print $1}'
```