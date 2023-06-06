# Linux - dnf

## What It Is

- next upcoming yum

```bash
dnf [options] [command] [package ...]
```

## Options

`-y`: Automatically answer yes for all qquestions(自动确认)

## list installed package

```sh
dnf list installed
```

only list name of installed package

```sh
dnf list installed | awk '{print $1}'
```