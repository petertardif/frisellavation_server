function postedBy(parent, args, context) {
  return context.prisma.quote({ id: parent.id }).postedBy()
}

function likes(parent, args, context) {
  return context.prisma.quote({ id: parent.id }).likes()
}

module.exports = {
  postedBy,
  likes,
}