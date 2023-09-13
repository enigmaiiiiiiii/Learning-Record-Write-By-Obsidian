# Github - Search For Repository

[Official Document](https://docs.github.com/cn/search-github)

## name, description, topics, readme

| qualifier       | Example                                                                  |
| --------------- | ------------------------------------------------------------------------ |
| in:name         | `python in:name` matched repository name contains `python`               |
| in:description  | `python in:description` matched repository description contains `python` |
| in:topics       | `python in:topics` matched repository labeled with `python`              |
| in:readme       |                                                                          |
| repo:owner/name | match a specific repository                                              |

## search by repository size

| qualifier | Example                                                    |
| --------- | ---------------------------------------------------------- |
| size:n    | `size:1000` matched repositories that are 1 MB exactly     |
| size:>n   | `size:>30000` matched repositories that are at least 30 MB |

## By Time Created Or Last Updated

| qualifier           | Example                                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------- |
| created:<YYYY-MM-DD | `python created:<2021-01-01` matched repositories with the word "python" that created before |
| pushed:>YYYY-MM-DD  | `css pushed:>2021-01-01` matched repositories with the word "css" that pushed after          |
| 

## include result or not

- `fork:true` matched forked repositories
- `fork:only` matched only forked repositories
