# LF - Key Mapping

* [Regular keys are assigned to a command](#regular-keys-are-assigned-to-a-command)
* [Special Keys](#special-keys)
* [Function Keys](#function-keys)
* [Mouse](#mouse)

## Regular keys are assigned to a command

```sh
map a down
```

## Special Keys

> for `space`, `tab`, `ctrl`

written in between `<` and `>` characters

- always use lowercase letters:

```sh
map <enter> down
```

`lt`, `gt` represent angle brackets

```sh
map <lt> down
map <gt> down
```

## Function Keys

> for `F1` to `F12`

Function keys are prefixed with `f` character:

```sh
map <f-1> down
```

Keys combined with the control key are prefixed with 'c' character:

```sh
map <c-a> down
```

bind `alt` key

```sh
map <a-k> down
```

> note that: some key combinations are not possible due to the way terminals work
> e.g. control and h combination sends a backspace key instead.

## Mouse

Mouse buttons are prefixed with 'm' character:

```sh
map <m-1> down  # primary
map <m-2> down  # secondary
map <m-3> down  # middle
map <m-4> down
map <m-5> down
map <m-6> down
map <m-7> down
map <m-8> down
```

Mouse wheel events are also prefixed with 'm' character:

```sh
    map <m-up>    down
    map <m-down>  down
    map <m-left>  down
    map <m-right> down
```