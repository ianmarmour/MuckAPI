import { schema } from "./schema/schema";
import { context } from "./context/context";
import { ApolloServer } from "apollo-server";

const server = new ApolloServer({ schema, context });

server.listen().then(({ url }: any) => {
  console.log(`🚀 Server ready at ${url}`);
});
