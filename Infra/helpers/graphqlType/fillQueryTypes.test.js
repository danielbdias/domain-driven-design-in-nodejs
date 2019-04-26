const { expect } = require('chai')
const sinon = require('sinon')

const fillQueryTypes = require('./fillQueryTypes')

describe('fillQueryTypes', () => {
  let anEntityDef
  let anEntityInputDef

  let documentDef
  let injectedDependencies

  before(() => {
    // Given
    anEntityDef = {
      name: { value: 'AnEntity' },
      fields: [
        { name: { value: 'firstField' }, description: { value: 'some description' }, type: { name: { value: 'Int' } } },
        { name: { value: 'secondField' }, description: { value: 'some description' }, type: { name: { value: 'CustomType' } } }
      ]
    }

    anEntityInputDef = {
      name: { value: 'AnEntityInput' },
      description: { value: 'some description' },
      fields: [
        { name: { value: 'firstField' }, description: { value: 'some description' }, type: { type: { name: { value: 'Int' } } } },
        { name: { value: 'secondField' }, description: { value: 'some description' }, type: { name: { value: 'CustomTypeInput' } } }
      ]
    }

    documentDef = {
      definitions: [
        anEntityDef,
        anEntityInputDef
      ]
    }

    injectedDependencies = {
      graphqlAstInputObjectType: sinon.stub(),
      graphqlAstInputValueType: sinon.stub()
    }

    injectedDependencies.graphqlAstInputObjectType
      .withArgs('AnEntityQueryFilterOptions', sinon.match.string, sinon.match.array)
      .returns('query filter options')

    injectedDependencies.graphqlAstInputObjectType
      .withArgs('AnEntityQueryOptions', sinon.match.string, sinon.match.array)
      .returns('query options')

    // When
    fillQueryTypes(documentDef, injectedDependencies)
  })

  // Then
  it('adds the documentation in a document definition as a side effect', () => {
    const expectedDocumentDef = {
      definitions: [
        anEntityDef,
        anEntityInputDef,
        'query filter options',
        'query options'
      ]
    }

    expect(documentDef).to.be.deep.equal(expectedDocumentDef)
  })

  it('generate the QueryFilterOption type correctly', () => {
    // two calls for QueryFilterOption and two more for QueryOption
    expect(injectedDependencies.graphqlAstInputValueType.callCount).to.be.equal(4)

    const [ firstFieldName, firstFieldType ] = injectedDependencies.graphqlAstInputValueType.getCall(0).args
    expect([ firstFieldName, firstFieldType ]).to.be.deep.equal([ 'firstField', 'Int' ])

    const [ secondFieldName, secondFieldType ] = injectedDependencies.graphqlAstInputValueType.getCall(1).args
    expect([ secondFieldName, secondFieldType ]).to.be.deep.equal([ 'secondField', 'CustomTypeInput' ])
  })

  it('generate the QueryOption type correctly', () => {
    // two calls for QueryFilterOption and two more for QueryOption
    expect(injectedDependencies.graphqlAstInputValueType.callCount).to.be.equal(4)

    const [ firstFieldName, firstFieldType ] = injectedDependencies.graphqlAstInputValueType.getCall(2).args
    expect([ firstFieldName, firstFieldType ]).to.be.deep.equal([ 'first', 'Int' ])

    const [ secondFieldName, secondFieldType ] = injectedDependencies.graphqlAstInputValueType.getCall(3).args
    expect([ secondFieldName, secondFieldType ]).to.be.deep.equal([ 'filter', 'AnEntityQueryFilterOptions' ])
  })
})
