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

My Current Config

```conf
# set -g default-terminal "tmux-256color"
set -g default-terminal "xterm-256color"

# set -ga terminal-overrides ",*256col*:Tc"
set -ga terminal-overrides ",xterm-256color:Tc"

# action key
unbind C-b
set-option -g prefix C-t
set-option -g repeat-time 300
set-option -g focus-events on

# bind prefix
bind-key C-t send-prefix

## reload config
bind r source-file ~/.tmux.conf \; display "Reloaded!"

# resize panes
bind -r H resize-pane -L 5
bind -r J resize-pane -D 5
bind -r K resize-pane -U 5
bind -r L resize-pane -R 5

# display pane number
set -g base-index 1
set -g pane-base-index 1

# copy mode key binds
set -g mode-keys vi

bind p paste-buffer
bind-key -T copy-mode-vi v send-keys -X begin-selection
bind-key -T copy-mode-vi y send-keys -X copy-selection
bind-key -T copy-mode-vi C-v send-keys -X rectangle-toggle

# plugin
set -g @plugin 'tmux-plugin/tpm'
set -g @plugin 'tmux-plugins/tmux-sensible'
```

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
