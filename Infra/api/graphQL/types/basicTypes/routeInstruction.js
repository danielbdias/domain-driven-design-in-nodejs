const graphqlType = require('../../../../helpers/graphqlType')

const valueObject = require('../../../../../Domain/ValueObjects/RouteInstruction')

const definitions = `
  type RouteInstruction {
    description: String
    order: Int
  }
`

module.exports = graphqlType({ definitions })
