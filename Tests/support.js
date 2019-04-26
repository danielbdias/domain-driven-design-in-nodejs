const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const speckRepositoryInit = require('speck-sequelize-repository').initialize
const models = require('Infra/repositories/models')

const config = {
  skipConnection: true,
  database: require('Infra/config/database'),
  files: require('Infra/repositories/models/config')
}

speckRepositoryInit(config)
  .then(models.init)
