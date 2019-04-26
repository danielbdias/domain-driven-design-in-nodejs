const graphqlAstString = aString => ({
  kind: 'StringValue',
  value: aString,
  block: false
})

const graphqlAstName = name => ({
  kind: 'Name',
  value: name
})

const graphqlAstNamedType = typeName => ({
  kind: 'NamedType',
  name: graphqlAstName(typeName)
})

const graphqlAstInputObjectType = (typeName, description, fields) => ({
  kind: 'InputObjectTypeDefinition',
  description: graphqlAstString(description),
  name: graphqlAstName(typeName),
  directives: [],
  fields
})

const graphqlAstInputValueType = (fieldName, fieldType, description) => ({
  kind: 'InputValueDefinition',
  description: graphqlAstString(description),
  name: graphqlAstName(fieldName),
  type: graphqlAstNamedType(fieldType),
  defaultValue: undefined,
  directives: []
})

module.exports = {
  graphqlAstString,
  graphqlAstName,
  graphqlAstNamedType,
  graphqlAstInputObjectType,
  graphqlAstInputValueType
}
