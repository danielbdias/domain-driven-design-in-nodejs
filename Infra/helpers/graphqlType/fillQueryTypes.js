const {
  graphqlAstNamedType,
  graphqlAstInputObjectType,
  graphqlAstInputValueType
} = require('./graphqlAst')

const dependencies = {
  graphqlAstNamedType,
  graphqlAstInputObjectType,
  graphqlAstInputValueType
}

function convertFieldDefinitionToInputTypeDefinition (field, typeMap, injection) {
  const { graphqlAstNamedType, graphqlAstInputValueType } = Object.assign({}, dependencies, injection)

  const mappedType = typeMap[field.name.value]
  const fieldType = mappedType ? graphqlAstNamedType(mappedType) : field.type

  const fieldDescription = field.description ? field.description.value : ""

  return graphqlAstInputValueType(field.name.value, fieldType.name.value, fieldDescription)
}

function getInputFieldTypes (inputType) {
  return inputType.fields.reduce(
    (accumulator, field) => {
      const fieldTypeNameDefinition = (field.type.name || field.type.type.name)

      return Object.assign(accumulator, { [field.name.value]: fieldTypeNameDefinition.value })
    },
    {}
  )
}

function fillQueryTypes (documentDef, injection) {
  const { graphqlAstInputObjectType, graphqlAstInputValueType } = Object.assign({}, dependencies, injection)

  const [ mainType, inputType ] = documentDef.definitions

  const typeMap = getInputFieldTypes(inputType)

  const queryFilterOptionsType = graphqlAstInputObjectType(
    `${mainType.name.value}QueryFilterOptions`,
    'Objeto com o nome dos atributos e os valores a serem filtrados',
    mainType.fields.map(field => convertFieldDefinitionToInputTypeDefinition(field, typeMap, injection))
  )

  const queryOptions = graphqlAstInputObjectType(
    `${mainType.name.value}QueryOptions`,
    'Opções de execução de uma query no sistema',
    [
      graphqlAstInputValueType(
        'first', 'Int',
        'Indica quantos registros serão recuperados na query\nCaso este valor seja omitido, a query retornará todos os dados obtidos'
      ),
      graphqlAstInputValueType(
        'filter', `${mainType.name.value}QueryFilterOptions`,
        'Objeto com o nome dos atributos e os valores a serem filtrados'
      )
    ]
  )

  documentDef.definitions = [ mainType, inputType, queryFilterOptionsType, queryOptions ]
}

module.exports = fillQueryTypes
