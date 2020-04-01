import { makeExecutableSchema } from "apollo-server";

// TypeDefs
import Plant from "./types/plant.js";
import Soil from "./types/soil.js";
import Sensor from "./types/sensor.js";
import Query from "./types/query.js";
import Mutation from "./types/mutation.js";

// Resolvers
import { plant } from "./resolvers/plant/plant";
import { sensor } from "./resolvers/sensor/sensor";
import { plants } from "./resolvers/plants/plants";
import { soil } from "./resolvers/soil/soil";
import { createPlant } from "./resolvers/createPlant/createPlant";
import { updatePlant } from "./resolvers/updatePlant/updatePlant";
import { deletePlant } from "./resolvers/deletePlant/deletePlant";

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
      ...plant
    },
    Soil: {
      ...soil
    },
    Sensor: {
      ...sensor
    }
  };

  return makeExecutableSchema({
    typeDefs: [Query, Mutation, Plant, Soil, Sensor],
    resolvers
  });
};

export default createNewSchema;
