const { Repository } = require('speck-sequelize-repository')

const model = require('./models').Address
const map = require('./maps/AddressMapper')

module.exports = Repository.for(model, map, {})
