const { expect } = require('chai')
const sinon = require('sinon')

const GetEntities = require('./GetEntities')

describe('GetEntities', () => {
  it('retrieves an entity using an id', async () => {
    // Given a data set
    const entityType = sinon.stub()
    const entityKey = 'some entity key'

    const repository = {
      findOneById: sinon.mock()
        .withExactArgs(entityKey)
        .resolves('a result')
    }

    // When retrieving an entity
    const obtainedResult = await GetEntities({ repository, entityType, entityKey })

    // Then expects...
    const expectedResult = [ 'a result' ]
    expect(obtainedResult).to.be.deep.equal(expectedResult)
  })

  it('retrieves a limited set of entities when the "first" option is sent', () => {
    // Given a data set
    const entityType = sinon.stub()
    const queryOptions = { first: 1 }

    const repository = {
      findAllBy: sinon.mock().once()
    }

    // When retrieving an entity
    GetEntities({ repository, entityType, queryOptions })

    // Then expects...
    const expectedOption = { limit: 1 }
    const [ obtainedOption ] = repository.findAllBy.firstCall.args

    expect(obtainedOption).to.be.deep.equal(expectedOption)
  })

  it('retrieves a filtered set of entities obtained with the criterias sent in "filter" option', () => {
    // Given a data set
    const entityType = sinon.stub().returns({ someAttribute: 1 })
    const queryOptions = { first: 1, filter: { someAttribute: '1' } }

    const repository = {
      findAllByCriterias: sinon.mock().once()
    }

    // When retrieving an entity
    GetEntities({ repository, entityType, queryOptions })

    // Then expects...
    expect(entityType.calledWithNew()).to.be.true()
    expect(entityType.firstCall.args[0]).to.be.deep.equal({ someAttribute: '1' })

    const expectedFilter = { someAttribute: 1 }
    const expectedOptions = { limit: 1 }
    const [ obtainedFilter, obtainedOptions ] = repository.findAllByCriterias.firstCall.args

    expect(obtainedFilter).to.be.deep.equal(expectedFilter)
    expect(obtainedOptions).to.be.deep.equal(expectedOptions)
  })

  it('retrieves all entities', () => {
    // Given a data set
    const entityType = sinon.stub()

    const repository = {
      findAllBy: sinon.mock().once()
    }

    // When retrieving an entity
    GetEntities({ repository, entityType })

    // Then expects...
    const expectedOptions = { }
    const [ obtainedOptions ] = repository.findAllBy.firstCall.args

    expect(obtainedOptions).to.be.deep.equal(expectedOptions)
  })
})
