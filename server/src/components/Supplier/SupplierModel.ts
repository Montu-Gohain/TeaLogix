import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";

class Supplier extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public contanct_no!: number;
}

Supplier.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    modelName: "Supplier",
  }
);

export default Supplier;
