## docker volume

## What Is This

- way to **persistent data**
- is a directory or filesystem that outside the container
- generated and used by a [container](#container)
- managed by docker completely

## feature

- shared by [containers](docker-glossary.md#container) and [composes](docker-compose.md)
- compare to mount, it is easier to backup or migrate
- can be managed by docker CLI
- can be shared between multiple containers
- Volume's driver allow to be managed on remote host
- Volume can be pre-populated
