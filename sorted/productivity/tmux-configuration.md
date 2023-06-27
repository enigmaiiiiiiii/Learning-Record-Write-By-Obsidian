# Tmux - Configuration

## Style

this style will set `text` color and background color

`#[fg=colour, bg=colour, attr]text`

- `fg` foreground color
- `bg` background color

## Format

Format is to set the display of status line

Format value is enclosed with `#{...}`


## My Config

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