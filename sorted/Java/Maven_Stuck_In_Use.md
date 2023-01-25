# Maven Stuck In Use

## 1

ClassNotFoundException: com.example.TestClass in VSCode

condition:

- after run `mvn clean` in command line
- try to use VSCode UI to run a test Method

solution:

1. make a change in `TestClass`, VSCode will auto compile it
2. `mvn test-compile` to generate test `.class` file in target




