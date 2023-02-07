# NodeJS Worker Pool

## Introduction

pool of worker, [here is the worker](javascript-worker.md)

## what code runs on the worker pool

expensive CPU tasks

- I/O tasks, for which an os does not provide a non-blocking version
  - DNS
  - File.System
- CPU-intensive
  - Crypto: cryptographic functionality
  - Zlib: provides compression functionality using Gzip

in many applications these api is the only source of tasks for the worker pool
