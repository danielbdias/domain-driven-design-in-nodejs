const graphqlType = require('../../../helpers/graphqlType')

const definitions = `
  type Query {
    "Retorna uma lista de endereços"
    addresses(
      "Identificador do endereço no sistema (filtro opcional)"
      id: Int,
      "Opções de configuração da query"
      queryOptions: AddressQueryOptions
    ): [Address]
  }
`

module.exports = graphqlType({ definitions })
