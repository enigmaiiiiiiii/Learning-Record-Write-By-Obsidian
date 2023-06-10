# Linux - Systemd

## What Is This

- Systemd is a [service manager](linux-services.md) for Linux operating systems
- It is not a [daemon](linux-daemon.md)

## Where I Can Find It

- associated daemon `/usr/lib/systemd/system`
- configuration file `/etc/systemd/system`

## Systemctl

start a service

```sh
systemctl start service_name
```

check status of a service

```sh
systemctl status service_name
```