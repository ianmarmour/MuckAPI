import { Context } from "../../context/context";

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
    console.error(error);
  }
};

export default plants;
