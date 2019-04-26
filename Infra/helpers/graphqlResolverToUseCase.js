module.exports = function graphqlResolverToUseCase (useCase) {
  return (root, args, context, info) => useCase(args)
}
