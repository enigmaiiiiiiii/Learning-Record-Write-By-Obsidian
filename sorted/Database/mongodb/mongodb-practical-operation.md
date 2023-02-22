# MongoDB Practical Operation

## dump data from atlas to local file

```sh
mongodump --username=<username> --archive=data --uri=mongodb+srv://cluster0.kefgspk.mongodb.net/sample_airbnb
```

- dump to local file `data`

## restore data from local file to local mongodb

restore to local mongodb, sue default port 27017

```sh
mongorestore --archive=data
```
