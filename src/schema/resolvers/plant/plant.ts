import { Context } from "../../../context/context";
import { ApolloError } from "apollo-server";

const name = async (parent: any, _args: any, context: Context, _info: any) => {
  const getRequestParams = {
    TableName: "PLANTS_TABLE",
    Key: { id: parent.id }
  };

  try {
    const getResponse: any = await context.db.get(getRequestParams).promise();
    return getResponse.Item.name;
  } catch (error) {
    throw new ApolloError(
      `Could not get name for Plant using ID: ${parent.id}`,
      "CAN_NOT_FETCH_PLANT_BY_ID"
    )
    console.error(error);
  }
};

const plant = { name: name } 

export { plant };
