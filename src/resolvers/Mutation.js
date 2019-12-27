const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

async function like(parent, args, context, info) {
  const userId = getUserId(context)

  const likeExists = await context.prisma.$exists.like({
    user: { id: userId },
    quote: { id: args.quoteId },
  })
  if (likeExists) {
    throw new Error(`You already liked the quote ${args.quoteId}`)
  }

  return context.prisma.createLike({
    user: { connect: { id: userId } },
    quote: { connect: { id: args.quoteId } },
  })
}

async function login(parent, args, context, info) {
  const user = await context.prisma.user({ email: args.email })
  if (!user) {
    throw new Error('No such user found')
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid Password')
  }

  const token = jwt.sign({ userId: user.id}, APP_SECRET)

  return {
    token,
    user,
  }
}

function post(parent, args, context, info) {
  const userId = getUserId(context)
  return context.prisma.createQuote({
    url: args.url,
    tag: args.tag,
    postedBy: { connect: { id: userId } },
  })
}

async function signup(parent, args, context, info) {
  const password =  await bcrypt.hash(args.password, 10)
  const user = await context.prisma.createUser({ ...args, password })
  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

module.exports = {
  signup,
  login,
  post,
  like,
}