# Docker - Networking

## Overview

- networking subsystem is pluggable

## Network Drivers

Determine the network functionality

There are 5 network drivers

- bridge
  - **default driver**
  - create a network isolate from host system
  - allows containers to communicate with each other and docker host
  - *not recommended for production*
- host
  - remove network isolation between container and host
  - performance is better
  - use host network directly
- overlay
  - enable communication between **multiple docker daemons**
  - enable [swarm service]
  - remove the OS-level routing
- ipvlan
  - similar to macvlan, Consider used when macvlan addressess are limited
- macvlan
  - connect to **external network**
  - containers look like [physical host](computer-network-physical-layer.md)
  - each container has own [MAC address]

> none network driver is allowed

set [docker compose] network driver

## Network Checking

network list

```sh
docker network ls
```

inspect network

```sh
docker network inspect <network-name>
```

container network information

```sh
$ docker inspect <container-name>
{
    ...
    "NetworkSettings": {
        "Ports": {
           ...
        }
        "Networks": {
           ...
        }
    }
}
```

## Standalone Container



