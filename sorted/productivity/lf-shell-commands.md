# LF - Shell Commands

For example, move selected file(s) to trash.

- A first attempt to write such a command may look like this:

```sh
cmd trash ${{
    mkdir -p ~/.trash
    if [ -z "$fs" ]; then
        mv "$f" ~/.trash
    else
        IFS="$(printf '\n\t')"; mv $fs ~/.trash
    fi
}}
```

check [`$fs`](lf-environment-variables.md) to see if there are any selected files.
Otherwise we just delete the current file. Since this is such a common pattern,
a separate `$fx` variable is provided.
We can use this variable to get rid of the conditional:

```sh
cmd trash ${{
    mkdir -p ~/.trash
    IFS="$(printf '\n\t')"; mv $fx ~/.trash
}}
```

The trash directory is checked each time the command is executed. We can move it
outside of the command so it would only run once at startup:

```sh
${{ mkdir -p ~/.trash }}
cmd trash ${{ IFS="$(printf '\n\t')"; mv $fx ~/.trash }}
```

Since these are one liners, we can drop '{{' and '}}':

```sh
$ mkdir -p ~/.trash
cmd trash $IFS="$(printf '\n\t')"; mv $fx ~/.trash
```

Finally note that we set `IFS` variable manually in these commands.
Instead we could use the `ifs` option to set it for all shell commands(i.e.  `set ifs "\n"`).
This can be especially useful for interactive use (e.g.  `$rm $f` or `$rm $fs` would simply work).
This option is not set by default as it can behave unexpectedly for new users.
However, use of this option is highly recommended and it is assumed in the rest of the documentation.