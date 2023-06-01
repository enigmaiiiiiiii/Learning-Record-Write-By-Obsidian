# Linux - firewalld

* [What It Is](#what-it-is)
* [features](#features)
* [Command Line Client](#command-line-client)
* [Zone In Firewalld](#zone-in-firewalld)
* [Policy In Firewalld](#policy-in-firewalld)
* [permanent a setting](#permanent-a-setting)
* [Controlling Traffic With Zone](#controlling-traffic-with-zone)
* [Controlling Traffic With Predefined Services](#controlling-traffic-with-predefined-services)
* [Controlling Ports](#controlling-ports)
* [Controlling Sources By Using Zones](#controlling-sources-by-using-zones)

## What It Is

- is a firewall mananger
- provides a dynamically managed firewall
- use [`iptables`](linux-iptables.md) as the underlying firewall engine
- pre-installed in RHEL, like CentOS, Fedora, Rocky

## features

- filter communication based on ports
- define the trust level of network
- support for IPv4 and IPv6 firewall settings
- has separation of runtime and permanent configuration options
- support an interface for services or applications to add firewall rules directly

## Command Line Client

[firewall-cmd](linux-firewall-cmd.md)

## Zone In Firewalld

- predefined sets of rules

predined zones

- drop
  - lowest trust level
  - all incoming connections are dropped without any notification
  - only outgoing connections are possible
- block
  - similar to drop
  - incomming connections are rejected with icmp-host-prohibited for IPv4
  - icmp6-adm-prohibited message for IPv6
- **public**: all incoming connections are allowed
- external:
- internal: for your internal network device access
- dmz
- work
- home
- trusted: all network connections are accepted

## Policy In Firewalld

- group different configuration settings together
- can be used in different zones

1. create a new policy

- need `--reload` to make settings effective

```sh
sudo firewall-cmd --permanent --new-policy=<policy_name>
sudo firewall-cmd --reload
```

2. set policy properties

```sh
firewall-cmd --permanent --policy=<policy_name> --set-target=<target>
firewall-cmd --premanent --policy=<policy_name> --add-service=<name>
firewall-cmd --permanent --policy=<policy_name> --add-service=<name>
```

3. define the [ingress zone]() with policy

```sh
firewall-cmd --permanent --policy <policy_name> --add-ingress-zone=<zone_name>
```

4. Define the [egress zone]() to use with the policy

```sh
firewall-cmd --permanent --policy <policy_name> --add-egress-zone=<zone_name>
```

## Permanent Settings

use `--permanent` option to make a setting permanent

```sh
firewall-cmd --permanent --add-service=<service_name>
```

if you change settings without `--permanent`, make settings persistent use this

```sh
firewall-cmd --runtime-to-permanent
```

## Controlling Traffic With Zone

1. list all zones

```sh
firewall-cmd --get-zones
```

2. detailed information about for all zones

```sh
firewall-cmd --list-all-zones
```

3. detailed information about for a specific zone

```sh
firewall-cmd --zone=<zone_name> --list-all
```

4. add new zone

```sh
sudo firewall-cmd --new-zone=<zone_name> --permanent
```

- can be used only with `--permanent` option

## Controlling Traffic With Predefined Services

## Controlling Ports

1. list allowed ports

```sh
sudo firewall-cmd --list-ports
```

2. open a port

```sh
sudo firewall-cmd --add-port=<port>/<protocol>
```

3. close a port

```sh
firewall-cmd --remove-port=<port>/<protocol>
```

## Controlling Sources By Using Zones

1. add source

- set the source in the current zone

```sh
sudo firewall-cmd --add-source=<source>
```

- set the source IP address for a specific zone

```sh
firewall-cmd ==zone=zone-name --add-source=<source>
```

2. **remove** source

- remove the source from zone permanently

```sh
firewall-cmd --zone=zone-name --remove-source=<source>
```

3. allow a [service]() for a specific source

- add [ip range]() to specific zone

```sh
firewall-cmd --zone=zone-name --add-source=<source>
```

- add service to the zone

```sh
firewall-cmd --zone=zone-name --add-service=<service>
```

4. list allowed sources for a specific zone

```sh
firewall-cmd --zone=zone-name --list-sources
```
