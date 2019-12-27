const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
const Quote = require('./resolvers/Quote')
const User = require('./resolvers/User')

const resolvers = {
  Mutation,
  Query,
  Quote,
  User,
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})
server.start(() => console.log(`Server is running on http://localhost:4000`))