# Git - Hooks

## pre-commit

- run before commit
- use shell script syntax

```
#!/bin/sh
npm run lint
echo "lint done"
```

disable pre-commit

- `git commit --no-verify`

