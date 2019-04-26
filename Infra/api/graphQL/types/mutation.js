const graphqlType = require('../../../helpers/graphqlType')

const definitions = `
  type Mutation {
    "Cria / altera um endereço"
    saveAddress(
      "Dados do endereço (id obrigário apenas em caso de atualização)"
      address: AddressInput!
    ): Address

    deleteAddress(
      "Identificador do endereço no sistema"
      id: Int!
    ): Boolean
  }
`

module.exports = graphqlType({ definitions })
