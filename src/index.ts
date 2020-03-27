import { schema } from "./schema/schema.js";
const { ApolloServer, gql } = require("apollo-server");

const server = new ApolloServer({ schema });

server.listen().then(({ url }: any) => {
  console.log(`🚀 Server ready at ${url}`);
});
