# Linux - chmod

## What It Is

- change [file permission](linux-file-permission.md)

## Numeric Modification

`chmod [-R] ugo`

options

- `-R`: recursive

permissions mapping

| character                   | octal | bin |
| --------------------------- | ----- | --- |
| r(read)                     | 4     | 100 |
| w(write)                    | 2     | 010 |
| x(execute)                  | 1     | 001 |
| rx(read & execute)          | 5     | 101 |
| rw(read & write)            | 6     | 110 |
| rwx(read & write & execute) | 7     | 111 |

example

- set read, write, execute permission for all user

```bash
chmod 777 file
```

- set read, write, execute permission for user
- read, execute permission for group and other

```sh
chmod 755 file
```

## Character Modification

<table>
  <tr>
      <td>chmod</td>
      <td>u(user)<br>g(group)<br>o(other)<br>a(all)<br></td>
      <td>+<br>-<br>=<td>
      <td>r<br>w<br>x<br>s<br>t<td>
      <td>file</td>
  </tr>
</table>

for example:

```sh
chmod g+w file
```

- set group write permission

## 符号修改权限

ugoa: user, group, other, all
rwx: read, write, execute

```bash
chmod g+rwx file
```

组用户添加 rwx 权限
