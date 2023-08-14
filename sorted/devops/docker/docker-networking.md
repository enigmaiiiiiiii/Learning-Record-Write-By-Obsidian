# Docker - Network

## Overview

- networking subsystem is pluggable

## Network Driver

determine the network functionality

- bridge 
  - default driver
  - commonly used when application in container need to communicate other in container
  - *not recommended for production*
- host
  - remove network isolation between container and host
  - use host network directly
- overlay
  - enable swarm service
  - remove the OS-level routing
- ipvlan
  - similar to macvlan, Consider used when macvlan addressess are limited
- macvlan
  - containers look like [physical host](computer-network-physical-layer.md)
  - each container has own [MAC address]
- none

## Standalone Container
