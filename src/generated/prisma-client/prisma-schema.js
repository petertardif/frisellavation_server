module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateQuote {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createQuote(data: QuoteCreateInput!): Quote!
  updateQuote(data: QuoteUpdateInput!, where: QuoteWhereUniqueInput!): Quote
  updateManyQuotes(data: QuoteUpdateManyMutationInput!, where: QuoteWhereInput): BatchPayload!
  upsertQuote(where: QuoteWhereUniqueInput!, create: QuoteCreateInput!, update: QuoteUpdateInput!): Quote!
  deleteQuote(where: QuoteWhereUniqueInput!): Quote
  deleteManyQuotes(where: QuoteWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  quote(where: QuoteWhereUniqueInput!): Quote
  quotes(where: QuoteWhereInput, orderBy: QuoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Quote]!
  quotesConnection(where: QuoteWhereInput, orderBy: QuoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuoteConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Quote {
  id: ID!
  createdAt: DateTime!
  url: String!
  tag: String!
  postedBy: User
}

type QuoteConnection {
  pageInfo: PageInfo!
  edges: [QuoteEdge]!
  aggregate: AggregateQuote!
}

input QuoteCreateInput {
  id: ID
  url: String!
  tag: String!
  postedBy: UserCreateOneWithoutQuotesInput
}

input QuoteCreateManyWithoutPostedByInput {
  create: [QuoteCreateWithoutPostedByInput!]
  connect: [QuoteWhereUniqueInput!]
}

input QuoteCreateWithoutPostedByInput {
  id: ID
  url: String!
  tag: String!
}

type QuoteEdge {
  node: Quote!
  cursor: String!
}

enum QuoteOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  url_ASC
  url_DESC
  tag_ASC
  tag_DESC
}

type QuotePreviousValues {
  id: ID!
  createdAt: DateTime!
  url: String!
  tag: String!
}

input QuoteScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  tag: String
  tag_not: String
  tag_in: [String!]
  tag_not_in: [String!]
  tag_lt: String
  tag_lte: String
  tag_gt: String
  tag_gte: String
  tag_contains: String
  tag_not_contains: String
  tag_starts_with: String
  tag_not_starts_with: String
  tag_ends_with: String
  tag_not_ends_with: String
  AND: [QuoteScalarWhereInput!]
  OR: [QuoteScalarWhereInput!]
  NOT: [QuoteScalarWhereInput!]
}

type QuoteSubscriptionPayload {
  mutation: MutationType!
  node: Quote
  updatedFields: [String!]
  previousValues: QuotePreviousValues
}

input QuoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: QuoteWhereInput
  AND: [QuoteSubscriptionWhereInput!]
  OR: [QuoteSubscriptionWhereInput!]
  NOT: [QuoteSubscriptionWhereInput!]
}

input QuoteUpdateInput {
  url: String
  tag: String
  postedBy: UserUpdateOneWithoutQuotesInput
}

input QuoteUpdateManyDataInput {
  url: String
  tag: String
}

input QuoteUpdateManyMutationInput {
  url: String
  tag: String
}

input QuoteUpdateManyWithoutPostedByInput {
  create: [QuoteCreateWithoutPostedByInput!]
  delete: [QuoteWhereUniqueInput!]
  connect: [QuoteWhereUniqueInput!]
  set: [QuoteWhereUniqueInput!]
  disconnect: [QuoteWhereUniqueInput!]
  update: [QuoteUpdateWithWhereUniqueWithoutPostedByInput!]
  upsert: [QuoteUpsertWithWhereUniqueWithoutPostedByInput!]
  deleteMany: [QuoteScalarWhereInput!]
  updateMany: [QuoteUpdateManyWithWhereNestedInput!]
}

input QuoteUpdateManyWithWhereNestedInput {
  where: QuoteScalarWhereInput!
  data: QuoteUpdateManyDataInput!
}

input QuoteUpdateWithoutPostedByDataInput {
  url: String
  tag: String
}

input QuoteUpdateWithWhereUniqueWithoutPostedByInput {
  where: QuoteWhereUniqueInput!
  data: QuoteUpdateWithoutPostedByDataInput!
}

input QuoteUpsertWithWhereUniqueWithoutPostedByInput {
  where: QuoteWhereUniqueInput!
  update: QuoteUpdateWithoutPostedByDataInput!
  create: QuoteCreateWithoutPostedByInput!
}

input QuoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  tag: String
  tag_not: String
  tag_in: [String!]
  tag_not_in: [String!]
  tag_lt: String
  tag_lte: String
  tag_gt: String
  tag_gte: String
  tag_contains: String
  tag_not_contains: String
  tag_starts_with: String
  tag_not_starts_with: String
  tag_ends_with: String
  tag_not_ends_with: String
  postedBy: UserWhereInput
  AND: [QuoteWhereInput!]
  OR: [QuoteWhereInput!]
  NOT: [QuoteWhereInput!]
}

input QuoteWhereUniqueInput {
  id: ID
}

type Subscription {
  quote(where: QuoteSubscriptionWhereInput): QuoteSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  last_name: String!
  first_name: String!
  email: String!
  password: String!
  quotes(where: QuoteWhereInput, orderBy: QuoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Quote!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  last_name: String!
  first_name: String!
  email: String!
  password: String!
  quotes: QuoteCreateManyWithoutPostedByInput
}

input UserCreateOneWithoutQuotesInput {
  create: UserCreateWithoutQuotesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutQuotesInput {
  id: ID
  last_name: String!
  first_name: String!
  email: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  last_name_ASC
  last_name_DESC
  first_name_ASC
  first_name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  last_name: String!
  first_name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  last_name: String
  first_name: String
  email: String
  password: String
  quotes: QuoteUpdateManyWithoutPostedByInput
}

input UserUpdateManyMutationInput {
  last_name: String
  first_name: String
  email: String
  password: String
}

input UserUpdateOneWithoutQuotesInput {
  create: UserCreateWithoutQuotesInput
  update: UserUpdateWithoutQuotesDataInput
  upsert: UserUpsertWithoutQuotesInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutQuotesDataInput {
  last_name: String
  first_name: String
  email: String
  password: String
}

input UserUpsertWithoutQuotesInput {
  update: UserUpdateWithoutQuotesDataInput!
  create: UserCreateWithoutQuotesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  last_name: String
  last_name_not: String
  last_name_in: [String!]
  last_name_not_in: [String!]
  last_name_lt: String
  last_name_lte: String
  last_name_gt: String
  last_name_gte: String
  last_name_contains: String
  last_name_not_contains: String
  last_name_starts_with: String
  last_name_not_starts_with: String
  last_name_ends_with: String
  last_name_not_ends_with: String
  first_name: String
  first_name_not: String
  first_name_in: [String!]
  first_name_not_in: [String!]
  first_name_lt: String
  first_name_lte: String
  first_name_gt: String
  first_name_gte: String
  first_name_contains: String
  first_name_not_contains: String
  first_name_starts_with: String
  first_name_not_starts_with: String
  first_name_ends_with: String
  first_name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  quotes_every: QuoteWhereInput
  quotes_some: QuoteWhereInput
  quotes_none: QuoteWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    