# Computer Network - SSH

## What It Is

- Is A Protocol
- Abbreviation of Secure Shell
- They Are SSH Application
  - [OpenSSH]()
  - [PuTTY]()

## How It Works

- ...

## Key Pair

- consists of
  - [public key](#public-key)
  - [private key](#private-key)
- **anyone** with public key can encrypt a message
- **only those who** know the corresponding private key can decrypt the message
- generated with crptographic algorithms

## Public Key

- kind of [cryptographic key](computer-network-cryptographic-key.md)
- free to distribute

## Private Key

- kind of [cryptographic key](computer-network-cryptographic-key.md)
- must be kept secret

## Components Of Implement SSH

- SSH Client
- SSH Server

## History

- mid-1970s, all cipher systems used **symmetric** key algorithms
- both sender and receiver used the same key to encrypt and decrypt the message
- if key was compromised, all messages encrypted with that key could be decrypted
