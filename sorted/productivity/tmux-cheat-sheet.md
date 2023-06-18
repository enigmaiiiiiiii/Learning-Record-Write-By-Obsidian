# tmux shortcuts & cheatsheet

start new:

```sh
tmux
```

start new with session name:

```sh
tmux new -s myname
```

attach:

    tmux a  #  (or at, or attach)

attach to named:

    tmux a -t myname

list sessions:

    tmux ls

kill session:

    tmux kill-session -t myname

Kill all the tmux sessions:

    tmux ls | grep : | cut -d. -f1 | awk '{print substr($1, 0, length($1)-1)}' | xargs kill

In tmux, hit the prefix `ctrl+b` (my modified prefix is ctrl+a) and then:

## List all shortcuts

`<prefix> ?`

## Sessions

    :new<CR>  new session
    s  list sessions
    $  name session

## Windows (tabs)

    c  create window
    w  list windows
    n  next window
    p  previous window
    f  find window
    ,  name window
    &  kill window

## Panes

    %  vertical split
    "  horizontal split

    o  swap panes
    q  show pane numbers
    x  kill pane
    +  break pane into window (e.g. to select text by mouse to copy)
    -  restore pane from window
    ⍽  space - toggle between layouts
    <prefix> q (Show pane numbers, when the numbers show up type the key to goto that pane)
    <prefix> { (Move the current pane left)
    <prefix> } (Move the current pane right)
    <prefix> z toggle pane zoom

## Copy mode:

Pressing PREFIX [ places us in Copy mode. We can then use our movement keys to move our cursor around the screen. By default, the arrow keys work. we set our configuration file to use Vim keys for moving between windows and resizing panes so we wouldn’t have to take our hands off the home row. tmux has a vi mode for working with the buffer as well. To enable it, add this line to .tmux.conf:

    setw -g mode-keys vi

With this option set, we can use h, j, k, and l to move around our buffer.

To get out of Copy mode, we just press the ENTER key. Moving around one character at a time isn’t very efficient. Since we enabled vi mode, we can also use some other visible shortcuts to move around the buffer.

For example, we can use "w" to jump to the next word and "b" to jump back one word. And we can use "f", followed by any character, to jump to that character on the same line, and "F" to jump backwards on the line.

| Function              | vi          |
| --------------------- | ----------- |
| Back to indentation   | ^           |
| Clear selection       | Escape      |
| Copy selection        | Enter       |
| Cursor down           | j           |
| Cursor left           | h           |
| Cursor right          | l           |
| Cursor to bottom line | L           |
| Cursor to middle line | M           |
| Cursor to top line    | H           |
| Cursor up             | k           |
| Delete entire line    | d           |
| Delete to end of line | D           |
| End of line           | $           |
| Goto line             | :           |
| Half page down        | C-d         |
| Half page up          | C-u         |
| Next page             | C-f         |
| Next word             | w           |
| Paste buffer          | p           |
| Previous page         | C-b         |
| Previous word         | b           |
| Quit mode             | q           |
| Scroll down           | C-Down or J |
| Scroll up             | C-Up or K   |
| Search again          | n           |
| Search backward       | ?           |
| Search forward        | /           |
| Start of line         | 0           |
| Start selection       | Space       |

## Misc

    d  detach
    t  big clock
    ?  list shortcuts
    :  prompt

## Configurations Options:

    # Mouse support - set to on if you want to use the mouse
    * setw -g mode-mouse off
    * set -g mouse-select-pane off
    * set -g mouse-resize-pane off
    * set -g mouse-select-window off

    # Set the default terminal mode to 256color mode
    set -g default-terminal "screen-256color"

    # enable activity alerts
    setw -g monitor-activity on
    set -g visual-activity on

    # Center the window list
    set -g status-justify centre

    # Maximize and restore a pane
    unbind Up bind Up new-window -d -n tmp \; swap-pane -s tmp.1 \; select-window -t tmp
    unbind Down
    bind Down last-window \; swap-pane -s tmp.1 \; kill-window -t tmp

