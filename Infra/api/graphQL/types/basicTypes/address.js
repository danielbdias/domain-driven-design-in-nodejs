const graphqlType = require('../../../../helpers/graphqlType')

const entity = require('../../../../../Domain/Entities/Address')

const definitions = `
  type Address {
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
`

// module.exports = graphqlType({ definitions, entity, queryable: true })
module.exports = graphqlType({ definitions, queryable: true })
