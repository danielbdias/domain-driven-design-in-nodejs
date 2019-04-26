const speckRepositoryInit = require('speck-sequelize-repository').initialize
const models = require('../../../Infra/repositories/models')

const databaseConfig = require('../../../Infra/config/database')
const fileConfig = require('../../../Infra/repositories/models/config')

module.exports = async function initDatabase () {
  const config = {
    database: databaseConfig,
    files: fileConfig
  }

  const modelStore = await speckRepositoryInit(config)

  models.init(modelStore)
}
