# mongodb database tools

## Install

[mongodb database tools installation](https://www.mongodb.com/docs/database-tools/installation/installation/)

## mongorestore

syntax

```sh
mongorestore <options> <connection-string> <directory or file to restore>
```

loads data from either a binary database dump created by [mongodump](#mongodump)

```sh
mongorestore <options> <connection-string> <directory or file to restore>
```

- [connection-string](mongodb-atlas-use.md#get-connection-string)

for example: restore from atlas backup

## mongodump

create a binary export of database contents

options

- `--db`: database name
- `--collection`
- `--excludeCollection`
- `--uri`: specifies connection string
- `--host`:
- `--port`:
- `--username`: username for authentication
- `--password`: password for authentication
- `--archive`: write output to specified archive file
  - `--archive=<file>`: write output to specified archive file 
  - `--archive`: to standard output stream in order to [pipe](#) to another process

- `--out`
- `--gzip`
- `--nsFrom=<origin> --nsTo=<dest>`: rename a [namespace](mongodb-glossary.md#namespace) origin
  - `--nsFrom`: name in the dump file
  - `--nsTo`: name in the restored database

## mongoexport
