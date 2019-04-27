const AddressRepository = require('../../../Infra/repositories/AddressRepository')
const Address = require('../../Entities/Address')

const isNull = value => (value === null || value === undefined)

module.exports = function GetAddresses ({ id, queryOptions }) {
  if (id) {
    return AddressRepository.findOneById(id)
                            .then(result => [result])
  }

  const options = {}

  if (queryOptions && !isNull(queryOptions.first)) {
    options.limit = queryOptions.first
  }

  if (queryOptions && queryOptions.filter) {
    const typedFilter = new Address(queryOptions.filter)

    const filter = Object.keys(queryOptions.filter)
      .map(key => ({ [key]: typedFilter[key] }))
      .reduce((acc, item) => Object.assign({}, item), {})

    return AddressRepository.findAllByCriterias(filter, options)
  }

  return AddressRepository.findAllBy(options)
}
