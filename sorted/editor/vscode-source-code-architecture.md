# VSCode - Source Code Architecture

## Layer

the core is partitioned into following layers

- base: general utilities
- platform 
  - service injection support
  - base service shared across layers
- editor: Monaco
- workbench
  - host "monaco" editor code 
  - entry point to the app
  - stitches everything
- server

## Environment

- common
- browser
- node
- electron-sandbox
- electron-main

## Editor Source Organisation

## Workbench Source Organisation

`vs/workbench/{common|browser|electron-sandbox}`

- core

`vs/workbench/api`

- api provider

`vs/workbench/services`

- services

`vs/workbench/contrib`

- contribution
- should not be dependencies from outside into here

## IPC

- inter process communication

## nls

- string localization

