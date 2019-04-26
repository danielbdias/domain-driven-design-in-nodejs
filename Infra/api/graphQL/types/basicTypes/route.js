const graphqlType = require('../../../../helpers/graphqlType')

const valueObject = require('../../../../../Domain/ValueObjects/Route')

const definitions = `
  type Route {
    start: Address
    end: Address
    instructions: [RouteInstruction]
  }
`

module.exports = graphqlType({ definitions })
