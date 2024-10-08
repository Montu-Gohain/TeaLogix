import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";
import { v4 as uuidV4 } from "uuid";

class Customer extends Model {
  public id!: string;
  public name!: string;
  public email!: string;
  public contanct_no!: number;
}

Customer.init(
  {
    id: {
      type: DataTypes.STRING,
      defaultValue: uuidV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    contanct_no: {
      type: DataTypes.BIGINT,
      unique: true,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Customer",
  }
);

export default Customer;
