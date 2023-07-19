# Dockerfile - Instructions RUN

## What Dockerfile RUN Instruction Do

- Install dependencies
- ~~optimize image size~~

## Basic

`RUN <command>`

`RUN ["executable", "param1", "param2"]`

- this is exec form
- parse as JSON array, so `\` in path must be escaped as `\\`

print "hello world" in console

```dockerfile
RUN echo "hello world"
```

## RUN --mount

create filesystem mounts that **build** can access

Syntax

```sh
--mount=[type=<TYPE>][,option=<value>[,options]...]
```

the first field is type, there a 4 values

- `type=bind`: default
- `type=cache`: mount a temporary directory to cache directories for compilers and package managers
- `type=secret`
- `type=ssh`

different type value has different available options

`type=bind` options

- target: mount path 

`type=cache` options



