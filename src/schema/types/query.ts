import { gql } from "apollo-server";

const typeDef = gql`
  type Query {
    plants: [Plant!]!
  }
`;

export default typeDef;
