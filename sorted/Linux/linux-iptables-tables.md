# Linux - iptable tables

## filter

- default table
- contains the built-in chains
  - [INPUT](linux-iptables-chains.md#input)
  - [FORWARD]()
  - [OUTPUT](linux-iptables-chains.md#output)

## nat

- network address translation
- consist of four built-in chains
  - [PREROUTING](linux-iptables-chains.md#prerouting)
  - [OUTPUT](linux-iptables-chains.md#output)
  - [POSTROUTING](linux-iptables-chains.md#postrouting)
  - [INPUT](linux-iptables-chains.md#input)

## mangle

- specialized packet alteration
- two built-in chains
  - [PREROUTING](linux-iptables-chains.md#prerouting)
  - [OUTPUT](linux-iptables-chains.md#output)

## raw

-
- two built-in chains
  - [PREROUTING](linux-iptables-chains.md#prerouting)
  - [OUTPUT](linux-iptables-chains.md#output)

## security

- use for Mandatory Access Control(MAC)
- consist of 3 built-in chains
  - [INPUT](linux-iptables-chains.md#input)
  - [OUTPUT](linux-iptables-chains.md#output)
  - [FORWARD](linux-iptables-chains.md#forward)
