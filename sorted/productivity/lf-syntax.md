# LF - Syntax

* [Comment](#comment)
* [map](#map)
* [cmap](#cmap)
* [cmd](#cmd)
* [no prefix](#no-prefix)
* [map to multiline command](#map-to-multiline-command)
* [Unbind Keys](#unbind-keys)
* [Unbind Command](#unbind-command)

## Comment

`#` for comment

4 special commands: `set`, `map`, `cmap`, `cmd`

- Command `set` is used to set an option which can be
  - boolean
  - integer
  - string

```sh
set hidden         # boolean enable
set hidden true    # boolean enable
set nohidden       # boolean disable
set hidden false   # boolean disable
```

## map

- `map` is used to bind a key to a command which can be
  - builtin command
  - custom command
  - shell command

```sh
map gh cd ~        # builtin command
map D trash        # custom command
map i $less $f     # shell command
map U !du -csh *   # waiting shell command
```

## cmap

`cmap` is used to bind a key on the

- command line to a command line command
- any other command:

```sh
cmap <c-g> cmd-escape
cmap <a-i> set incsearch!
```

## cmd

`cmd` is used to define a custom command:

```sh
cmd usage $du -h -d1 | less
```

## no prefix

If there is no [prefix](#prefixes) then ':' is assumed:

```sh
map zt set info time
```

An explicit ':' can be provided to group statements until a newline which is
especially useful for 'map' and 'cmd' commands:

```sh
map st :set sortby time; set info time
```

## map to multiline command

multiline you can wrap statements in '{{' and '}}' after the proper prefix.

```sh
map st :{{
    set sortby time
    set info time
}}
```

## Unbind Keys

```sh
map gh             # deletes 'gh' mapping
cmap <c-g>         # deletes '<c-g>' mapping
```

## Unbind Command

[Command](#command)

```sh
cmd trash          # deletes 'trash' command
```