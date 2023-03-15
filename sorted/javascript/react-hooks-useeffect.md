# useEffect

- [Introduction](#introduction)
- [feature](#feature)
- [Difference Between Effect And Event](#difference-between-effect-and-event)
- [why useEffect](#why-useeffect)
- [Usage](#usage)
- [Specifying Dependencies](#specifying-dependencies)
- [Cleanup effect](#cleanup-effect)

## Introduction

- only call it at the top level of your component

`uesEffect(setup, dependencies)`

- `setup`
  - optionally return a cleanup function, cleanup funtion will called:
    - re-render on dependencies value change
    - component is removed from the DOM
  - **setup function can't be async, because async function return a promise, not cleanup function**
  - setup will run when component first and to DOM
  - also run when re-render caused by dependecies change
    - react will first run the cleanup function on old dependencies value
    - then run the setup function on new dependencies value
- `dependencies`: reactive value, check how to [Specifying dependency](#specifying-dependency)

return value

- undifined

mechanism

- after hyour component re-renders, React will look at the array of dependencies

## feature

- React will let browser paint the update before running effect, if `useEffect` wasn't cause by an interaction(like a click), 
- only run on the client

## Difference Between Effect And Event

- **event** is caused by a specific user action
  - such as submit an HTTP request
- **effect** is caused by rendering itself

## why useEffect

- React component is a [pure function](react-component.md#keep-component-pure)
- when component render, the DOM node does not exist yet

when connecting to external system: network, database, etc

## Usage


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

## Specifying Dependencies

- Every **[reactive value](react-reactive-value.md) used by your effect's code** must be declared as a dependency 

specify dependency

```js
useEffect(() => {
  const connection = createConnection(serverUrl, roomId);
  connection.connect();
  return () => connection.disconnect();
}, [serverUrl, roomId])
```

- `serverUrl, roomId` are dependencies
- let react skip re-running the callback in useEffect if both values are the same during previous render

empty dependencies

- Effect only run when component mounts

## Cleanup Effect

[Cleanup effect](react-effect-cleanup.md)

