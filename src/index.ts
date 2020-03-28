import createNewSchema from "./schema/schema";
import { context } from "./context/context";
import { ApolloServer } from "apollo-server";

const runServer = async () => {
  const schema: any = await createNewSchema();

  const server = new ApolloServer({ schema, context });

  server.listen().then(({ url }: any) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

runServer();
