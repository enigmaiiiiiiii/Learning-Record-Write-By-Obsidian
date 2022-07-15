# 注释

- 注释放在所描述结构前
- 被抽取的注释放在`/**...*/`之间

从注释中抽取信息, 主要从以下几个结构

- 包
- 公有类和接口
- 公有的和受保护的构造器及方法
- 公有的和受保护的域

### 类注释

### 注释提取

单个包

```shell
javadoc -d docDirectory package_name
```

多个包

```shell
javadoc -d docDirectory package_name1 package_name2
```

> docDirectory为提取的文档的保存目录