'use strict'

const { ServiceProvider } = use('@adonisjs/fold')

class AuthExtrasProvider extends ServiceProvider {
  _registerAlias () {    
    this.app.bind('AuthExtra/Middleware/Guest', () => new (require('../src/Middleware/Guest'))())
  }

  _registerTag() {
    const View = this.app.use('Adonis/Src/View')
    View.tag(new (require('../src/ViewBindings/Auth'))())
    View.tag(new (require('../src/ViewBindings/Guest'))())
  }

  boot () {
    this._registerAlias()
    this._registerTag()
  }
}

module.exports = AuthExtrasProvider