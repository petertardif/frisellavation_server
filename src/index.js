const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Like = require('./resolvers/Like')
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
const Quote = require('./resolvers/Quote')
const Subscription = require('./resolvers/Subscription')
const User = require('./resolvers/User')

const resolvers = {
  Like,
  Mutation,
  Query,
  Quote,
  Subscription,
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