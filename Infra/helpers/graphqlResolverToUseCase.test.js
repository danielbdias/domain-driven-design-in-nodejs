const sinon = require('sinon')

const graphqlResolverToUseCase = require('./graphqlResolverToUseCase')

describe('graphqlResolverToUseCase', () => {
  it('calls an use case with the resolver args', () => {
    // Given
    const root = 'some root'
    const args = { param1: 1, param2: 2 }
    const context = { contextData: 'some data' }
    const info = 'some metadata info'

    const useCase = sinon.mock()
      .once()
      .withExactArgs(args)

    // When
    const resolver = graphqlResolverToUseCase(useCase)
    resolver(root, args, context, info)

    // Then
    useCase.verify()
  })
})
