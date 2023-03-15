# Nextjs Middleware

- [what it is](#what-it-is)
- [Create Middleware](#create-middleware)
- [Matcher](#matcher)
- [NextResponse](#nextresponse)
- [Using Cookies](#using-cookies)
- [Setting Header](#setting-header)
- [response directly from middleware](#response-directly-from-middleware)
- [Advance Middleware Flags](#advance-middleware-flags)

## what it is

- run code before a request is completed
- you can modify the response by rewriting the request or response header
- common use case
  - authentication
  - A/B testing
  - localized pages
  - ...

## Create Middleware

- create /middleware.ts at root or `src` directory

> same level as `pages` directory

- export middleware function

```ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: nextRequest) {
  return NextResponse.redirect(new URL('/about-2', request.url));
}

export const config = {
  matcher: '/about/:path*'
}
```

- redirect part: redirect to `/about-2`
- config matcher: match all request to `/about/*`, but not `/about/a/c`

## Matcher

to filter Middleware to run on specific paths

match path like `/about/a`, `about/a/b`, `about/a/b/c`

```ts
export const config = {
  matcher: '/about/:path*',
}
```
match multiple path with an array syntax;

```ts
export const config = {
  matcher: ['/about/:path*', '/dashboard/:path*'],
}
```

## NextResponse

## Using Cookies

## Setting Header

```ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const requestHeader = new Header(request.headers)
  requestHEader.set('x=hello-from-middleware1', 'hello')

  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })

  response.headers.set('x-hello-from-middleware2', 'hello')
  return response
}
```

## response directly from middleware

```ts
import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@lib/auth'

export const config = {
  matcher: '/api/:function*'
}

export function middleware(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return new NextResponse(
      JSON.stringify({ success: false, message: 'authentication failed'}),
      {
        status: 401,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }

}
```

## Advance Middleware Flags


