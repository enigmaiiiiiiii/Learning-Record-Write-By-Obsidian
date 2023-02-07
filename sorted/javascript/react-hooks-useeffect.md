# useEffect

- in a word: 组件渲染时, 调用的函数

## Effect And Event

- **event** is caused by a specific user action
  - submit an HTTP request
- **effect** is caused by rendering itself

## why useEffect

- React component is a [pure function](react-component.md#keep-component-pure)
- when component render, the DOM node does not exist yet

## write an Effect

in a word

```js
import { useEffect } from 'react';
function MyComponent() {
    useEffect(() => {
        // do something after render
    })
    return <div />;
}
```

demonstrate by a example

- 用这样一个例子来说明: 一个按钮控制视频的播放和暂停

```js
import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });

  return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
```

## Effect dependency

- 通常, effect 会在每次 render 时都执行, 但是有时候我们只想在某些值发生变化时才执行 effect

specify dependency

```js
useEffect(() => {
    // do something after render
}, [dependency1, dependency2])
```

- 让react skip re-running the effect if both values are the same during previous render

## Cleanup effect

[Cleanup effect](react-effect-cleanup.md)


