# Python - Argparse

## What It Is

- makes it easy to write user-friendly command-line interfaces

## Take A Look

main.py

```py
import argparse

parser = argparse.ArgumentParser(
                    prog='ProgramName',
                    description='What the program does',
                    epilog='Text at the bottom of help')
parser.add_argument('filename')           # positional argument
parser.add_argument('-c', '--count')      # option that takes a value
parser.add_argument('-v', '--verbose',
                    action='store_true')  # on/off flag
args = parser.parse_args()
print(args.filename, args.count, args.verbose)
```

run

```sh
$ python main.py -v -c 10 test
test 10 True
```

## Define Parser

```py
parser = argparse.ArgumentParser(
                    prog='ProgramName',
                    description='What the program does',
                    epilog='Text at the bottom of help')
```

## Add Arguments

Add Positional Arguments

```py
parser.add_argument('name1')
parser.add_argument('name2')
```

- Positional arguments are add by order
- this command syntax looks like `python script.py name1 name2`

Add Value-Accepted Options

```py
parser.add_argument('-c', '--count')
```

Add Flag Options

```py
parser.add_argument('-v', '--verbose',
                    action='store_true')
```

After those arguments added to parser. The command syntax looks like

```sh
python script.py [-h] [-c COUNT] [-v] name1 name2
```

## Argument Groups


