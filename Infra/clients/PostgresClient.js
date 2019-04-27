const { Client } = require('pg')

const logger = require('../logger')
const databaseConfig = require('../config/database')

class PostgresClient {
  constructor () {
    this.query = this.query.bind(this)
  }

  async query (queryText, parameters) {
    const client = new Client(databaseConfig)

    await client.connect()

    logger.info(queryText)

    const result = await client.query({
      text: queryText,
      values: parameters
    })

    await client.end()

    return result.rows
  }
}

module.exports = new PostgresClient()
