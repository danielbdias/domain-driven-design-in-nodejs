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
    name: String!
    number: Int
    complement: String
    zipCode: String!
    city: String!
    state: String!
    kind: String!
  }

  input AddressQueryOptions {
    first: Int
    filter: AddressInput
  }

  type GPS {
    id: Int
    type: String
  }

  input GPSInput {
    id: Int
    name: String!
  }

  type Route {
    start: Address
    end: Address
    instructions: [RouteInstruction]
  }

  type RouteInstruction {
    description: String
    order: Int
  }
`

module.exports = gql(definitions)
