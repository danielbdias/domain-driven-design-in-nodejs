const gql = require('apollo-server').gql

const definitions = `
  type Query {
    "Retorna uma lista de endereços"
    addresses(
      "Identificador do endereço no sistema (filtro opcional)"
      id: Int
    ): [Address]

    "Retorna uma lista de GPS"
    gps(
      "Identificador do GPS no sistema (filtro opcional)"
      id: Int
    ): [GPS]

    "Traça uma rota de uma origem a um destino"
    traceRoute(
      originId: Int,
      destinationId: Int,
      gpsType: String
    ): Route
  }
`

module.exports = gql(definitions)
