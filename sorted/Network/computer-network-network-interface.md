# Comuputer Network - Interface

- known as network interface card
- Is A hardware
- typically an expansion card can be inserted into an available computer's slot

for information output by command like `ifconfig` or `ip addr`

```
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: ens160: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 00:0c:29:ba:28:cf brd ff:ff:ff:ff:ff:ff
    altname enp3s0
    inet 192.168.213.131/24 brd 192.168.213.255 scope global dynamic noprefixroute ens160
       valid_lft 1189sec preferred_lft 1189sec
    inet6 fe80::20c:29ff:feba:28cf/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
```

- network interface is `lo` and `ens160`