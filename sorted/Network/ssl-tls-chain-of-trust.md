# SSL/TLS - Chain of Trust

## Take A Look

> this is a certificate of `*.google.com`

Certificate Hierarchy

```
GTS Root R1
└─GTS CA 1C3
    └─*.google.com
```

- `GTS Root R1` is the [Root Certificate Authority](#root-certificate-authority)
- `GTS CA 1C3` is the [Intermediate Certificate Authority]()
- `*.google.com` is the [Server Certificate]()

## Root Certificate Authority

- Top of the trust chain
- Its certificates is [self-sign](ssl-tls-digital-certificates.md#self-signed-certificate)
- They are **pre-installed** in web browsers and operating systems

## Intermediate Certificate Authority

- Issued by Root CA

## Server Certificate

- Issued by Intermediate CA


