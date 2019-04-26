const { Mapper } = require('speck-sequelize-repository')

const map = {
  toEntity: {
    'id': 'id',
    'type': 'type',
    'createdAt': 'createdAt',
    'updatedAt': 'updatedAt'
  },
  toDatabase: {
    'id': 'id',
    'type': 'type',
    'createdAt': 'createdAt',
    'updatedAt': 'updatedAt'
  }
}

module.exports = new Mapper(Object, map)
