# package.json字段

- 必须包含name和version字段

```json
{
  "name": "package_name",
  "version": "1.0.0"
}
```

需要包含作者信息可以使用以下格式

```json
{
  "author": name<email@example.com>(http://example.com)
}
```

- scripts

```json
{
  "scripts": {
    "test": "{{test执行的命令}}"
    "exampletest": "{{example要执行的命令}}"
  }
}
```

运行`npm run test`执行test脚本