const graphqlResolverToUseCase = require('../../../helpers/graphqlResolverToUseCase')

module.exports = {
  Query: {
    addresses: graphqlResolverToUseCase(require('../../../../Domain/UseCases/GetAddresses')),
    gps: graphqlResolverToUseCase(require('../../../../Domain/UseCases/GetGPS'))
  },
  Mutation: {
    saveAddress: graphqlResolverToUseCase(require('../../../../Domain/UseCases/SaveAddress')),
    deleteAddress: graphqlResolverToUseCase(require('../../../../Domain/UseCases/DeleteAddress')),
    saveGPS: graphqlResolverToUseCase(require('../../../../Domain/UseCases/SaveGPS'))
  }
}
