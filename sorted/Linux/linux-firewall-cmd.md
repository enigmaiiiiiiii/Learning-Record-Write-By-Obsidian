# Linux - firewall-cmd

## whats is this

- is the command line client of [firewalld](linux-firewalld.md)

## How to Use

add port 80

```bash
sudo firewall-cmd --add-port=80/tcp --permanent
sudo firewall-cmd --reload
```

remove port

```bash
sudo firewall-cmd --remove-port=80/tcp --permanent
sudo firewall-cmd --reload
```
