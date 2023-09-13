# NextJS - App Router

* [Routes](#routes)
* [Layout](#layout)
* [Route Group](#route-group)

## Routes

```
app
├── page.tsx
└──  dashboard
    ├── page.tsx
    ├──  analytics
    │   └── page.tsx
    └──  settings
        └── page.tsx
```

routes in above structure

- `/` -> `app/page.tsx`
- `/dashboard` -> `app/dashboard/page.tsx`
- `/dashboard/analytics` -> `app/dashboard/analytics/page.tsx`
- `/dashboard/settings` -> `app/dashboard/settings/page.tsx`

## Layout

What Is Layout

- A layout is a component shared between multiple
- Layout is write in `layout.tsx` file
- Should accept a [`children` prop](/sorted/javascript/react-component-props.md#passing-jsx-as-children)

Features

- Do not re-render
- Can be nested
- Is a server component

```
app
├── page.tsx
├── layout.tsx
└──  dashboard
    ├── page.tsx
    ├── layout.tsx
    └──  settings
        ├── page.tsx
        └── layout.tsx
```

- `app/layout.tsx` is called **Root Layout** 
  - Root Layout is required
  - must contain `html` and `body` tags
- `app/dashboard.tsx` is **Nested Layout**

## Route Group

what is route group

- To prevent a folder being mapped to a url path 

what's for route group

- when you want to organize your project files into logical groups without affecting the url path structure

how route group

- Wrapping folder name by parenthesis: `(folderName)`

```sh
app
├──  (marketing)
│   ├── layout.tsx
│   ├──  about
│   │   └── page.tsx  # /about
│   └──  blog
│       └── page.tsx  # /blog
└──  (shop)
    ├── layout.tsx
    └──  account
        └── page.tsx  # /account
```

with group routes you can creating multiple root layouts

- remove top-level `app/layout.tsx`
- add `layout.tsx` to each group folder, like illustration above
- `<html>` and `<body>` need to be added to each layout

routes in different group should not resolve to the same url path

- path `(marketing)/about/page.tsx` and `(shop)/about/page.tsx` would cause error

