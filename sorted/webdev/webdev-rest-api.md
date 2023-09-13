# WebDev - REST Api

## What It Is

- REST: **Re**presentational **S**tate **T**ransfer

## Features

- stateless
 - client request must contain all information necessary to respond to a request
 - server does not store any information about client
- client-server are independently
- Cacheable
- Uniform interface
- transform data using JSON

## Representation Of Http Method

- `GET` for Read
- `POST` for create
- `PATCH` for update
- `DELETE` for remove

## Representation of Status Code

- `200` for success

## URL Name Convention

url resource name should be a noun, not a verb

- which means use `/products` not `/getProducts`
- `/products` for collections
- `/products?name=foo` for filtering

Pagination

```
/products?limit=20&offset=5
```
