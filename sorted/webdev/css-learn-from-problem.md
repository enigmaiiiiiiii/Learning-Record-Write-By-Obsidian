# CSS Learn From Proplem

## 1. text auto wrap at space

problem description

1. a react component define a `text` props, type is string, when pass a value with spaces in it.
2. the space in the value will auto become line break when display in the page.

here is the code

- a tooltip component
- style by tailwindcss

```js
const Tooltip = ({ children, text }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </button>
      {showTooltip && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 rounded-md bg-gray-800 text-white text-center">
          <span>{text}</span>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 rotate-45 bg-gray-800"></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
```

analysis:

- because size of `absolute` position element will restrict by its container block
- when next word is too long, it will wrap to adapt the width of container block