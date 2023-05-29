# Computer Network - Packet Switch

translate above to englist is:

- A packet switch receives a network-layer packet arriving on one of its incoming communication links and forwards the packet on one of its outgoing communication links.
- there are two types of packet switches: [routers](computer-network-router.md) and link-layer switches.
- for each incoming link, a packet switch has an output buffer, also called an output queue.

## Queuing Delay and Packet Loss

> packet switch have a output cache，also called output queue

translate above note to english is:

- Queuing Delay: when a packet arrives at a switch, it must wait in its output queue before it can be transmitted on the outbound link.
- Packet Loss: when the queue is full, the arriving packet will be dropped.

