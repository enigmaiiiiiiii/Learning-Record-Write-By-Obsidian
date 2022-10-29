# Nacos

- Dynamic Naming and Configuration Service
- 用于发现、配置和管理微服务

## 启动服务

windows

```bash
startup.cmd -m standalone
```

## 访问Nacos页面

`http://localhost:8848/nacos`

用户名密码: nacos/nacos

## 实例

- 永久实例: 服务启动后注册到nacos, 服务停止后从nacos注销
  - 不会心跳规则从服务中心移除
- 临时实例: