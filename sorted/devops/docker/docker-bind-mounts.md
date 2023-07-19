# Docker - Bind Mounts

## What It Is

- A file or directory on the host machine
- path reference to a mount is absolute on the host machine
- more verbose than [`-v`](docker-volume.md)

## Feature

- does not need to be exist already, Docker will create it on demand
- can't use [docker CLI](docker-command-line-interface.md) to directly manipulate it

## Bind Mounts with docker run

```sh
docker run -d \
--name nginx \
--mount type=bind,\
        source=/path/to/source,\
        target=/path/to/target,\
        readonly \
nginx:latest
```

## Field

`--mount` with fields like this

- multiple `key=value` separated by comma `,`

> `--mount` has more fields than [-v](docker-volume.md)

```sh
--mount type=bind,\
        source=path/to/source,\
        target=path/to/target,\
        readonly
```

- `type`: availble value
  - `bind`:
  - `volume`
  - `tmpfs`
- `source`
- `target`
