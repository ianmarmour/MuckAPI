import { gql } from "apollo-server";

const typeDef = gql`
  type Plant {
    id: ID!
    name: String!
    soil: Soil!
  }
`;

export default typeDef;
