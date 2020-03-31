import { makeExecutableSchema } from "apollo-server";

// TypeDefs
import Plant from "./types/plant.js";
import Soil from "./types/soil.js";
import Query from "./types/query.js";
import Mutation from "./types/mutation.js";

// Resolvers
import { name } from "./resolvers/plant/plant";
import { brand, moistureLevel } from "./resolvers/soil/soil";
import { createPlant } from "./resolvers/createPlant/createPlant";
import { updatePlant } from "./resolvers/updatePlant/updatePlant";
import { deletePlant } from "./resolvers/deletePlant/deletePlant";
import plants from "./resolvers/plants/plants";

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
      name
    },
    Soil: {
      brand,
      moistureLevel
    }
  };

  return makeExecutableSchema({
    typeDefs: [Query, Mutation, Plant, Soil],
    resolvers
  });
};

export default createNewSchema;
