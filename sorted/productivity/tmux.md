# Tmux

* [Usage](#usage)
* [config](#config)
* [default key bindings](#default-key-bindings)
* [basic object in tmux](#basic-object-in-tmux)
* [Plugin](#plugin)
* [Cheat Sheet](#cheat-sheet)

## Usage

`<prefix> [command]`

- `prefix` is `Ctrl + b` by default
- `[command]` is keys for tmux operation

## Config

[Tmux Configuration](tmux-configuration.md)

## Format

[Format](tmux-format.md)

## Options

[Tmux Options](tmux-options.md)

## Status Line

[tmux status line](tmux-status-line.md)

## default key bindings

switch window

- `<prefix> n`
- `<prefix> p`

## basic object in tmux

[tmux object](tmux-object.md)

## Plugin

plugin manager

(https://github.com/tmux-plugins/tpm)

install plugin

1. add plugin to `~/.tmux.conf`

```conf
set -g @plugin '...'
```

2. press `<prefix> I`(capital i) to install plugin

uninstalling plugin

1. remove plugin from `~/.tmux.conf`
2. press `<prefix> alt + u` to uninstall plugin

## Cheat Sheet

[tmux cheat sheet](tmux-cheat-sheet.md)
