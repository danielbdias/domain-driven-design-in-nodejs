const AddressRepository = require('../../../../Infra/repositories/AddressRepository')
const Address = require('../../../Entities/Address')

function stringifyValidationError (validationErrors) {
  const formattedErrors = Object.keys(validationErrors)
    .reduce((accumulator, fieldName) => accumulator.concat(validationErrors[fieldName].errors), [])

  return JSON.stringify(formattedErrors)
}

module.exports = function SaveAddress ({ address }) {
  const entity = new Address(address)

  if (!entity.valid) {
    return Promise.reject(
      new Error(`Entity ${EntityType.name} has validation problems! Errors: ${stringifyValidationError(entity.errors)}`)
    )
  }

  return AddressRepository.save(entity)
}
