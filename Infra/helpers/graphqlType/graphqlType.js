const dependencies = {
  gql: require('apollo-server').gql,
  fillQueryTypes: require('./fillQueryTypes'),
  fillDocumentation: require('./fillDocumentation')
}

module.exports = function grapqhQLType ({ definitions, entity, queryable = false }, injection) {
  const { gql, fillDocumentation, fillQueryTypes } = Object.assign({}, dependencies, injection)

  const documentDef = gql(definitions)

  if (entity) {
    fillDocumentation(documentDef, entity)
  }

  if (queryable) {
    fillQueryTypes(documentDef)
  }

  return documentDef
}
