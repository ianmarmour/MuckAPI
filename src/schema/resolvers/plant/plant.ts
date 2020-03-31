import { Context } from "../../../context/context";

const name = async (parent: any, _args: any, context: Context, _info: any) => {
  const getRequestParams = {
    TableName: "PLANTS_TABLE",
    Key: { id: parent.id }
  };

  try {
    const getResponse: any = await context.db.get(getRequestParams).promise();
    return getResponse.Item.name;
  } catch (error) {
    console.error(error);
  }
};

export { name };
