function quote(parent, args, context) {
  return context.prisma.like({ id: parent.id }).quote()
}

function user(parent, args, context) {
  return context.prisma.like({ id: parent.id }).user()
}

module.exports = {
  quote,
  user,
}