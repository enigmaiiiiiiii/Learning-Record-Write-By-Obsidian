# netstat

* [Description](#description)
* [Output](#output)
* [Practical Command](#practical-command)

## Description

- `sudo apt install net-tools` 安装net-tools

`netstat -[a/n/t/u/l/p/c]`

- `-r` routing table
- `-n` show numerical address
- `-a` show both listening and non-listening sockets
- `-t` Only TCP
- `-u` Only UDP
- `-l` Show Only Listening Sockets
- `-c` print the selected information every second

## Output

- Proto: the protocol tcp, udp, udpl, raw
- Local Address: Address and port number
- Foreign Address: Address and port of remote end of the socket
- stat: [state of the socket](tcp-status.md)

## Practical Command

`netstat -tulpn`

- display all listening ports with corresponding process and PID

`netstat -tulpn | grep :80`

- dipslay all connections to a port 80

`netstat -tunlp`

- display all open ports with their process and PID

`netstat -an | grep <ip_address>:<port>`

- display all connections for specific ip address and port

