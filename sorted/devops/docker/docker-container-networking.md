# Container Networking

## What is this

- contain has a network interface with an IP address, a gateway, a routing table, DNS servers, and other networking details

## publish port

- when use `docker run` or `docker create` to run a container, no port is published
- use `-p` to publish a port, it will create a firewall rule to map docker port to host port
  - `-p 8080:80`: let host port 8080 map to container TCP port 80
  - `-p 192.168.1.100:8080:80`: let container TCP port 80 map to host `192.168.1.100` port 8080
  - `-p 8080:80/udp`: let container udp port 80 map to host port 8080
  - `-p 80880:80/tcp -p 8080:80/upd`: let container TCP port 80 map to host port 8080; container udp port 80 map to host port 8080

## IP address and host name

- when container start, it will only connect to one network
- use `--network` to connect to multiple networks
