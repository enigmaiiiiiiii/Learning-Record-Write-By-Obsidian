# mongo shell

> `mongo` was deprecated in mongoDB 5.0 and removed in MongoDB 6.0
> new command is `mongosh`

## install mongo shell

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

## connect using TLS

