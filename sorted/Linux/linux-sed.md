# Linux - sed

## What Is For

- modify the input read from 
  - files
  - standard input

```sh 
ls -l | sed '1d' # modify standard input
sed 's/old/new/' file # modify file
```

- generally speaking
  - when a command output is looks like something
  - The wanted input is look like another thing
  - use `sed` to transform the output to wanted input

## Syntax

`sed [options] 'command' file`

- So, what is [sed Command]

## Sed Command

- `sed 's/old/new/' file`: replace the first occurrence of old to new in file
- `sed 's/old/new/g' file`: replace all occurrences of old to new in file
- `ls -l | sed '1d'`: delete the first line of the output
- `ls -l | sed '1,3d'`: delete the first 3 lines of the output

## options

`-i extension`

- edit file in place, saving backups with the specified extension
- if no extension is supplied, the original file is overwritten

