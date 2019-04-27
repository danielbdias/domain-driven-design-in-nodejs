const AddressRepository = require('../../../../Infra/repositories/AddressRepository')
const Address = require('../../../Entities/Address')

module.exports = function DeleteAddress ({ id }) {
  const entity = new Address({ id })

  AddressRepository.delete(entity)
  return true
}
