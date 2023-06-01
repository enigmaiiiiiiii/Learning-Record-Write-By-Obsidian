# IP Address

- an ip address is associated with an **interface**

> a host or router can have multiple interfaces, each with a different IP address

- each interface of each host and router in the global internet must have a globally unique IP address
- every IPv4 address is 32 bits, so there are $2^{32}$ of them
- ~~internet ip, public ip, wide area network ip may be the same thing?~~

## IPv4 Subnet

- multiple host interfaces connected to a router interface form a subnet
- Subnet type

> different with [ipv4 address type](#ipv4-address-type), which is about the address itself

| type | start bits | start     | end           | decimal mask  |
| ---- | ---------- | --------- | ------------- | ------------- |
| A    | 0          | 0.0.0.0   | 127.0.0.0     | 255.0.0.0     |
| B    | 10         | 128.0.0.0 | 191.255.0.0   | 255.255.0.0   |
| C    | 110        | 192.0.0.0 | 223.255.255.0 | 255.255.255.0 |

## subnet mask

for 223.1.1.0/24:

- /24 is called subnet mask, which means the leftmost 24 bits define the subnet address
- any other host connected to `223.1.1.0/24` must have an address of the form `223.1.1.xxx`

## ipv4 address type

- private ip address block
  - A: 10.0.0.0 ~ 10.255.255.255
  - B: 172.16.0.0 ~ 172.31.255.255
  - C: 192.168.0.0 ~ 182.168.255.255
- public ip is global unique

## Special IP Address

- in home network, each host ip is assigned by router
- router's ip is assigned by [ISP](internet-service-provider) through [DHCP](dhcp.md)
