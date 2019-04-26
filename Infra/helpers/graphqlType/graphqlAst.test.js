const { expect } = require('chai')

const {
  graphqlAstNamedType,
  graphqlAstInputObjectType,
  graphqlAstInputValueType,
  graphqlAstString,
  graphqlAstName
} = require('./graphqlAst')

describe('graphqlAstString', () => {
  it('generates an AST token', () => {
    const obtainedResult = graphqlAstString('some string')
    const expectedResult = { kind: 'StringValue', value: 'some string', block: false }

    expect(obtainedResult).to.be.deep.equal(expectedResult)
  })
})

describe('graphqlAstName', () => {
  it('generates an AST token', () => {
    const obtainedResult = graphqlAstName('some name')
    const expectedResult = { kind: 'Name', value: 'some name' }

    expect(obtainedResult).to.be.deep.equal(expectedResult)
  })
})

describe('graphqlAstNamedType', () => {
  it('generates an AST token', () => {
    const obtainedResult = graphqlAstNamedType('some type')
    const expectedResult = {
      kind: 'NamedType',
      name: { kind: 'Name', value: 'some type' }
    }

    expect(obtainedResult).to.be.deep.equal(expectedResult)
  })
})

describe('graphqlAstInputValueType', () => {
  it('generates an AST token', () => {
    const obtainedResult = graphqlAstInputValueType('some field name', 'some field type', 'some description')
    const expectedResult = {
      kind: 'InputValueDefinition',
      description: { kind: 'StringValue', value: 'some description', block: false },
      name: { kind: 'Name', value: 'some field name' },
      type: { kind: 'NamedType', name: { kind: 'Name', value: 'some field type' } },
      defaultValue: undefined,
      directives: []
    }

    expect(obtainedResult).to.be.deep.equal(expectedResult)
  })
})

describe('graphqlAstInputObjectType', () => {
  it('generates an AST token', () => {
    const obtainedResult = graphqlAstInputObjectType('some type name', 'some description', [ 'field1', 'field2' ])
    const expectedResult = {
      kind: 'InputObjectTypeDefinition',
      description: { kind: 'StringValue', value: 'some description', block: false },
      name: { kind: 'Name', value: 'some type name' },
      directives: [],
      fields: [ 'field1', 'field2' ]
    }

    expect(obtainedResult).to.be.deep.equal(expectedResult)
  })
})
