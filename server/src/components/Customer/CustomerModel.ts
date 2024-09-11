import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";

class Customer extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public contanct_no!: number;
}

Customer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contanct_no: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Customer",
  }
);

export default Customer;
