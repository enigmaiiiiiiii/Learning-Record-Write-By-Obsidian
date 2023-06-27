# Tmux - Status Line

* [Consist Of Status Line](#consist-of-status-line)
* [How To Set status line Content Format](#how-to-set-status-line-content-format)
* [How To Set Status Line properties](#how-to-set-status-line-properties)
* [Styles](#styles)
* [window list](#window-list)

## Consist Of Status Line

- status-left
- [window list](#window-list)
- status-right

## How To Set status line Content Format

Format is about

- content
- foreground color
- background color

> write following content to `~/.tmux.conf` to see the effect

Set Status-left display simple text

```sh
set -g status-left "hello tmux status left"
```

Embedded Command, enclosed in `#(...)`

```sh
set -g status-left "#(uptime)"
```

Embedded [Styles](#styles)

- styles was enclosed with `#[...]`

```sh
set -g status-left "default #[fg=red] red #[fg=blue] blue"
```

## How To Set Status Line properties

properties include

- length
- ...

> also write in `~/.tmux.conf` to see the effect

set status line length

```sh
set -g status-left-length 20
```

## Styles

styles is about following properties

- `fg=colour`
- `bg=colour`
- `none`
- font style: `bold`, `underline`, `reverse`, `italic`, etc
- `fill=colour`: file available space
- `list=on`

## window list

