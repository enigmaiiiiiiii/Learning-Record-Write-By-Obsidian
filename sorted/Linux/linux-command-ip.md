# Linux Command - ip

## What is for

- show / manipulate
  - routing
  - devices
  - [interface](computer-network-network-interface.md)
  - tunnels

## Synopsis

`ip [options] Object { COMMAND | help }`

Object

- address: protocol address on a device
- addrlabel
- ioam
- l2tp
- link

## Practical use

ip addr

- show address assigned to all network interface

ip neigh

- shows the currentbour table in kernel

ip link set x up

- bring up interface x