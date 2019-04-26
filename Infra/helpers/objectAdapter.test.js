const { expect } = require('chai')
const sinon = require('sinon')

const objectAdapter = require('./objectAdapter')

describe('objectAdapter', () => {
  it('assign an adapter for each object attribute', () => {
    // Given
    const anObject = {
      anAttribute: 'some value',
      oneMoreAttribute: 'some more values'
    }

    const injectedDependencies = {
      adapter: sinon.stub()
    }

    injectedDependencies.adapter
      .withArgs('some value').returns('some adapted value')
      .withArgs('some more values').returns('some more adapted values')

    // When
    const obtainedObject = objectAdapter(anObject, injectedDependencies)

    // Then
    const expectedObject = {
      anAttribute: 'some adapted value',
      oneMoreAttribute: 'some more adapted values'
    }

    expect(obtainedObject).to.be.deep.equal(expectedObject)
  })
})
