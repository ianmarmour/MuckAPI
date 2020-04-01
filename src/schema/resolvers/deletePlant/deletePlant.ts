import { Context } from "../../../context/context";
import { ApolloError } from "apollo-server";

const deletePlant = async (
  _parent: any,
  args: any,
  context: Context,
  _info: any
) => {
  const deleteParams = {
    TableName: "PLANTS_TABLE",
    Key: {
      id: args.plant.id
    }
  };

  try {
    await context.db.delete(deleteParams).promise();
    return true;
  } catch (error) {
    throw new ApolloError(
      `Could not delete Plant using ID: ${args.plant.id}`,
      "CAN_NOT_DELETE_PLANT_BY_ID"
    )
    console.error(error);
    return false;
  }
};

export { deletePlant };
