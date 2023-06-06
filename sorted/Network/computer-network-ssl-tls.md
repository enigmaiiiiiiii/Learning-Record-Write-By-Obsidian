# Computer Network - SSL/TLS

## What It Is

- **Used to ensure client talking to the correct server**
- A cryptographic protocol
- Abbeviation of Secure [Socket](computer-network-socket.md) Layer
- Which [Https](computer-network-https.md) is based on
- More popularly protocol is [TLS](computer-network-tls.md)

## Feature

- server hold the [private key](computer-network-asymmetric-key.md#private-key)
- server send digital certificate to client

## Entity in SSL/TLS

[Digital Certificates](ssl-tls-digital-certificates.md)

[Certificate Authority](ssl-tls-certificate-authority.md)

Session Key

- used to encrypt and decrypt **data**
- a [symmetric key](computer-network-cryptographic-key.md#symmetric-key)

## Steps For Client To Trust A Server

1. client [handshakes](computer-network-reliable-transmission.md#three-way-handshake) with server
2. Server Hello

- Client send hello message to server, in this message it tells server
  - what TLS version it supports
  - which [cipher suite](#cipher-suite) it supports
- server send hello message to client, in this message it tells client
  - what TLS version it chooses
  - which cipher suite it chooses
- server then send another [packet](computer-network-tcp-segment-structure.md) to client, which contains
  - [digital certificate](ssl-tls-digital-certificates.md)
  - which contains the [public key](computer-network-asymmetric-key.md#public-key)
- server send FIN to client, which means the handshake is done

3. Certificate Verification. The Verification on my understanding

- client [public key](computer-network-asymmetric-key.md#public-key) which
  - stored in pre-installed [digital certificate](ssl-tls-digital-certificates.md) which
    - issued by Root [CA](ssl-tls-certificate-authority.md)
- will be decrypted by [private key](computer-network-asymmetric-key.md#private-key)
  - stored in Root CA

4. Key Exchange

- generate [Session Key](#session-key) for transfer data

5. Secure Data Transfer

- use [Session Key](#session-key) to encrypt and decrypt data between client and server

## Trust Of Chain

[Trust Of Chain](ssl-tls-chain-of-trust.md)

## VS SSH

[ssh](computer-network-ssh.md)

- more emphasis on **communication** between client and server

## Question

Certificate Verification is online or offline?

- locally is offline
- **maybe browser will do online verification**

Does digital certificate contains the private key?
