# ARP Protocol

- implement the mapping between any network layer address and any physical address

## ARP work principle

- Address Resolution Protocol
- Ethernet ARP request/response message format

| Hardware Type | Protocol Type | Hardware Address Length | Protocol Address Length | Operation | Sender Ethernet Address | Sender IP Address | Target Ethernet Address | Target IP Address |
| ------------- | ------------- | ----------------------- | ----------------------- | --------- | ----------------------- | ----------------- | ----------------------- | ----------------- |
| 2 bytes       | 2 bytes       | 1 byte                  | 1 byte                  | 2 bytes   | 6 bytes                 | 4 bytes           | 6 bytes                 | 4 bytes           |
