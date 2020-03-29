import { gql } from "apollo-server";

const typeDef = gql`
  input createSoilInput {
    _id: ID
    brand: String!
    moistureLevel: Int!
  }
  input createPlantInput {
    _id: ID
    name: String
    soil: createSoilInput
  }
  input updatePlantInput {
    _id: ID
    name: String
    soil: createSoilInput
  }
  input deletePlantInput {
    _id: ID
  },
  type Mutation {
    createPlant(plant: createPlantInput): Plant
    updatePlant(plant: updatePlantInput): Plant
    deletePlant(plant: deletePlantInput): Boolean
  }
`;

export default typeDef;
