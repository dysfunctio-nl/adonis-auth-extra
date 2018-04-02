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