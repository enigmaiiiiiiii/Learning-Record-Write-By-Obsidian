# Tmux - Options

## What It is

- tmux options is about the **appearance** and **behaviour** of tmux

## Options Type

There are 4 types of option

1. [server option]()

- a set of global server options
- do not apply to any particular [session, window or pane](tmux-object.md)
- set with `set-option` command
- display with `tmux show -s` command

2. [session option](#session-option)
3. [window options](#window-options)
4. [pane options](#pane-options)

- each individual session may have a set of session options
- similarly, window and pane options may be set for each window and pane

## Set Options

Command

`set-option [-aFgopqsuw] [-t target-pane] option [value]`

`[-afgopqsuw]`

- `-p`: set a pane option
- `-w`: set a window option
- `-s`: set a session option

> tmux will infer the [options type](#options-type) from the option name

- `-F`: set [format value](tmux-format.md)
- `-o`: pervents setting an option that already has a value
- `-a`: appends a value to an existing option

```sh
set -g status-left "foo"
set -ag status-left "bar"
```

```sh
$ tmux show-options -g status-left
status-left "foobar"
```

## Show Current Options

`tmux show-options -[AgHpqsvw] [-t target-pane] [option]`

show global options

```sh
tmux show-options -g
```

show status-left global option

```sh
tmux show-options -g status-left
```

## Server Options

## Session Options

- `window-status-format`: set the [format](tmux-format.md) of the [window list](tmux-status-line.md)
- `window-status-current-format`: set the [format](tmux-format.md) of the current window

## Window Options

-

## Pane Options
