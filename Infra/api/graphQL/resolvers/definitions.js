const graphqlResolverToUseCase = require('../../../helpers/graphqlResolverToUseCase')

module.exports = {
  Query: {
    addresses: graphqlResolverToUseCase(require('../../../../Domain/UseCases/GetAddresses'))
  },
  Mutation: {
    saveAddress: graphqlResolverToUseCase(require('../../../../Domain/UseCases/SaveAddress')),
    deleteAddress: graphqlResolverToUseCase(require('../../../../Domain/UseCases/DeleteAddress'))
  }
}
