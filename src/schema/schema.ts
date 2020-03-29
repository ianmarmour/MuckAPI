import { makeExecutableSchema } from "apollo-server";

// TypeDefs
import Plant from "./types/plant.js";
import Soil from "./types/soil.js";
import Query from "./types/query.js";
import Mutation from "./types/mutation.js";

// Resolvers
// import { plant } from "./resolvers/plants.js";
import { name, soil } from "./resolvers/plant";
import { createPlant } from "./resolvers/createPlant";
import { updatePlant } from "./resolvers/updatePlant";
import { deletePlant } from "./resolvers/deletePlant";
import plants from "./resolvers/plants";

const createNewSchema = async () => {
  const resolvers = {
    Query: {
      plants
    },
    Mutation: {
      createPlant,
      updatePlant,
      deletePlant
    },
    Plant: {
      name,
      soil
    }
  };

  return makeExecutableSchema({
    typeDefs: [Query, Mutation, Plant, Soil],
    resolvers
  });
};

export default createNewSchema;
