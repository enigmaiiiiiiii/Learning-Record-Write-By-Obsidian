# tcpdump

* [What It Is](#what-it-is)
* [How to use](#how-to-use)
* [filter expression](#filter-expression)
* [filter by flag](#filter-by-flag)
* [Practical Use](#practical-use)

## What It Is

- dump the [traffic] on a network

## How to use

capture all tcp packets on [eth0](computer-network-network-interface.md)

```sh
tcpdump -i eth0 tcp -nn
```

- `-i eth0` : capture on interface eth0
- `tcp` : only capture tcp packets
- `-nn` : don't resolve hostnames or port names

output looks like

```sh
22:54:55.705884 IP 192.168.213.1.5479 > 192.168.213.131.22: Flags [P.], seq 421:481, ack 3324, win 4099, length 60
```

- `22:54:55.705884` : time
- `IP` : indicate that the captured packet is an IP [packet](computer-network-packet.md)
- `192.168.213.1.5479` : source ip: 192.168.213.1; source port: 5479
- `192.168.213.131.22`: destination ip: 192.168.213.1; destination: 22
- Flags
  - `[P.]`: indicate that is a push packet
- seq:
  - indicates the sequence number range of the TCP payload data within this packet
  - range: 421 - 481
- `ack 3324`: signifies the acknowledgement number of the tcp packet
- `win 4099`: window size
- `length 60`: length of captured packet in **bytes**

## filter expression

primitive qualifiers to filter properties

- host
- port
- src/dst
- tcp, udp, icmp

Logical operators

- and, or, not

grouping

- `()`

example

```sh
sudo tcpdump -i eth0 -nn tcp and not port 22
```

- `-i eth0` : capture on interface eth0
- `-nn` : don't resolve hostnames or port names
- `tcp` : only capture tcp packets
- `and` : logical operator
- `not port 22` : filter out packets with port 22

## filter by flag

if [flag](computer-network-tcp-segment-structure.md#flags) looks like this

- this flags bits are contained in the octet 13

```sh
|C|E|U|A|P|R|S|F|
|---------------|
|0 0 0 0 0 0 1 0|
|---------------|
|7 6 5 4 3 2 1 0|
```

- the relationship can be expressed as

```js
tcp[13] == 2
```

use this expression as filter to watch packets with flag only SYN set

```sh
tcpdump -i eth0 tcp[13] == 2
```

- or use name replace number

```sh
tcpdump -i eth0 'tcp[tcpflags] == 2'
```

## Practical Use

1. only print packets from port 21

```sh
sudo tcpdump -i eth0 -nn port 21
```

2. print tcp packets ignore port 22

```sh
sudo tcpdump -i eth0 -nn tcp and not port 22
```

3. captrue packets from port 21 and save to file

```sh
sudo tcpdump -i eth0 -nn port 21 -w ftp.pcap
```
