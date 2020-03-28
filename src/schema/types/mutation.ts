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
  type Mutation {
    createPlant(plant: createPlantInput): Plant
  }
`;

export default typeDef;
