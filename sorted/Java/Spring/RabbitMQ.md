# RabbitMQ

- 使用erlang语言编写

## 安装

[Github上的发布版本地址](https://github.com/rabbitmq/rabbitmq-server/tags)

- 要求与erlang版本兼容
- rabbitMQ和erlang各版本兼容不高, 要参考[Erlang Version Requiredments](https://www.rabbitmq.com/which-erlang.html)
- 目前(2022.11.10)可用对应关系
  - RabbitMQ 3.10.4
  - erlang 24.3
- 安装后默认启动服务

## 启动服务

打开RabbitMQ Command Prompt

```bash
rabbitmq-service install
```

- 默认端口: 5672

停止服务

```bash
rabbitmq-service remove
```

## 使用管理界面

启用插件

```bash
rabbitmq-plugins enable rabbitmq_management
```

- 默认端口: 15672
- 默认用户名: guest
- 默认密码: guest
