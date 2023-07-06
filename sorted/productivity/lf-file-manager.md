# LF

- [What It Is](#what-it-is)
- [Quick Reference](#quick-reference)
- [Configuration](#configuration)
- [Commands](#commands)
- [Command Line Commands](#command-line-commands)
- [Options](#options)
- [Environment Variables](#environment-variables)
- [Special Commands](#special-commands)
- [Prefixes](#prefixes)
- [Syntax](#syntax)
- [Key Mappings](#key-mappings)
- [Push Mappings](#push-mappings)
- [Shell Commands](#shell-commands)
- [Piping Shell Commands](#piping-shell-commands)
- [Waiting Shell Commands](#waiting-shell-commands)
- [Asynchronous Shell Commands](#asynchronous-shell-commands)
- [Remote Commands](#remote-commands)
- [File Operations](#file-operations)
- [Searching Files](#searching-files)
- [Opening Files](#opening-files)

## What It Is

- A terminal file manager

## Quick Reference

[lf commands](lf-commands.md)

|      |             |
| ---- | ----------- |
| quit | default 'q' |
| up   | default 'k' |
| ...  | ...         |

[command line commands](lf-command-line-commands.md)

|              |                 |
| ------------ | --------------- |
| cmd-escape   | default `<esc>` |
| cmd-complete | default `<tab>` |
| ...          | ...             |

[lf behavior]()

|        |      |         |
| ------ | ---- | ------- |
| hidden | bool | default |
| ...    | ...  | ...     |

- for example, write following text in `~/.config/lf/lfrc` will set file with prefix `.` displayed

```sh
set hidden true
```

[environment variables](lf-environment-variables.md)

- f
- fs
- fx
- id
- PWD
- OLDPWD
- ...

[special shell commands](lf-special-shell-commands.md)

- open
- paste
- rename
- delete
- pre-cd
- ...

default key bindings

```sh
cmd open &$OPENER "$f"
map e $$EDITOR "$f"
map i $$PAGER "$f"
map w $$SHELL
cmd doc $$lf -doc | $PAGER
map <f-1> doc
map zh set hidden!
map zr set reverse!
map zn set info
map zs set info size
map zt set info time
map za set info size:time
map sn :set sortby natural; set info
map ss :set sortby size; set info size
map st :set sortby time; set info time
map sa :set sortby atime; set info atime
map sc :set sortby ctime; set info ctime
map se :set sortby ext; set info
map gh cd ~
map <space> :toggle; down
```

## Configuration

configuration file `~/.config/lf/lfrc`

- generate default config

```sh
mkdir -p ~/.config/lf
curl https://raw.githubusercontent.com/gokcehan/lf/master/etc/lfrc.example -o ~/.config/lf/lfrc
```

Colors file `~/.config/lf/colors`

- generate default color config

```sh
mkdir -p ~/.config/lf
curl https://raw.githubusercontent.com/gokcehan/lf/master/etc/colors.example -o ~/.config/lf/colors
```

Icons file `~/.config/lf/icons`

- default icons config

```sh
curl https://raw.githubusercontent.com/gokcehan/lf/master/etc/icons.example -o ~/.config/lf/icons
```

Selections file `~/.local/share/lf/files`

Marks file `~/.local/sharelf/marks`

Tags file `~/.local/share/lf/tags`

History file `~/.local/share/lf/history`

## Commands

[Commands](lf-commands.md)

## Command Line Commands

[Command Line Commands](lf-command-line-commands.md)

## Options

## Environment Variables

[Environment Variables](lf-environment-variables.md)

## Special Commands

[Special Commands](lf-special-shell-commands.md)

## Prefixes

|     |                |                                      |
| --- | -------------- | ------------------------------------ |
| :   | read (default) | builtin/custom command               |
| $   | shell          | shell command                        |
| %   | shell-pipe     | shell command running with the ui    |
| !   | shell-wait     | shell command waiting for key press  |
| &   | shell-async    | shell command running asynchronously |

## Syntax

[Syntax](lf-syntax.md)

## Key Mappings

[key Mapping](lf-key-mapping.md)

## Push Mappings

provide a ways to

- to remap keys
- or map to a command with a command with arguments

1. it can be used to map a command with a command count

```sh
map <c-j> push 10j
```

2. avoid typing the name when a command takes arguments:

```sh
map r push :rename<space>
```

be careful with 'push' command recursive bindings

```sh
map j push 2j
```

- These types of bindings create a deadlock when executed.

## Shell Commands

[Shell Commands](lf-shell-commands.md)

## Piping Shell Commands

Regular shell commands have some limitations in some cases.
When an output or error message is given and the command exits afterwards,
the ui is immediately resumed and there is no way to see the message without dropping to shell again.
Also, even when there is no output or error, the ui still needs to be paused while the command is running.
This can cause flickering on the screen for short commands and similar distractions for longer commands.

Instead of pausing the ui, piping shell commands connects stdin, stdout,
and stderr of the command to the statline in the bottom of the ui.
This can be useful for programs following the Unix philosophy to give no output in the success case, and brief error messages or prompts in other cases.

For example, following rename command prompts for overwrite in the statline if
there is an existing file with the given name:

```sh
cmd rename %mv -i $f $1
```

You can also output error messages in the command and it will show up in the
statline. For example, an alternative rename command may look like this:

```sh
cmd rename %[ -e $1 ] && printf "file exists" || mv $f $1
```

Note that input is line buffered and output and error are byte buffered.

## Waiting Shell Commands

Waiting shell commands are similar to regular shell commands except that they
wait for a key press when the command is finished. These can be useful to see
the output of a program before the ui is resumed. Waiting shell commands are
more appropriate than piping shell commands when the command is verbose and the
output is best displayed as multiline.

## Asynchronous Shell Commands

Asynchronous shell commands are used to start a command in the background and
then resume operation without waiting for the command to finish. Stdin, stdout,
and stderr of the command is neither connected to the terminal nor to the ui.

## Remote Commands

One of the more advanced features in lf is remote commands. All clients connect
to a server on startup. It is possible to send commands to all or any of the
connected clients over the common server. This is used internally to notify file
selection changes to other clients.

To use this feature, you need to use a client which supports communicating with
a Unix domain socket. OpenBSD implementation of netcat (nc) is one such example.
You can use it to send a command to the socket file:

    echo 'send echo hello world' | nc -U ${XDG_RUNTIME_DIR:-/tmp}/lf.${USER}.sock

Since such a client may not be available everywhere, lf comes bundled with a
command line flag to be used as such. When using lf, you do not need to specify
the address of the socket file. This is the recommended way of using remote
commands since it is shorter and immune to socket file address changes:

    lf -remote 'send echo hello world'

In this command 'send' is used to send the rest of the string as a command to
all connected clients. You can optionally give it an id number to send a command
to a single client:

    lf -remote 'send 1234 echo hello world'

All clients have a unique id number but you may not be aware of the id number
when you are writing a command. For this purpose, an '$id' variable is exported
to the environment for shell commands. The value of this variable is set to the
process id of the client. You can use it to send a remote command from a client
to the server which in return sends a command back to itself. So now you can
display a message in the current client by calling the following in a shell
command:

    lf -remote "send $id echo hello world"

Since lf does not have control flow syntax, remote commands are used for such
needs. For example, you can configure the number of columns in the ui with
respect to the terminal width as follows:

    cmd recol %{{
        if [ $lf_width -le 80 ]; then
            lf -remote "send $id set ratios 1:2"
        elif [ $lf_width -le 160 ]; then
            lf -remote "send $id set ratios 1:2:3"
        else
            lf -remote "send $id set ratios 1:2:3:5"
        fi
    }}

Besides 'send' command, there is a 'quit' command to quit the server when there
are no connected clients left, and a 'quit!' command to force quit the server by
closing client connections first:

    lf -remote 'quit'
    lf -remote 'quit!'

Lastly, there is a 'conn' command to connect the server as a client. This should
not be needed for users.

## File Operations

lf uses its own builtin copy and move operations by default. These are
implemented as asynchronous operations and progress is shown in the bottom
ruler. These commands do not overwrite existing files or directories with
the same name. Instead, a suffix that is compatible with '--backup=numbered'
option in GNU cp is added to the new files or directories. Only file modes are
preserved and all other attributes are ignored including ownership, timestamps,
context, and xattr. Special files such as character and block devices, named
pipes, and sockets are skipped and links are not followed. Moving is performed
using the rename operation of the underlying OS. For cross-device moving,
lf falls back to copying and then deletes the original files if there are no
errors. Operation errors are shown in the message line as well as the log file
and they do not preemptively finish the corresponding file operation.

File operations can be performed on the current selected file or alternatively
on multiple files by selecting them first. When you 'copy' a file, lf doesn't
actually copy the file on the disk, but only records its name to a file.
The actual file copying takes place when you 'paste'. Similarly 'paste' after a
'cut' operation moves the file.

You can customize copy and move operations by defining a 'paste' command. This
is a special command that is called when it is defined instead of the builtin
implementation. You can use the following example as a starting point:

    cmd paste %{{
        load=$(cat ~/.local/share/lf/files)
        mode=$(echo "$load" | sed -n '1p')
        list=$(echo "$load" | sed '1d')
        if [ $mode = 'copy' ]; then
            cp -R $list .
        elif [ $mode = 'move' ]; then
            mv $list .
            rm ~/.local/share/lf/files
            lf -remote 'send clear'
        fi
    }}

Some useful things to be considered are to use the backup ('--backup') and/or
preserve attributes ('-a') options with 'cp' and 'mv' commands if they support
it (i.e. GNU implementation), change the command type to asynchronous, or use
'rsync' command with progress bar option for copying and feed the progress to
the client periodically with remote 'echo' calls.

By default, lf does not assign 'delete' command to a key to protect new users.
You can customize file deletion by defining a 'delete' command. You can also
assign a key to this command if you like. An example command to move selected
files to a trash folder and remove files completely after a prompt are provided
in the example configuration file.

## Searching Files

There are two mechanisms implemented in lf to search a file in the current
directory. Searching is the traditional method to move the selection to a file
matching a given pattern. Finding is an alternative way to search for a pattern
possibly using fewer keystrokes.

Searching mechanism is implemented with commands 'search' (default '/'),
'search-back' (default '?'), 'search-next' (default 'n'), and 'search-prev'
(default 'N'). You can enable 'globsearch' option to match with a glob pattern.
Globbing supports '\*' to match any sequence, '?' to match any character, and
'[...]' or '[^...] to match character sets or ranges. You can enable 'incsearch'
option to jump to the current match at each keystroke while typing. In this
mode, you can either use 'cmd-enter' to accept the search or use 'cmd-escape'
to cancel the search. You can also map some other commands with 'cmap' to
accept the search and execute the command immediately afterwards. For example,
you can use the right arrow key to finish the search and open the selected file
with the following mapping:

    cmap <right> :cmd-enter; open

Finding mechanism is implemented with commands 'find' (default 'f'), 'find-back'
(default 'F'), 'find-next' (default ';'), 'find-prev' (default ','). You can
disable 'anchorfind' option to match a pattern at an arbitrary position in the
filename instead of the beginning. You can set the number of keys to match using
'findlen' option. If you set this value to zero, then the the keys are read
until there is only a single match. Default values of these two options are set
to jump to the first file with the given initial.

Some options effect both searching and finding. You can disable 'wrapscan'
option to prevent searches to wrap around at the end of the file list. You can
disable 'ignorecase' option to match cases in the pattern and the filename.
This option is already automatically overridden if the pattern contains upper
case characters. You can disable 'smartcase' option to disable this behavior.
Two similar options 'ignoredia' and 'smartdia' are provided to control matching
diacritics in latin letters.

## Opening Files

You can define a an 'open' command (default 'l' and '<right>') to configure file
opening. This command is only called when the current file is not a directory,
otherwise the directory is entered instead. You can define it just as you would
define any other command:

    cmd open $vi $fx

It is possible to use different command types:

    cmd open &xdg-open $f

You may want to use either file extensions or mime types from 'file' command:

    cmd open ${{
        case $(file --mime-type -Lb $f) in
            text/*) vi $fx;;
            *) for f in $fx; do xdg-open $f > /dev/null 2> /dev/null & done;;
        esac
    }}

You may want to use 'setsid' before your opener command to have persistent
processes that continue to run after lf quits.

Regular shell commands (i.e. '$') drop to terminal which results in a flicker
for commands that finishes immediately (e.g. 'xdg-open' in the above example).
If you want to use asynchronous shell commands (i.e. '&') but also want to use
the terminal when necessary (e.g. 'vi' in the above exxample), you can use a
remote command:

```sh
    cmd open &{{
        case $(file --mime-type -Lb $f) in
            text/*) lf -remote "send $id \$vi \$fx";;
            *) for f in $fx; do xdg-open $f > /dev/null 2> /dev/null & done;;
        esac
    }}
```

Note, asynchronous shell commands run in their own process group by default so
they do not require the manual use of 'setsid'.

Following command is provided by default:

    cmd open &$OPENER $f

You may also use any other existing file openers as you like. Possible options
are 'libfile-mimeinfo-perl' (executable name is 'mimeopen'), 'rifle' (ranger's
default file opener), or 'mimeo' to name a few.

# Previewing Files

lf previews files on the preview pane by printing the file until the end or
the preview pane is filled. This output can be enhanced by providing a custom
preview script for filtering. This can be used to highlight source codes,
list contents of archive files or view pdf or image files to name a few.
For coloring lf recognizes ansi escape codes.

In order to use this feature you need to set the value of 'previewer' option
to the path of an executable file. Five arguments are passed to the file,
(1) current file name, (2) width, (3) height, (4) horizontal position,
and (5) vertical position of preview pane respectively. Output of the execution
is printed in the preview pane. You may also want to use the same script in your
pager mapping as well:

    set previewer ~/.config/lf/pv.sh
    map i $~/.config/lf/pv.sh $f | less -R

For 'less' pager, you may instead utilize 'LESSOPEN' mechanism so that useful
information about the file such as the full path of the file can still be
displayed in the statusline below:

    set previewer ~/.config/lf/pv.sh
    map i $LESSOPEN='| ~/.config/lf/pv.sh %s' less -R $f

Since this script is called for each file selection change it needs to be as
efficient as possible and this responsibility is left to the user. You may
use file extensions to determine the type of file more efficiently compared to
obtaining mime types from 'file' command. Extensions can then be used to match
cleanly within a conditional:

    #!/bin/sh

    case "$1" in
        *.tar*) tar tf "$1";;
        *.zip) unzip -l "$1";;
        *.rar) unrar l "$1";;
        *.7z) 7z l "$1";;
        *.pdf) pdftotext "$1" -;;
        *) highlight -O ansi "$1";;
    esac

Another important consideration for efficiency is the use of programs with short
startup times for preview. For this reason, 'highlight' is recommended over
'pygmentize' for syntax highlighting. Besides, it is also important that the
application is processing the file on the fly rather than first reading it to
the memory and then do the processing afterwards. This is especially relevant
for big files. lf automatically closes the previewer script output pipe with a
SIGPIPE when enough lines are read. When everything else fails, you can make use
of the height argument to only feed the first portion of the file to a program
for preview. Note that some programs may not respond well to SIGPIPE to exit
with a non-zero return code and avoid caching. You may add a trailing '|| true'
command to avoid such errors:

    highlight -O ansi "$1" || true

You may also use an existing preview filter as you like. Your system may already
come with a preview filter named 'lesspipe'. These filters may have a mechanism
to add user customizations as well. See the related documentations for more
information.

# Changing Directory

lf changes the working directory of the process to the current directory so
that shell commands always work in the displayed directory. After quitting,
it returns to the original directory where it is first launched like all shell
programs. If you want to stay in the current directory after quitting, you can
use one of the example lfcd wrapper shell scripts provided in the repository at
https://github.com/gokcehan/lf/tree/master/etc

There is a special command 'on-cd' that runs a shell command when it is defined
and the directory is changed. You can define it just as you would define any
other command:

    cmd on-cd &{{
        # display git repository status in your prompt
        source /usr/share/git/completion/git-prompt.sh
        GIT_PS1_SHOWDIRTYSTATE=auto
        GIT_PS1_SHOWSTASHSTATE=auto
        GIT_PS1_SHOWUNTRACKEDFILES=auto
        GIT_PS1_SHOWUPSTREAM=auto
        git=$(__git_ps1 " (%s)") || true
        fmt="\033[32;1m%u@%h\033[0m:\033[34;1m%d\033[0m\033[1m%f$git\033[0m"
        lf -remote "send $id set promptfmt \"$fmt\""
    }}

If you want to print escape sequences, you may redirect 'printf' output to
'/dev/tty'. The following xterm specific escape sequence sets the terminal title
to the working directory:

    cmd on-cd &{{
        printf "\033]0; $PWD\007" > /dev/tty
    }}

This command runs whenever you change directory but not on startup. You can add
an extra call to make it run on startup as well:

    cmd on-cd &{{ ... }}
    on-cd

Note that all shell commands are possible but '%' and '&' are usually more
appropriate as '$' and '!' causes flickers and pauses respectively.

There is also a 'pre-cd' command, that works like 'on-cd', but is run before the
directory is actually changed.

# Colors

lf tries to automatically adapt its colors to the environment. It starts with
a default colorscheme and updates colors using values of existing environment
variables possibly by overwriting its previous values. Colors are set in the
following order:

1.  default
2.  LSCOLORS (Mac/BSD ls)
3.  LS_COLORS (GNU ls)
4.  LF_COLORS (lf specific)
5.  colors file (lf specific)

Please refer to the corresponding man pages for more information about
'LSCOLORS' and 'LS_COLORS'. 'LF_COLORS' is provided with the same syntax as
'LS_COLORS' in case you want to configure colors only for lf but not ls.
This can be useful since there are some differences between ls and lf, though
one should expect the same behavior for common cases. Colors file is provided
for easier configuration without environment variables. This file should consist
of whitespace separated pairs with '#' character to start comments until the end
of line.

You can configure lf colors in two different ways. First, you can only configure
8 basic colors used by your terminal and lf should pick up those colors
automatically. Depending on your terminal, you should be able to select your
colors from a 24-bit palette. This is the recommended approach as colors used by
other programs will also match each other.

Second, you can set the values of environment variables or colors file mentioned
above for fine grained customization. Note that 'LS_COLORS/LF_COLORS' are more
powerful than 'LSCOLORS' and they can be used even when GNU programs are not
installed on the system. You can combine this second method with the first
method for best results.

Lastly, you may also want to configure the colors of the prompt line to match
the rest of the colors. Colors of the prompt line can be configured using the
'promptfmt' option which can include hardcoded colors as ansi escapes. See the
default value of this option to have an idea about how to color this line.

It is worth noting that lf uses as many colors advertised by your terminal's
entry in terminfo or infocmp databases on your system. If an entry is not
present, it falls back to an internal database. If your terminal supports 24-bit
colors but either does not have a database entry or does not advertise all
capabilities, you can enable support by setting the '$COLORTERM' variable to
'truecolor' or ensuring '$TERM' is set to a value that ends with '-truecolor'.

Default lf colors are mostly taken from GNU dircolors defaults. These defaults
use 8 basic colors and bold attribute. Default dircolors entries with background
colors are simplified to avoid confusion with current file selection in lf.
Similarly, there are only file type matchings and extension matchings are left
out for simplicity. Default values are as follows given with their matching
order in lf:

    ln  01;36
    or  31;01
    tw  01;34
    ow  01;34
    st  01;34
    di  01;34
    pi  33
    so  01;35
    bd  33;01
    cd  33;01
    su  01;32
    sg  01;32
    ex  01;32
    fi  00

Note that lf first tries matching file names and then falls back to file types.
The full order of matchings from most specific to least are as follows:

1.  Full Path (e.g. '~/.config/lf/lfrc')
2.  Dir Name (e.g. '.git/') (only matches dirs with a trailing slash at the end)
3.  File Type (e.g. 'ln') (except 'fi')
4.  File Name (e.g. 'README\*')
5.  File Name (e.g. '\*README')
6.  Base Name (e.g. 'README.\*')
7.  Extension (e.g. '\*.txt')
8.  Default (i.e. 'fi')

For example, given a regular text file '/path/to/README.txt', the following
entries are checked in the configuration and the first one to match is used:

1.  '/path/to/README.txt'
2.  (skipped since the file is not a directory)
3.  (skipped since the file is of type 'fi')
4.  'README.txt\*'
5.  '\*README.txt'
6.  'README.\*'
7.  '\*.txt'
8.  'fi'

Given a regular directory '/path/to/example.d', the following entries are
checked in the configuration and the first one to match is used:

1.  '/path/to/example.d'
2.  'example.d/'
3.  'di'
4.  'example.d\*'
5.  '\*example.d'
6.  'example.\*'
7.  '\*.d'
8.  'fi'

Note that glob-like patterns do not actually perform glob matching due to
performance reasons.

For example, you can set a variable as follows:

    export LF_COLORS="~/Documents=01;31:~/Downloads=01;31:~/.local/share=01;31:~/.config/lf/lfrc=31:.git/=01;32:.git*=32:*.gitignore=32:*Makefile=32:README.*=33:*.txt=34:*.md=34:ln=01;36:di=01;34:ex=01;32:"

Having all entries on a single line can make it hard to read. You may instead
divide it to multiple lines in between double quotes by escaping newlines with
backslashes as follows:

    export LF_COLORS="\
    ~/Documents=01;31:\
    ~/Downloads=01;31:\
    ~/.local/share=01;31:\
    ~/.config/lf/lfrc=31:\
    .git/=01;32:\
    .git*=32:\
    *.gitignore=32:\
    *Makefile=32:\
    README.*=33:\
    *.txt=34:\
    *.md=34:\
    ln=01;36:\
    di=01;34:\
    ex=01;32:\
    "

Having such a long variable definition in a shell configuration
file might be undesirable. You may instead use the colors
file for configuration. A sample colors file can be found at
https://github.com/gokcehan/lf/blob/master/etc/colors.example
You may also see the wiki page for ansi escape codes
https://en.wikipedia.org/wiki/ANSI_escape_code

# Icons

Icons are configured using 'LF_ICONS' environment variable or an icons file.
The variable uses the same syntax as 'LS_COLORS/LF_COLORS'. Instead of colors,
you should put a single characters as values of entries. Icons file should
consist of whitespace separated pairs with '#' character to start comments
until the end of line. Do not forget to enable 'icons' option to see the icons.
Default values are as follows given with their matching order in lf:

    ln  l
    or  l
    tw  t
    ow  d
    st  t
    di  d
    pi  p
    so  s
    bd  b
    cd  c
    su  u
    sg  g
    ex  x
    fi  -

A sample icons file can be found at
https://github.com/gokcehan/lf/blob/master/etc/icons.example
