const { environment } = require('./environment')

const defaultLevel = (environment === 'test') ? 'error' : 'debug'

const level = process.env.LOGGER_LEVEL || defaultLevel

const consoleConfiguration = {
  json: true,
  stringify: true,
  level
}

module.exports = { consoleConfiguration }
