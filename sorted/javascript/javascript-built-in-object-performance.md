# JavaScript Built-in Object Performance

## what it is

- access to performance-related information
- in browser this object is `window.performance`
- in workers this object is `self.performance`

## Properties

performance.timeOrigin

- use as **baseline** for performance-related timestamps
- in window context, represents the time when the page was loaded

## Methods

performance.now()

- represent the time elapsed(消逝) since `Performance.timeOrigin`
- high resolution time
- number of milliseconds
- Performance.now() vs Date.now()
  - ...