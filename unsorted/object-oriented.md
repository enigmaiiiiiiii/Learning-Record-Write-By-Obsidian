# Object Oriented Programming

## Why Getter/Setter

- Validation
- Debugging And Logging

```ts
class BankAccount {
  private _balance: number

  get balance() {
    return this._balance
  }

  set balance(value: number) {

    // ②
    console.log(`Set balance: ${value}`)

    // ①  
    if (value < 0) throw new Error('balance should not be negative')
    this._balance = value
  }
}
```

- ① : validation part 
- ② : debugging and logging part

