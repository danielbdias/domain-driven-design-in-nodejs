const dependencies = {
  DeleteEntity: require('../../Services/CrudUseCasesLogic/DeleteEntity')
}

module.exports = function DeleteAddress ({ id }, injection) {
  const { DeleteEntity } = Object.assign({}, dependencies, injection)

  return DeleteEntity(
    {
      repository: require('../../../Infra/repositories/AddressRepository'),
      entityType: require('../../Entities/Address'),
      entityData: { id }
    },
    injection
  )
}
