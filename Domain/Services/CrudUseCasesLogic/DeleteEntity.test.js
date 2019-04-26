const { expect } = require('chai')
const sinon = require('sinon')

const DeleteEntity = require('./DeleteEntity')

describe('DeleteEntity', () => {
  it('deletes an entity correctly', () => {
    // Given a data set
    const entityType = sinon.stub()
    const entityData = 'some entity'

    const repository = {
      delete: sinon.mock().once()
    }

    // When deleting an entity
    DeleteEntity({ repository, entityType, entityData })

    // Then expects...
    expect(entityType.calledWithNew()).to.be.true()
    expect(repository.delete.called).to.be.true()
  })
})
