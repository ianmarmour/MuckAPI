import { Context } from "../../context/context";

const name = async (_parent: any, args: any, context: Context, _info: any) => {
  const getRequestParams = {
    TableName: "PLANTS_TABLE",
    Key: { id: _parent.id }
  };

  try {
    const getResponse: any = await context.db.get(getRequestParams).promise();
    return getResponse.Item.name;
  } catch (error) {
    console.error(error);
  }
};

const soil = async (_parent: any, args: any, context: Context, _info: any) => {
  const getRequestParams = {
    TableName: "PLANTS_TABLE",
    Key: { id: _parent.id }
  };

  try {
    const getResponse: any = await context.db.get(getRequestParams).promise();
    return getResponse.Item.soil;
  } catch (error) {
    console.error(error);
  }
};

export { name, soil };
