# tcpdump

## What It Is

- dump the traffic on a network

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
- `IP` : protocol



## Practical Use

only print packets from port 21

-  `tcpdump -i eth0 -nn port 21`