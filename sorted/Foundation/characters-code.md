# Characters Code

## ASCII

- 8 bits to represent English characters, numbers, some symbols
- Carriage CR: Binary `00001101`, Hex `0x0d`, String `\r`
- line feed: Binary `00001001`, Hex `0x0a`, String `\n`

## Unicode

- To represent an encoding of characters in all natural languages
- prefix `\u` or `u+`
- u+000a: line feed
- u+000d: carriage return

## UTF

- UTF is a transmission encoding of [Unicode](#unicode)
- UTF-8/16/32: to solve the problem that Unicode will make a character that can be determined by one byte to two bytes
  - english character: 1 byte
  - chinese character: 3 bytes
  - unfimiliar character will be 4-6 bytes
- computer use Unicode in [memory], but use UTF-8 in [hard disk] to save space

> Large number of English characters, UTF-8 saves space

[Convert](character-convert.md)

[file read/write about encode](file-encode-convert.md)
