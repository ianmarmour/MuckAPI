import { makeExecutableSchema } from "apollo-server";

// TypeDefs
import Plant from "./types/plant.js";
import Soil from "./types/soil.js";
import Query from "./types/query.js";

// Resolvers
// import { plant } from "./resolvers/plants.js";
import { name, soil } from "./resolvers/plant";
import { createPlant } from "./resolvers/createPlant";
import plants from "./resolvers/plants";

const resolvers = {
  Mutation: {
    createPlant
  },
  Query: {
    plants
  },
  Plant: {
    name,
    soil
  }
};

export const schema = makeExecutableSchema({
  typeDefs: [Query, Plant, Soil],
  resolvers
});
