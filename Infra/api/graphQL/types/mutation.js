const gql = require('apollo-server').gql

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

    "Cria / altera um GPS"
    saveGPS(
      "Dados do GPS (id obrigário apenas em caso de atualização)"
      gps: GPSInput!
    ): GPS
  }
`

module.exports = gql(definitions)
