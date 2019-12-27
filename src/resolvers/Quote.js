function postedBy(parent, args, context) {
  return context.prisma.quote({ id: parent.id }).postedBy()
}

module.exports = {
  postedBy,
}