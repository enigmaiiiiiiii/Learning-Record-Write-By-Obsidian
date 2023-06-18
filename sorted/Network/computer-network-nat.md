# Computer Network - NAT

## What Is This

- NAT: [Network Address Translation](computer-network-ip-address.md)
- NAT allows multiple devices on a [local network]() to share a **single public [IP address](network-ipaddress.md)**
- From external looking, NAT router is a single device with single IP address
- Modify net address in IP packet, when transit across [router]() or [firewall]()
- NAT's address get from [ISP's]() [DHCP] service

## Feature

- can be implemented in both **software** and **hardware**
  - software: [iptables]
  - hardware: [router](computer-network-router.md)
- Address Translation
  - private IP used in local network
  - public IP used in internet
- Port Forwarding
  - translate incoming ports to specific internal IP address
- NAT helps segmenting networks by creating separate address space
- NAT can conservate ipv4 address

## Using scenario

- Home Network
- Small Office Network
- Enterprise Network

## Take A Look At mapping table

| WAN                                   | LAN                              |
| ------------------------------------- | -------------------------------- |
| 138.76.29.7 (internet IP), port: 5001 | 10.0.0.1 (subnet IP), port: 3345 |
| ....                                  |                                  |



