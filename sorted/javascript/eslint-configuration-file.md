# 配置文件

## 初始化配置文件

```bash
npm init @eslint/config
# or
./node_modules/.bin/eslint --init
```

.eslintrc.json文件

```json
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```

- `["error", "always"]`: 
  - error: 错误级别
  - always: 规则值
- `"semi"`: 检查分号
- `"quotes"`: 检查引号

错误级别:

- off or 0: 关闭规则
- warn or 1: 开启规则, 使用警告级别的错误: `warn`, 不影响exit code
- error or 2: 开启规则, 使用错误级别的错误: `error`, exit code为1

使用推荐的配置

```json
{
    "extends": "eslint:recommended"
}
```