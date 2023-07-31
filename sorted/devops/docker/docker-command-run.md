# Docker Command - run

* [What It Is](#what-it-is)
* [Syntax](#syntax)
* [Take A look](#take-a-look)
* [options](#options)

## What It Is

- create a [container instance](docker-glossary.md#container) from **Image**

## Syntax

```bash
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```

- `IMAGE`: image template to create container instance
- `[OPTIONS]`: options parameter
- `[COMMAND]`: command to run after container run

## Take A look

```bash
docker run -d -p 80:5000 training/webapp python app.py
```

- `training/webapp`: image name
- `python app.py`: use to start application in container, equal to type `$ python app.py` in command line
- `-d`: running in background
- `-p`: set port
  - `80`: host port
  - `5000`: container port

## options

- through options parameter, you can override default configuration in image

> almost all configuration in image can be override
> so `run` command has more options than other command

options list

- [`-d`]()
- [`-it`](#-it)
- [`--volume`](#--volume)
- [`--mount`](#--mount)
- [`-p`](#-p)
- [`--entrypoint`](#--entrypoint)
- [`--rm`](#--rm)
- [`--name`](#--name)

## -it

- `-i`: interactive
- `-t`: allocate a [pseudo-TTY](linux-tty.md)

## -p

- Publish a container's port to the host
- `-p <host_port>:<container_port>`

```sh
docker run -d -p 80:5000 nginx
```

## --volume

```sh
docker run -v /host/path:/container/path
```

- this command will mount directory `/host/path` to container's directory `/container/path`


## --mount

`--mount` with fields like this

- multiple `key=value` separated by comma `,`

> `--mount` has more fields than [-v](docker-volume.md)

```sh
docker run -d -it \
--mount type=bind,\
        source=path/to/source,\
        target=path/to/target,\
        readonly
```

- `type`: available value
  - `bind`: [bind mount](docker-bind-mounts.md)
  - `volume`: [mount a volume](docker-volume.md), default value
  - `tmpfs`:
- `source`: **absolute** path in host machine, `source` can be replaced by `src`
- `target`: **absolute** path in container, `target` can be replaced by `dst`, `destination`

## --entrypoint

- set the container [entrypoint](dockerfile-instructions.md#entrypoint)

## --rm

- remove container after exit

## --name


