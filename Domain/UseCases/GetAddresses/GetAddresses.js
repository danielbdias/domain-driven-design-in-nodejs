const dependencies = {
  GetEntities: require('../../Services/CrudUseCasesLogic/GetEntities')
}

module.exports = function GetAddresses ({ id, queryOptions }, injection) {
  const { GetEntities } = Object.assign({}, dependencies, injection)

  return GetEntities(
    {
      repository: require('../../../Infra/repositories/AddressRepository'),
      entityType: require('../../Entities/Address'),
      entityKey: id,
      queryOptions
    },
    injection
  )
}
