import { makeExecutableSchema } from "apollo-server";

// TypeDefs
import Plant from "./types/plant.js";
import Soil from "./types/soil.js";
import Query from "./types/query.js";

// Resolvers
// import { plant } from "./resolvers/plants.js";
import plants from "./resolvers/plants.js";

const resolvers = {
  Query: {
    plants
  },
  Plant: {
    name: () => {},
    soil: () => {}
  }
};

export const schema = makeExecutableSchema({
  typeDefs: [Query, Plant, Soil],
  resolvers
});
