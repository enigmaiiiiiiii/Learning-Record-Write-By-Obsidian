# Animation

## Animation Property

`animation` property is short hand for:

- 1. `animation-name`
- 2. `animation-duration`
- 3. `animation-timing-function`
- 4. `animation-delay`
- 5. `animation-iteration-count`
- 6. `animation-direction`
- 7. `animation-fill-mode`
- 8. `animation-play-state`

if value is time value, like 0.5s, 2s. Order of values is

- 1. first value: `animation-duration`
- 2. second value: `animation-delay`

order of other values

- recommended specify animation-name as the last value

## keyframes

```css
@keyframes animationId {
  from {
    property: value;
  }
  to {
    property: value;
  }
}
```

- animationId: name of the animation

```css
@keyframes animationId {
  0% {
    top: 0;
    left: 0;
  }
  33.33% {
    top: 50px;
  }
  66.66% {
    left: 50px;
  }
  100 {
    top: 100%;
    left: 100%;
  }
}
```