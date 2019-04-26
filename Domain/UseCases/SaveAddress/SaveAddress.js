const dependencies = {
  SaveEntity: require('../../Services/CrudUseCasesLogic/SaveEntity')
}

module.exports = function SaveAddress ({ address: entity }, injection) {
  const { SaveEntity } = Object.assign({}, dependencies, injection)

  return SaveEntity(
    {
      repository: require('../../../Infra/repositories/AddressRepository'),
      entityType: require('../../Entities/Address'),
      entityData: entity
    },
    injection
  )
}
