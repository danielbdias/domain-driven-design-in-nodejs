const gql = require('apollo-server').gql

const definitions = `
  type Address {
    id: Int
    name: String
    number: Int
    complement: String
    zipCode: String
    city: String
    state: String
    kind: String
    createdAt: Int
    updatedAt: Int
  }

  input AddressInput {
    id: Int
    name: String!
    number: Int
    complement: String
    zipCode: String!
    city: String!
    state: String!
    kind: String!
  }

  type GPS {
    id: Int
    type: String
  }

  input GPSInput {
    id: Int
    type: String!
  }

  type Route {
    origin: Address
    destination: Address
    instructions: [RouteInstruction]
  }

  type RouteInstruction {
    description: String
    order: Int
  }
`

module.exports = gql(definitions)
