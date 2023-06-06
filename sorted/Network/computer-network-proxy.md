# Computer Network - Proxy

## What Is This

- Is an intermediary server
- forwarding client requests to servers
- returning server responses to clients

## Operate Principle

- proxy can cache response
- proxy can filter, modify, and route request to different server

## Forward Proxy Server

- Forward proxy server is a proxy server that is used by a client to access a specific server
- client send requests to the forward proxy, then forward proxy send requests to the server

## Reverse Proxy Server

- A reverse proxy server acts as a **front-end server** for back-end servers
- It receives client requests and distributes the to the appropriate backend servers
- It serve as a single entry point for multiple back-end servers

## VS NAT

operating layer

- Proxy servers operate at the [application layer]()
- [NAT](computer-network-nat.md) operates at the [network layer](computer-network-network-layer.md)

protocol-awareness

- Proxy servers are protocol-aware
- NAT is protocol-agnostic
