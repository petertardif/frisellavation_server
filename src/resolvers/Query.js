function feed(parent, args, context, info) {
  return context.prisma.quotes()
}

module.exports = {
  feed,
}