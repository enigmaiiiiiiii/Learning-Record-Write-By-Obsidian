# LF - Environment Variables

* [environment variables](#environment-variables)
* [f](#f)
* [fs](#fs)
* [fx](#fx)
* [id](#id)
* [PWD](#pwd)
* [OLDPWD](#oldpwd)
* [LF_LEVEL](#lf_level)
* [OPENER](#opener)
* [EDITOR](#editor)
* [VISUAL](#visual)
* [PAGER](#pager)
* [SHELL](#shell)
* [lf](#lf)
* [lf_{option}](#lf_{option})
* [lf_user_{option}](#lf_user_{option})
* [lf_width/lf_height](#lf_width/lf_height)
* [lf_count](#lf_count)

## environment variables

- exported for [shell commands](lf-shell-commands.md)
- The following variables are exported for shell commands: These are referred with a '$' prefix on POSIX shells (e.g. '$f'), between '%' characters on Windows cmd (e.g. '%f%'), and with a '$env:' prefix on Windows powershell (e.g. '$env:f').

## f

- Current **file** selection as a full path.

## fs

- Selected **file(s)** separated with the value of 'filesep' option as full path(s).

## fx

- Selected **file(s)** (i.e. ['fs'](#fs)) if there are any selected files
- otherwise current file selection(i.e. ['f'](#f))

## id

Id of the running client.

## PWD

Present working directory.

## OLDPWD

Initial working directory.

## LF_LEVEL

The value of this variable is set to the current nesting level when you run lf from a shell spawned inside lf. You can add the value of this variable to your shell prompt to make it clear that your shell runs inside lf. For example, with POSIX shells, you can use '[ -n "$LF_LEVEL" ] && PS1="$PS1""(lf level: $LF_LEVEL) "' in your shell configuration file (e.g. '~/.bashrc').

## OPENER

If this variable is set in the environment, use the same value. Otherwise, this is set to 'start' in Windows, 'open' in MacOS, 'xdg-open' in others.

## EDITOR

- If [VISUAL](#visual) is set in the environment, use its value. Otherwise, use the value of the environment variable EDITOR. If neither variable is set, this is set to 'vi' on Unix, 'notepad' in Windows.

## VISUAL

- ...

## PAGER

- If this variable is set in the environment, use the same value. Otherwise, this is set to 'less' on Unix, 'more' in Windows.

## SHELL

- If this variable is set in the environment, use the same value. Otherwise, this is set to 'sh' on Unix, 'cmd' in Windows.

## lf

- Absolute path to the currently running lf binary, if it can be found. Otherwise, this is set to the string 'lf'.

## lf_{option}

Value of the {option}.

## lf_user_{option}

Value of the user_{option}.

## lf_width/lf_height

Width/Height of the terminal.

## lf_count

Value of the count associated with the current command.
