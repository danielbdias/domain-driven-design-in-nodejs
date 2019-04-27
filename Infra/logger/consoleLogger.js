const Logger = require('./Logger')

const { transports: { Console } } = require('winston')

const { consoleConfiguration } = require('../config/logger')

const consoleTransport = new Console(consoleConfiguration)

module.exports = new Logger(consoleTransport)
