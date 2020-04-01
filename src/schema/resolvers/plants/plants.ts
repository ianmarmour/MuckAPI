import { Context } from "../../../context/context";
import { ApolloError } from "apollo-server";

const plants = async (
  _parent: any,
  _args: any,
  context: Context,
  _info: any
) => {
  const getRequestParams = {
    TableName: "PLANTS_TABLE"
  };

  try {
    const getResponse: any = await context.db.scan(getRequestParams).promise();

    return getResponse.Items;
  } catch (error) {
    throw new ApolloError(
      `Could not get plants`,
      "CAN_NOT_FETCH_PLANTS"
    )
    console.error(error);
  }
};

export { plants };
