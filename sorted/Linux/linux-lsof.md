# Linux - Command lsof

## What is lsof used for

- list open files

## Practical Use

check specific ports status

```sh
lsof -i:8080
```

check listening ports

```sh
lsof -i -P | grep -i "listen"
```


## Options

`-i address`: list internet and x.25 (HP-UX) network files

- if `address` is not specified, all internet files are listed
- sample `address` value
  - `-i4`: IPv4
  - `TCP:25`: TCP and port25
  - `@172.217.27.14`: internet address 172.217.27.14

`-n`: inhibit the conversion of network numbers to host name

`-P`: inhibits the conversion of **port numbers** to **port names** for network files
