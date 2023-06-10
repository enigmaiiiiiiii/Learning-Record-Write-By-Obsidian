# Dockerfile - Instructions RUN

## RUN

`RUN <command>`

`RUN ["executable", "param1", "param2"]`

- this is exec form
- parse as JSON array, so `\` in path must be escaped as `\\`


## RUN --mount

create filesystem mounts that **build** can access

Syntax

```sh
--mount=[type=<TYPE>][,option=<value>[,options]...]
```

the first field is type, there a 4 values

- `type=bind`: default
- `type=cache`:
- `type=secret`
- `type=ssh`




