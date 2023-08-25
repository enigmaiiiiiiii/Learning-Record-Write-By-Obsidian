# Integration Test

- usually test multiple modules
- usually written by a team

## Incremental Testing Approach

according to the dependency of modules, there are 2 approaches

- Top Down Approach: `module 1` -> `module 2, 3` -> `module 4, 5, 6`
- Bottom Up Approach: `module 4, 5, 6` -> `module 2, 3` -> `module 1`

```

                     ┌───────────┐
                     │  Module 1 │
                     └─────┬─────┘
               ┌───────────┴───────────┐
               │                       │
               │                       │
        ┌──────┴──────┐         ┌──────┴──────┐
        │   Module 2  │         │   Module 3  │
        └──────┬──────┘         └──────┬──────┘
       ┌───────┴───────┐               │
       │               │               │
       │               │               │
┌──────┴──────┐ ┌──────┴──────┐ ┌──────┴──────┐
│   Module 4  │ │   Module 5  │ │   Module 6  │
└─────────────┘ └─────────────┘ └─────────────┘
```

## Test Double

- in development, we may not have all the modules ready
- we simulate the data communication between developed modules and compeleted module
- there 2 concepts: [stub](#stub) and [driver](#driver)

## Stub

```
┌─────────────┐
│ compeleted  │
│   module    │
└──────┬──────┘
       │
       │
┌──────┴──────┐
│     stub    │
└─────────────┘
```

## Driver

- calls the module to be test

```
┌─────────────┐
│    driver   │
└──────┬──────┘
       │
       │
┌──────┴──────┐
│ compeleted  │
│   module    │
└─────────────┘
```
