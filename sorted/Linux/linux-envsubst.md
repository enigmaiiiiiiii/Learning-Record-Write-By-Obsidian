# Linux - Command envsubst

## What It Is

envsubst - subsitutes environment variables in shell format strings

- shell format variable: `$VAR` or `${VAR}`

## Take A Look

input.txt

```sh
$USER lives in $CITY, $COUNTRY
```

command

```sh
$ export CITY=Drafbridge
$ export COUNTRY=UK
$ envsubst < input.txt
username lives in Drafbridge, UK
```

## Specify Variable To Subsitute

> by default replace all environment variables in stream

- specify variable to subsitute

```sh
$ export CITY=Drafbridge
$ envsubst "$CITY,$COUNTRY"< input.txt
$USER lives in Drafbridge, UK
```
