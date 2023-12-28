# TypeScript - tsconfig.json

## What It Is

- TSConfig File can be named
  - **tsconfig.json**
  - or **jsconfig.js**
- TSConfig file in a directory indicate that the directory is the root of a TypeScript or JavaScript project.

Init a TSConfig file

```bash
tsc --init
```

## A Config File Can Be Used On Most Project

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "target": "es6",
    "noImplicitAny": true,
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "incremental": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "strictNullChecks": true,
    "jsx": "preserve",
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": ["src"],
  "exclude": ["node_modules"],
  "ts-node": {
    "esm": true
  }
}
```

## fields in tsconfig.json

[fields list](typescript-tsconfig-fields.md)
