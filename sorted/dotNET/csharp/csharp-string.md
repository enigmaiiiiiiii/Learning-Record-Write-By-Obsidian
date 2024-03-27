# CSharp - String

- escape character `\`

which means, when you need a backslash, you need two backslashes, so c# introduces @

add @ before a string literal, means escape character is not supported

`string a2 = @"\\server\fileshare\helloworld.cs";`, `\` in the string is not escape character

[Special Characters](csharp-special-characters.md)

## Method String.Split

- Split a string into substrings based on the characters in an array

return

- string[]

paramters

- separator: separator character
- count: the number of substrings to return
- options:
