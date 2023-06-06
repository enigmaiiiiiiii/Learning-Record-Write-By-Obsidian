# SSL/TLS - Digital Certificates

## What It Is

> know as **SSL certificate** or **X.509 certificate**

- A file with various formats, such as `.pem, .crt, .cer, .der`
- A certififcate may be valid for multiple hostnames, [SubjectAlternativeNames (SANs)**](#subject-alternative-name-san)

## Feature

- contains **public key**
- contains the information

## Take A Look

> certificate of youtube

genral in formation of **certificate content**

```
Issued To

  Common Name (CN): `*.google.com`
  Organization (O): `<Not part of certificate>`
  Organizational Unit (OU): `<Not part of certificate>`

Issued By

  Common Name (CN): `GTS CA 1C3`
  Organization (O): `Google Trust Services LLC`
  Organizational Unit (OU): `<Not part of certificate>`

Validity Period

  Issued On: Monday, 8 June 2020 at 4:20:08 PM
  Exprises On: Mondy 31 August 2020 at 4:20:08 PM

Fingerprints

  SHA256 Fingerprint: `E4:5F:6F:3B:9F:5F:9B:9F:2B:8F:1B:5F:9F:5F:9F:5F:9F:5F:9F:5F`
  SHA1 Fingerprint: `E4:5F:6F:3B:9F:5F:9B:9F:2B:8F:1B:5F:9F:5F:9F:5F:9F:5F:9F:5F`
```

- its [CA](ssl-tls-certificate-authority.md) is `GTS CA 1C3`
- issued to `*.google.com`

look at detail

- [SAN](#subject-alternative-name-san)

```
Not Critical
DNS Name: *.google.com
DNS Name: *.appengine.google.com
DNS Name: *.bdn.dev
DNS Name: *.origin-test.bdn.dev
DNS Name: *.cloud.google.com
...
```

## Self-Signed Certificate

how to get a self-signed certificate

- like [OpenSSL](linux-openssl.md)

## Public Trusted Certificate

how to get a public trusted certificate

- send a certificate signing request (CSR) to a [CA](ssl-tls-certificate-authority.md)



---

## Subject Alternative Name (SAN)

## Wildcard Certificate


