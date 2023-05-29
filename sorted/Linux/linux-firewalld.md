# Linux - firewalld

## What It is

- is a firewall mananger
- provides a dynamically managed firewall
- pre-installed in RHEL, like CentOS, Fedora, Rocky

## features

- filter communication based on ports
- define the trust level of network
- support for IPv4 and IPv6 firewall settings
- has separation of runtime and permanent configuration options
- support an interface for services or applications to add firewall rules directly

## Zone

- custom defined network security strategy

predined zones

- drop
  - lowest trust level
  - all incoming connections are dropped without any notification
  - only outgoing connections are possible
- block
  - similar to drop
  - incomming connections are rejected with icmp-host-prohibited and icmp6-adm-prohibited message
- public
  - allow selected incoming connections
- external
- internal
- dmz
- work
- home
- trusted

## Command Line Client

[firewall-cmd](linux-firewall-cmd.md)
