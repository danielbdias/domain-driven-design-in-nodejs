const graphqlResolverToUseCase = require('../../../helpers/graphqlResolverToUseCase')

module.exports = {
  Query: {
    addresses: graphqlResolverToUseCase(require('../../../../Domain/UseCases/ManageAddress/GetAddresses')),
    gps: graphqlResolverToUseCase(require('../../../../Domain/UseCases/ManageGPS/GetGPS')),
    traceRoute: graphqlResolverToUseCase(require('../../../../Domain/UseCases/TraceRoute')),
  },
  Mutation: {
    saveAddress: graphqlResolverToUseCase(require('../../../../Domain/UseCases/ManageAddress/SaveAddress')),
    deleteAddress: graphqlResolverToUseCase(require('../../../../Domain/UseCases/ManageAddress/DeleteAddress')),
    saveGPS: graphqlResolverToUseCase(require('../../../../Domain/UseCases/ManageGPS/SaveGPS'))
  }
}
