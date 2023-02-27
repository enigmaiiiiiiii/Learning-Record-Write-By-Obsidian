# tailwindcss

## Install

不在Node.js环境下使用的安装方式

```shell
npm install -D tailwindcss
npx tailwindcss init
```

通过安装为postcss插件，集成在构建工具使用, 如webpack, Rollup, Vite, Parcel

```shell
npm install -D tailwindcss postcss autoprefixer
```

## `@apply`

Extracting classing with `@apply`

index.html

```html
<div>
  <button>Primary</button>
</div>
```

style.css

- use `@apply` to use tailwind classes on css selectors

```css
button {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
}
```
