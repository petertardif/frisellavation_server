"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Quote",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Like",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/peter-tardif-0f28bc/frisellavation_server/dev`
});
exports.prisma = new exports.Prisma();
