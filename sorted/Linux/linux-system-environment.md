# Shell Environment

## set environment variable

export set `name` to `foo`

```sh
export name="foo"
```

concatenate `name` value with `:bar` and set to `name`

```sh
export name="$name:foo"
echo $name
```

output

```
value:other_value
```

## environment variable related file

[related file](linux-environment-variable-related-file.md)

## show all variable

```bash
env
```
