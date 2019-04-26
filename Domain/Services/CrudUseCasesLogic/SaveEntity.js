function stringifyValidationError (validationErrors) {
  const formattedErrors = Object.keys(validationErrors)
    .reduce((accumulator, fieldName) => accumulator.concat(validationErrors[fieldName].errors), [])

  return JSON.stringify(formattedErrors)
}

module.exports = function SaveEntity ({ repository, entityType: EntityType, entityData }, injection) {
  const entity = new EntityType(entityData)

  if (!entity.valid) {
    return Promise.reject(
      new Error(`Entity ${EntityType.name} has validation problems! Errors: ${stringifyValidationError(entity.errors)}`)
    )
  }

  return repository.save(entity, injection)
}
