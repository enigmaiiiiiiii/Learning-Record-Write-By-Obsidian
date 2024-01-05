# Eslint - Configuration File

## Intialize Eslint Configuration File

```sh
npm init @eslint/config
# or
./node_modules/.bin/eslint --init
```

`.eslintrc.json`

```json
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```

- `["error", "always"]`: 
  - error: error level
  - always: 
- `"semi"`: check semicolon
- `"quotes"`: check quotes

available error level values:

- off or 0: close rules
- warn or 1: open rules with `warn` level, doesn't impact exit code
- error or 2: open rules with `error` level, exit code set to 1

Using recommended configuration

```json
{
    "extends": "eslint:recommended"
}
```
