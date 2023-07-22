# Docker - Dockerfile Best Practice

## EXPOSE

- export port from container to host

## ENV

- 

## RUN Command In One Line

bad dockerfile

```dockerfile
RUN apt-get update
RUN apt-get install -y \
    package-bar \
    package-baz
```

- After building the image, all layers are in the docker cache
- modify the `apt-install` in dockerfile, for example, add a new package `package-foo`

```dockerfile
RUN apt-get update 
RUN apt-get install -y \
    package-bar \
    package-baz \
    package-foo
```

- the `apt-get update` isn't executed, because the cache is used
- Consequently, the `package-foo` potientially get an outdated version

good dockerfile

- use `RUN apt-get update && apt-get install -y` in one line ensure package up-to-date

```dockerfile
RUN apt-get update && apt-get install -y \
    package-bar \
    package-baz \
    package-foo
```
