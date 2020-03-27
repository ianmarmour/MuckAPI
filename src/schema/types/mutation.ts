import { gql } from "apollo-server";

const typeDef = gql`
  type Mutation {
    createPlant(plant: Plant): Plant
  }
`;

export default typeDef;
