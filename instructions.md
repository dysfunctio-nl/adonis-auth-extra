## Registering provider

Like any other provider, you need to register the provider inside `start/app.js` file.

```js
const providers = [
  '@dysfunctionl/adonis-auth-extra/providers/AuthExtraProvider'
]
```

## Registering middleware

Register the following middleware inside `start/kernel.js` file.

```js
const namedMiddleware = {
  guest: 'AuthExtra/Middleware/Guest',
}
```

## Config

The configuration is saved inside `config/auth-extra.js` file. Tweak it accordingly.

## Docs

To find out more, read the docs [here](https://github.com/dysfunctio-nl/adonis-auth-extra).