const { expect } = require('chai')
const sinon = require('sinon')

const graphqlType = require('./graphqlType')

describe('graphqlType', () => {
  it('generates a GraphQL type with the raw definitions', () => {
    // Given
    const definitions = 'some definition'

    const injectedDependencies = {
      gql: sinon.stub()
    }

    injectedDependencies.gql
      .returns('some graphql definition')

    // When
    const obtainedResult = graphqlType({ definitions }, injectedDependencies)

    // Then
    const expectedResult = 'some graphql definition'

    expect(obtainedResult).to.be.equal(expectedResult)
  })

  it('generates a GraphQL type with the raw definitions and entity documentations', () => {
    // Given
    const definitions = 'some definition'
    const entity = 'some entity'

    const injectedDependencies = {
      gql: sinon.stub(),
      fillDocumentation: sinon.stub()
    }

    injectedDependencies.gql
      .returns('some graphql definition')

    // When
    const obtainedResult = graphqlType({ definitions, entity }, injectedDependencies)

    // Then
    const expectedResult = 'some graphql definition'

    expect(obtainedResult).to.be.equal(expectedResult)
    expect(injectedDependencies.fillDocumentation.called).to.be.true()

    expect(injectedDependencies.fillDocumentation.firstCall.args).to.be.deep.equal([ 'some graphql definition', 'some entity' ])
  })

  it('generates a GraphQL type with the raw definitions and entity documentations plus query types', () => {
    // Given
    const definitions = 'some definition'
    const entity = 'some entity'

    const injectedDependencies = {
      gql: sinon.stub(),
      fillDocumentation: sinon.stub(),
      fillQueryTypes: sinon.stub()
    }

    injectedDependencies.gql
      .returns('some graphql definition')

    // When
    const obtainedResult = graphqlType({ definitions, entity, queryable: true }, injectedDependencies)

    // Then
    const expectedResult = 'some graphql definition'

    expect(obtainedResult).to.be.equal(expectedResult)

    expect(injectedDependencies.fillDocumentation.called).to.be.true()
    expect(injectedDependencies.fillDocumentation.firstCall.args).to.be.deep.equal([ 'some graphql definition', 'some entity' ])

    expect(injectedDependencies.fillQueryTypes.called).to.be.true()
    expect(injectedDependencies.fillQueryTypes.firstCall.args).to.be.deep.equal([ 'some graphql definition' ])
  })
})
