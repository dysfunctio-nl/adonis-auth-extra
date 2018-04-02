# Adonis Auth Extra

A light extension of Adonis auth to add viewtags (@auth/@guest) and middleware for redirecting if authenticated.

---

## Contents
- [Setup](#setup)
    - [Install](#install)
    - [Config](#config)
- [Usage](#usage)
    - [Middleware](#middleware)
    - [Views](#views)
        - [@Guest](#guest)
        - [@Auth](#auth)

---

## Setup

### Install

```bash
adonis install @dysfunctionl/adonis-auth-extra
```

Register the provider inside `start/app.js` file
```js
const providers = [
  '@dysfunctionl/adonis-auth-extra/providers/AuthExtraProvider'
]
```

Start the server
```bash
adonis serve --dev
```

-----

### Config
The configuration is saved inside `config/auth-extra.js` file. Tweak it accordingly.

```js
'use strict'

module.exports = {
  'middleware': {
    // Defualt URL To redirect authenticated users to
    'guestRedirect': '/home',

    // Send current request params to the redirected request
    'forwardRequestParams': false,

    // Status code to send with the redirect
    'statusCode': 302
  }
}
```

---

## Usage

### Middleware

```js
// Will redirect to url in config
Route.get('/', ()=>{})
    .middleware(['guest'])

// Wil redirect to /home
Route.get('/', ()=>{})
    .middleware(['guest:/home'])
```

----

### Views

##### @Guest
```js
@guest
    // User is guest
@else
    // User is authenticated
@endguest
````

---

##### @Auth
```js
@auth
    // User is authenticated
@else
    // User is guest
@endauth
````