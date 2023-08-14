# Linux - iptables

> Deprecated in favor of [nftables](linux-nftables.md)

* [What Is This](#what-is-this)
* [Tables](#tables)
* [Chains](#chains)
* [Simplified Packet Flow Through iptables](#simplified-packet-flow-through-iptables)
* [Options](#options)
* [Command break down](#command-break-down)
* [multicast traffic](#multicast-traffic)
* [Examples](#examples)

## What Is This

- used to inspect, modify, forward, redirect, and/or drop **IP packets**
- are made up of a set of predefined [chains]
  - chains contain rules which are traversed in order
- is a [systemd] service

## Tables

[tables](linux-iptables-tables.md)

## Chains

[chains](linux-iptables-chains.md)

## Simplified Packet Flow Through iptables

```sh
                            XXXXXXXXXXXXXXXXXX
                          XXX     Network    XXX
                            XXXXXXXXXXXXXXXXXX
                                    +
                                    |
                                    v
 +-------------+           +------------------+
 |table: filter| <--+      | table: nat       |
 |chain: INPUT |    |      | chain: PREROUTING|
 +-----+-------+    |      +--------+---------+
       |            |               |
       v            |               v
 [local process]    |         ****************        +--------------+
       |            +-------+ Routing decision +----> |table: filter |
       v                      ****************        |chain: FORWARD|
****************                                      +------+-------+
Routing decision                                             |
****************                                             |
       |                                                     |
       v                     ****************                |
+-------------+      +---->  Routing decision  <-------------+
|table: nat   |      |       ****************
|chain: OUTPUT|      |             +
+-----+-------+      |             |
      |              |             v
      v              |    +-------------------+
+--------------+     |    | table: nat        |
|table: filter | +---+    | chain: POSTROUTING|
|chain: OUTPUT |          +--------+----------+
+--------------+                   |
                                   v
                            XXXXXXXXXXXXXXXXXX
                          XXX    Network     XXX
                            XXXXXXXXXXXXXXXXXX
```


## Command break down

1. `iptables -A INPUT -p tcp --dport 17500 -j REJECT --reject-with icmp-port-unreachable`

- `-A INPUT`: append the rule to the [`INPUT`](linux-iptables-chains.md#input) chain

> INPUT is CHAIN, NOT iptables OPERATION
> `-A` is iptables OPERATION

- `-p tcp`: protocol matched is tcp
- `--dport 17500`: destination port is 17500
- `-j REJECT`: action `REJECT` is taken if matched
- `reject-with icmp-port-unreachable`: specifies the rejection method
  - `icmp-port-unreachable`: send an ICMP port unreachable packet back

2. `iptables -R INPUT 1 -p tcp --dport 17500 ! -s 10.0.0.85 -j REJECT --reject-with icmp-port-unreachable`

- `-R INPUT 1`: replace the rule in the [`INPUT`](linux-iptables-chains.md#input) chain at position 1
  - INPUT is CHAIN, NOT iptables OPERATION
  - `-R` is iptables OPERATION
- `! -s 10.0.0.85`: packets source do not have the ip 10.0.0.85 will be matched
  - according to context, sources that not 10.0.0.85 will be reject

3. `iptables -I INPUT -p tcp --dport 17500 -s 10.0.0.85 -j ACCEPT -m comment --comment "Friendly Dropbox"`

- `-I INPUT`: insert the rule to the [`INPUT`](linux-iptables-chains.md#input) chain
- `-s 10.0.0.85`: specification [source/mask](computer-network-ip-address.md)
- `-j ACCEPT`: action `ACCEPT` is taken if matched
- `-m comment --comment "Friendly Dropbox"`: add a comment to the rule
  - if match, the comment method will be executed

4. `iptables -R INPUT 2 -p tcp -dport 17500 -j REJECT --reject-with icmp-port-unreachable`

type in all above 4 commands, the rules will be

```sh
Chain INPUT (policy ACCEPT 0 packets, 0 bytes)
num   pkts bytes target     prot opt in     out     source               destination
1        0     0 ACCEPT     tcp  --  *      *       10.0.0.85            0.0.0.0/0            tcp dpt:17500 /* Friendly Dropbox */
2        0     0 REJECT     tcp  --  *      *      !10.0.0.85            0.0.0.0/0            tcp dpt:17500 reject-with icmp-port-unreachable

Chain FORWARD (policy DROP 0 packets, 0 bytes)
num   pkts bytes target     prot opt in     out     source               destination

Chain OUTPUT (policy ACCEPT 0 packets, 0 bytes)
num   pkts bytes target     prot opt in     out     source               destination
```

- request from 10.0.0.85 to port 17500 will be accepted
- request from other sources to port 17500 will be rejected

## Options

edit rules

- rules can be edited by
  - `-A`: appending rule to a [chain](#chains)
  - `-I`: inserting rule at a specific position on the [chain](#chains)
  - `-R`: replacing an existing rule
  - `-D`: deleting a rule

- `-s`: source specification
  - `! -s`: source specification negation
  - multiple addresses can be specified, but this will expand to multiple rules

## Examples

1. showing current rules with line numbers

```sh
iptables -nvL --line-numbers
````

- output looks like

```sh
Chain INPUT (policy ACCEPT 0 packets, 0 bytes)
 pkts bytes target     prot opt in     out     source               destination

Chain FORWARD (policy ACCEPT 0 packets, 0 bytes)
 pkts bytes target     prot opt in     out     source               destination

Chain OUTPUT (policy ACCEPT 0 packets, 0 bytes)
 pkts bytes target     prot opt in     out     source               destination
```

adding rules

save rules

## multicast traffic

