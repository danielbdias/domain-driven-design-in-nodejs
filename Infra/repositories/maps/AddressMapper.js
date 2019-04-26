const { Mapper } = require('speck-sequelize-repository')

const map = {
  toEntity: {
    'id': 'id',
    'name': 'name',
    'number': 'number',
    'complement': 'complement',
    'zipCode': 'zipCode',
    'city': 'city',
    'state': 'state',
    'kind': 'kind',
    'createdAt': 'createdAt',
    'updatedAt': 'updatedAt'
  },
  toDatabase: {
    'id': 'id',
    'name': 'name',
    'number': 'number',
    'complement': 'complement',
    'zipCode': 'zipCode',
    'city': 'city',
    'state': 'state',
    'kind': 'kind',
    'createdAt': 'createdAt',
    'updatedAt': 'updatedAt'
  }
}

module.exports = new Mapper(Object, map)
