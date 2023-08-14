# Linux - Perl

## Variable

```pl
$animal = "camel";
$answer = 42;
```

## Arrays

```pl
@animals = ("camel", "llama", "owl");
```

## Command Options

`-e`: execute perl code in command line

- `-e` option can be used repeatedly, the code will be executed in order

```sh
perl -e 'print "Hello World\n";' -e 'print "Hello World\n"'
```

`-p`: read input line by line, print the result of each line

