const { expect } = require('chai')
const sinon = require('sinon')

const SaveEntity = require('./SaveEntity')

describe('SaveEntity', () => {
  it('saves an entity correctly', () => {
    // Given a data set
    const entityType = sinon.stub().returns({ valid: true })
    const entityData = 'some entity'

    const repository = {
      save: sinon.mock().once()
    }

    // When ...
    SaveEntity({ repository, entityType, entityData })

    // Then expects...
    expect(entityType.calledWithNew()).to.be.true()
    expect(repository.save.called).to.be.true()
  })

  it('returns an error due a validation', async () => {
    // Given a data set
    const entityType = sinon.stub().returns({ valid: false, errors: [] })
    const entityData = 'some entity'

    const repository = {
      save: sinon.mock().never()
    }

    try {
      // When ...
      await SaveEntity({ repository, entityType, entityData })

      throw new Error('This test must return an error!')
    } catch (error) {
      // Then expects...
      expect(entityType.calledWithNew()).to.be.true()
      expect(repository.save.called).to.be.false()
    }
  })
})
