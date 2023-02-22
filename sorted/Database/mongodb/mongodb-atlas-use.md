# MongoDB Atlas Use

- [Installation](#installation)
- [Add IP Access](#add-ip-access)
- [Create Cluster Users](#create-cluster-users)
- [Connect To Atlas](#connect-to-atlas)

## Installation

[install atlas cli](mongodb-atlas-cli.md#install)

## Add IP Access

- do not have network access enabled by default
- need to add address to whitelist

> Add Current IP Address in atlas dashboard

## Create Cluster Users

[mongodb atlas manage user](mongodb-atlas-manage-user.md)

- in order to connect, you **must** first create a user

create user use atlas ui

- click `Database Access` -> `Create database user`

create user use atlas cli

- for example create an Atlas database admin user named `myAdmin` for the project with ID `5e2211c17a3e5a48f5497de3`:

```sh
atlas dbusers create atlasAdmin --username myAdmin  --projectId 5e2211c17a3e5a48f5497de3
```


## get **connection string**

- this is [connection string](mongodb-connect.md#connection-string)
- method 1: click on *connect* button in atlas ui(dashboard, page)

**Atlas** connection string looks like

```sh
"mongodb+srv://cluster0.kefgspk.mongodb.net/myFirstDatabase"
```

## connect use connection string

connect to cluster in atlas

1. use [mongo shell](mongodb-shell.md)

```sh
mongosh "mongodb+srv://cluster0.kefgspk.mongodb.net/myFirstDatabase" --apiVersion 1 --username root
```

> password is set by [create cluster users](#create-cluster-users)

2. connect using vscode


