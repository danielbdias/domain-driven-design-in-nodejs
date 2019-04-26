const { ApolloServer } = require('apollo-server')

const initDatabase = require('./init/database')

initDatabase()
  .then(_ => {
    const { typeDefs, resolvers } = require('./graphQL')

    // console.log(typeDefs[0].definitions)

    const server = new ApolloServer({
      typeDefs,
      resolvers
    })

    server.listen()
      .then(({ url }) => console.log(`API running on ${url} ...`))
  })
