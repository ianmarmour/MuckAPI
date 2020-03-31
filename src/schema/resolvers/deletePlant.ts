import { Context } from "../../context/context";

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
    console.error(error);
    return false;
  }
};

export { deletePlant };
