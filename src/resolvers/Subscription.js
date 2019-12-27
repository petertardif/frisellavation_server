function newLikeSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.like({ mutation_in: ['CREATED'] }).node()
}

const newLike = {
  subscribe: newLikeSubscribe,
  resolve: payload => {
    return payload
  },
}

module.exports = {
  newLike,
}