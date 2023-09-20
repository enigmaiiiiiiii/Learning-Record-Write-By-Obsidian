# React - Error Boundary

* [What Is Error Boundary](#what-is-error-boundary)
* [Take A Look](#take-a-look)
* [Detail About ErrorBoudary Component ](#detail-about-errorboudary-component-)
* [What Error Boundary Do Not Catch Error For](#what-error-boundary-do-not-catch-error-for)

## What Is Error Boundary

- by default, when an error throws during rendering in react application, React will **remove** its UI from screen 
- Error Boundary provides a fallback UI instead of the A broken UI
- Component with these methods, one or both, is called Error Boundary
  - `static getDerivedStateFromError()`
  - `componentDidCatch()` 

## Take A Look

> currently(2023.9) no way to write a error boundary in functional component

ErrorBoudary.tsx

```ts
import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("Uncaught error", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div>Sorry there was an error</div>
    }

    return this.props.children;
  }

}
```

ComponentWithError.tsx

```ts
import React from 'react'
import { ErrorBoundary } from 'src/components/ErrorBoundary'

const Foo = ({ hasError }: { hasError?: boolean }) => {
  if (hasError) {
    throw new Error('Error happened in Sample.tsx')
  } else {
    console.log('No Error Here')
  }

  return (
    <>
    <div>No Error Here</div> 
    </>
  )
}

export default function Sample() {
  return (
    <div>
      <CustomErrorBoundary>
        <Foo hasError/>
      </CustomErrorBoundary>
    </div>
  )
}
```

## Detail About ErrorBoudary Component 

static Method `getDerivedStateFromError(error: Error)`

- react will call it when a child conponent throws an error during rendering
- this lets display an error message instead of clearing the UI
- parameters
  - `error`: error was thrown
- returns
  - return changed state to indicate there was an error
  - state is a component property defined by user

Method `componentDidCatch()`

- send error message to analytics service, like log

Method `render()`

## What Error Boundary Do Not Catch Error For

- Event handlers
- Asynchronous Code
- [Server Side](nextjs-rendering.md#server-side-rendering) Rendering
- Errors thrown in the error boundary itself
