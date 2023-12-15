# Regex Method

## exec()

```js
const regex1 = RegExp('foo*', 'g');
const str1 = 'table football, football';

while ((match = regex1.exec(str1)) !== null) {
  console.log(`Found ${match[0]}. Next starts at ${regex1.lastIndex}.`);
}
```

Return Value

- index: matched content in [regex group](regex.md#group)
  - 0: whole matched content
  - 1: first group
  - ...
- input:
- groups:
- indices

## test()
