const { expect } = require('chai')
const sinon = require('sinon')

const fillDocumentation = require('./fillDocumentation')

describe('fillDocumentation', () => {
  it('adds the documentation in a document definition as a side effect', () => {
    // Given
    const documentDef = {
      definitions: [
        {
          description: null,
          fields: [
            { description: null, name: { value: 'firstField' } },
            { description: 'some documentation', name: { value: 'secondField' } }
          ]
        },
        {
          description: 'some documentation',
          fields: [
            { description: null, name: { value: 'firstField' } },
            { description: null, name: { value: 'secondField' } }
          ]
        }
      ]
    }

    const entity = {
      TYPE_DOC: 'some fake documentation',
      FIELD_DOCS: {
        firstField: 'some fake documentation',
        secondField: 'some fake documentation'
      }
    }

    const injectedDependencies = {
      graphqlAstString: sinon.stub()
    }

    injectedDependencies.graphqlAstString
      .returns('some fake documentation')

    // When
    fillDocumentation(documentDef, entity, injectedDependencies)

    // Then
    const expectedDocumentDef = {
      definitions: [
        {
          description: 'some fake documentation',
          fields: [
            { description: 'some fake documentation', name: { value: 'firstField' } },
            { description: 'some documentation', name: { value: 'secondField' } }
          ]
        },
        {
          description: 'some documentation',
          fields: [
            { description: 'some fake documentation', name: { value: 'firstField' } },
            { description: 'some fake documentation', name: { value: 'secondField' } }
          ]
        }
      ]
    }

    expect(documentDef).to.be.deep.equal(expectedDocumentDef)
  })
})
