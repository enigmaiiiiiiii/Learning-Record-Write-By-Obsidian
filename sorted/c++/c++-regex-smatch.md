# C++ - smatch

- For a regex object with n [subexpressions](c++-regex-std-regex.md), each smatch object will contain n+1 ssub_match elements.
- `[1]...[n]` correspond to each subexpression.
- `[0]` element represents the entire match.

method member of smatch

| Function            | Description                                                    |
|---------------------|----------------------------------------------------------------|
| m.ready()           | Returns true if set by functions regex_search or regex_match, otherwise returns false |
| m.size()            | Returns 0 if there is no match, otherwise returns the number of subexpressions in the last matched regular expression |
| m.empty()           | Returns true if m.size() is equal to 0                         |
| m.prefix()          | Returns an ssub_match object                                   |
| m.suffix()          |                                                                |
| m.format()          |                                                                |
| m.length(n)         |                                                                |
| m.position(n)       |                                                                |
| m.str(n)            | Returns the string matched by the nth subexpression             |



