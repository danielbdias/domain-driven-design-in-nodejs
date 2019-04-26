module.exports = function DeleteEntity ({ repository, entityType: EntityType, entityData }, injection) {
  const entity = new EntityType(entityData)

  return repository.delete(entity, injection)
}
