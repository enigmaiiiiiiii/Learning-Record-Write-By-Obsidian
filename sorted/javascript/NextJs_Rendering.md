# Rendering

converts the your code to user interface

## server and client component

- 将组件划分为server and client的好处
  - server component 使开发者充分利用服务器的基础设施

## client side

- client side 的功能: **send request** to server

convention 约定

- 在`app` directory 的 client component, add `"use client"` directive at the top of the file

## server side

- `app` directory 中的组件默认为 server side 的[组件](Ceact_Component.md)
- server side 的功能
  - **receive** request
  - do some **computation**
  - generate and send **respond**
