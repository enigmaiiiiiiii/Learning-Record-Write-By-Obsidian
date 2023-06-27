# Linux Shell Programming - Array

## Declare An Array

```sh
fruits=(apple banana "Fruit Basket" orange)
```

## Access Array Element

```sh
${fruits[2]}
```

- access to the third element

## Traverse Array

```sh
for fruit in ${fruits[@]}; do
  echo "I like $fruit"
done
```