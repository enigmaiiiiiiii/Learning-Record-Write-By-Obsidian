# Http - Request Method

## GET

- retrieves data specified by [URI](computer-network-uri.md)
- send data in [query string](computer-network-url.md#query-string)
- data length is limited by url or browser
- can be cached by browser cause it's considered as safe
- **Considered idempotence**
  - meaning multiple identical request should have the same effect as a single request
  - have not side effect on the server

## POST

- often used to submit form, upload files
- send data in [request body](http-request-message.md#request-body)
- data length is not limited
- **Not considered idempotence**: cause it may change server state

## PUT

## DELETE

## PATCH

## HEAD

## OPTIONS

- request the information of communication options available for the target resource or server, include
  - allowed methods
  - headers
  - authentication requirement
  - supported content types
  - ...
- often used in the context of Cross-Origin Resource Sharing

