# MongoDB Connect Each Other

* [connection uri](#connection-uri)
* [connect to local mongodb](#connect-to-local-mongodb)
* [connect to mongodb that requires authentication](#connect-to-mongodb-that-requires-authentication)
* [connect to mongo atlas](#connect-to-mongo-atlas)
* [connect with vscode](#connect-with-vscode)
* [connect using TLS](#connect-using-tls)
* [debug connect](#debug-connect)

## connection uri

- mongodb to identify each other use connection uri

common format

```sh
mongodb://user:pass@sample.host:27017/?maxPoolSize=20&ssl=true
```

- `mongodb`: the protocol
- `user:pass`: credentials
- `sample.host`: hostname/IP and port of instance
- `?maxPoolSize=20&ssl=true`: connection options

standalone connection string

`"mongodb://mongodb0.example.com:27017"`

shared cluster connection string

`"mongodb://mongos0.example.com:27017,mongos1.example.com:27017,mongos2.example.com:27017"`

Atlas Deployment connection string

`"mongodb+srv://cluster0.example.mongodb.net myFirstDatabase"`

## connect to local mongodb

- default port: 27017
- this two command is equivalent

```sh
mongosh
mongosh "mongodb://localhost:27017"
```

## connect to mongodb that requires authentication

- to authenticate as user `alice` on the `admin` [database](mongodb-terminology.md#databases)

```sh
mongosh "mongodb://username:password@localhost:27017" --username alice --authenticationDatabase admin admon
```

## connect to mongo atlas

```sh
mongosh "mongodb+srv://cluster0.kefgspk.mongodb.net/myFirstDatabase" --apiVersion 1 --username root
```

## connect with vscode

1. install extension `MongoDB for VS Code`
2. click button `connect` > enter [connection string](#connection-string)

## connect using TLS

- what is [ TLS ](network-tls.md)

## debug connect

