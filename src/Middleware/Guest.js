'use strict'

const Config = use('Config')

class Guest {
  async handle ({ auth, response }, next, url) {
    if (url == null) {
      url = Config.get('auth-extras.middleware.guestRedirect')
    }

    if(auth.user) {
      response.redirect(url, 
        Config.get('auth-extras.middleware.forwardRequestParams'),
        Config.get('auth-extras.middleware.statusCode')
      )
    }

    await next()
  }
}

module.exports = Guest