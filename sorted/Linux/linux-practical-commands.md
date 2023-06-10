# Linux - Practical Command

* [list installed package](#list-installed-package)
* [remove related package](#remove-related-package)
* [switch between suspend process and command line](#switch-between-suspend-process-and-command-line)

## list installed package

```sh
dpkg-query --show --showformat='${Package}\n'
```

## remove related package

```sh
sudo apt remove $(dpkg-query --show --showformat='${Package}\n' | grep -i 'package-name')
```

## switch between suspend process and command line

when use `ctrl + z` to suspend process

- resume most recent suspended process

```sh
fg
fg %1
```

- check background process use `jobs`, which which get:

```sh
[1]+  Running                 command1 &
[2]-  Running                 command2 &
```

- `+` means the most recently started job
- `-` means the second most recently started job
- `jobs -l`: Display process IDs in addition the default information
- `jobs -p`: Display only the process IDs of background jobs
- `jobs -r`: Display only running background jobs
- `jobs -s`: Display Display only stopped background jobs


