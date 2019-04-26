const graphqlType = require('../../../../helpers/graphqlType')

const entity = require('../../../../../Domain/Entities/GPS')

const definitions = `
  type GPS {
    id: Int
    type: String
  }

  input GPSInput {
    id: Int
    name: String!
  }
`

module.exports = graphqlType({ definitions })
