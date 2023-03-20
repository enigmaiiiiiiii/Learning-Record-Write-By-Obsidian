# ESLint Practical Usage

## supress warning

project-scope supress warning

- add rules to config file, use `.eslintrc.json` as example

```json
{
  "rules": {
    "@next/next/no-img-element": "off"
  }
}
```

- this rules is from "next/core-web-vitals" plugin
- it rise a warning when using `<img>` tag

file-scope supress warning
