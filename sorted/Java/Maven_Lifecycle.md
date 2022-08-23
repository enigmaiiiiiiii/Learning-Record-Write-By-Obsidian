# LifeCycle

- 生命周期由不同的build phase构成, 一个build phase代表Life cycle的不同阶段

## Build Phase

- 如果一个Build Phase没有绑定[goals], 这个build phase不会被执行
- build phase会执行所用绑定的goals

## three built-in lifecycles

- default
- clean
- site

default life cycle由以下build phase组成 

- validate: 验证
- compile: 编译
- text: 测试
- package: 打包
- verify: 检查
- install: 安装到local repository
- deploy: 部署

## 使用命令选择预期阶段

```shell
mvn verify
```

- 这条命令会按顺序运行所有default lifecycle 中的 phase 直到 verify phase

## 组合插件(plugin)和build phase

```shell
mvn clean dependency:copy-dependencies package
```

- 这条命令先执行到`clean` phase, 然后运行插件`dependency:copy-dependencies`, 最后运行`package` phase