'use strict'

/**
 * adonis-graphql
 *
 * @license MIT
 * @copyright Slynova - Romain Lanz <romain.lanz@slynova.ch>
 */

const path = require('path')

module.exports = async function (cli) {
  await cli.makeConfig('auth-extra.js', path.join(__dirname, './config/auth-extra.js'))
    .catch((e) => {})
    
  cli.command.completed('create', 'config/auth-extra.js')
}