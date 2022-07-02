# 清单文件

- 除了类文件，图像和其它资源外，每个jar包含一个描述特征的清单文件
- 文件名MANIFEST.MF
- 清单分为多节，节与节之间用空行隔开
  - 第一节成为主节，作用于整个JAR文件
  - Name条目: 可以是文件，包，URL

```
Manifest-Version: 1.0

Name: Woozle.class

Name: com/mycompany/mypkg/
```

编辑清单

```shell
jar cfm JARFileName ManifestFileName
```

更新清单, 将需要增加的内容放到文件manifest-additions.mf

```shell
jar ufm MyArchive.jar manifest-additions.mf
```

***

清单文件必须以换行符结束

