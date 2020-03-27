import { gql } from "apollo-server";

const typeDef = gql`
  type Soil {
    _id: ID!
    brand: String!
    moistureLevel: Int!
  }
`;

export default typeDef;
