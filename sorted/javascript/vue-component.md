# Vue Component

- [Introduction](#introduction)
- [通过Vue实例注册组件](#通过vue实例注册组件)
- [.Vue文件组件](#vue文件组件)
- [Vue Component Props](#vue-component-props)
- [Component data](#component-data)
- [Event Handling](#event-handling)
- [Add Children To Component](#add-children-to-component)

## Introduction

- 组件是可复用的[Vue实例](vue-instance.md)
- HTML中表现为自定义元素, 如`<my-component />`
- 包括data, computed, watch, methods, 生命周期钩子等
  - 不同的是, data必须是函数, 保证每个组件实例都有独立的data
- 不包括el

## 通过Vue实例注册组件

[注册组件](vue-register-component.md)

## .Vue文件组件

[Single File Component](vue-single-file-component.md)

## Vue Component Props

[Component Props](vue-component-props.md)

## Component data

[Component Data](vue-component-data.md)

## Event Handling

[Event Handling](vue-component-event-handling.md)

## Add Children To Component

[Children](vue-component-slot.md)
