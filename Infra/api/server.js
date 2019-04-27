const { ApolloServer } = require('apollo-server')

const { typeDefs, resolvers } = require('./graphQL')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()
  .then(({ url }) => console.log(`API running on ${url} ...`))

