import { gql } from "apollo-server";

const typeDef = gql`
  type Sensor {
    id: ID!
    name: String!
    batteryLife: Int!
  }
`;

export default typeDef;
