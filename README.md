# Laravel Breeze Next.js Starter (Frontend)

Corresponding backend: https://github.com/taylorotwell/next-example-backend

## Introduction

Clone this repository and install its dependencies with `yarn install` or `npm install`. Then, copy the `.env.example` file to `.env.local` and supply the URL of your backend:

```
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

The application can be run via `npm run dev` and will be available at `http://localhost:3000`:

```
npm run dev
```

> Note: Currently, for this example, we recommend using `localhost` during local development to avoid "Same-Origin" issues.

## Usage

This example Next.js application contains a custom `useAuth` hook, designed to abstract all authentication logic away from your pages. It can be used as follows:

```js
const ExamplePage = () => {
    const { logout, user } = useAuth({ middleware: 'auth' /* or 'guest */ })

    return (
        <>
            <p>{user?.name}</p>
            <button onClick={logout}>Sign out</button>
        </>
    )
}

export default ExamplePage
```

> Note: You'll need to use [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) (`user?.name` instead of `user.name`) when accessing properties on the user object to account for Next.js's initial server-side render.
