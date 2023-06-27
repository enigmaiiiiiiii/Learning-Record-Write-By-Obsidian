# Linux Shell Programming - exit

```sh
conut=5
while [ $conut -gt 0 ]; do
  echo "conut: $conut"
  if [ $conut -eq 3 ]; then
    exit 1
  fi
  conut=$((conut - 1))
done
```