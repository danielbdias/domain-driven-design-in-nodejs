const dependencies = {
  graphqlAstString: require('./graphqlAst').graphqlAstString
}

function fillDescription (typeDef, description, injection) {
  const { graphqlAstString } = Object.assign({}, dependencies, injection)

  if (typeDef.description) return

  typeDef.description = graphqlAstString(description)
}

function fillDocumentationToType (typeDef, entity, injection) {
  fillDescription(typeDef, entity.TYPE_DOC, injection)

  typeDef.fields.forEach(fieldDef => fillDescription(fieldDef, entity.FIELD_DOCS[fieldDef.name.value], injection))
}

function fillDocumentation (documentDef, entity, injection) {
  const [ mainType, inputType ] = documentDef.definitions

  fillDocumentationToType(mainType, entity, injection)
  if (inputType) {
    fillDocumentationToType(inputType, entity, injection)
  }
}

module.exports = fillDocumentation
