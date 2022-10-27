# Sentinel

- 高可用流控防护组件

## 下载Sentinel Jar文件

[download address](https://github.com/alibaba/Sentinel/releases)

- sentinel-dashboard-1.7.2.jar: 控制台项目
- sentinel-core-1.7.2.jar: 核心项目

## 启动

- `<ver>`: 为版本号

```bash
java -Dserver.port=8080 -Dcsp.sentinel.dashboard.server=localhost:8080 -Dproject.name=sentinel-dashboard -jar sentinel-dashboard-<ver>.jar
```

- localhost:8080: 控制台地址
- 用户名/密码默认: sentinel/sentinel

## 规则

- 流量控制规则
- 熔断降级规则
  - 由于微服务架构中存在很多相同服务, 暂时切断不稳定服务
  - 熔断策略
    - 慢调用比例: 以慢比例调用为阈值, 设置允许的慢调用RT(Response Time)
    - 异常比例: 以异常比例为阈值, 设置允许的异常比例
    - 异常数: 以异常数为阈值, 设置允许的异常数
- 系统保护规则
  - 结合应用的负载情况，CPU使用率，总体平均RT, 入口QPS(每秒钟处理的请求数)和并发线程数
- 访问控制规则



