# Dockerfile - Instructions RUN

* [What Dockerfile RUN Instruction Do](#what-dockerfile-run-instruction-do)
* [Basic](#basic)
* [RUN --mount](#run---mount)

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

Create filesystem mounts that **build** can access

Syntax

```dockerfile
RUN --mount=[type=<TYPE>][,option=<value>[,options]...]
```

- field format is `key=value`
- seperate by `,`. no space, `key1=value1,key2=value2`

the first field is type, there a 4 values

- `type=bind`: default
- `type=cache`: set [cache mounts](docker-cache-mounts.md)
- `type=secret`
- `type=ssh`

different type value has different available options

`type=bind` options

- target: mount path 

`type=cache` options


