async function feed(parent, args, context, info) {
  const where = args.filter ? { tag_contains: args.filter } : {}
  
  const quotes = await context.prisma.quotes({
    where,
    orderBy: args.orderBy
  })
  const count = await context.prisma
    .quotesConnection({
      where,
    })
    .aggregate()
    .count()
  return {
    quotes,
    count,
  }
}

module.exports = {
  feed,
}