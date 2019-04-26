const isNull = value => (value === null || value === undefined)

module.exports = function GetEntities ({ repository, entityType: EntityType, entityKey, queryOptions }, injection) {
  if (entityKey) {
    return repository.findOneById(entityKey)
      .then(result => [result])
  }

  const options = {}

  if (queryOptions && !isNull(queryOptions.first)) {
    options.limit = queryOptions.first
  }

  if (queryOptions && queryOptions.filter) {
    const typedFilter = new EntityType(queryOptions.filter)

    const filter = Object.keys(queryOptions.filter)
      .map(key => ({ [key]: typedFilter[key] }))
      .reduce((acc, item) => Object.assign({}, item), {})

    return repository.findAllByCriterias(filter, options)
  }

  return repository.findAllBy(options)
}
