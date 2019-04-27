const AddressRepository = require('../../../../Infra/repositories/AddressRepository')
const Address = require('../../../Entities/Address')

const isNull = value => (value === null || value === undefined)

module.exports = function GetAddresses ({ id }) {
  if (id) {
    return AddressRepository.getOneById(id).then(result => [result])
  }

  return AddressRepository.getAll()
}
