import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";

class Order extends Model {
  public id!: number;
  public customerId!: number; // FK to Customer
  public OrderStatus!: string; // "pending","completed"
  public totalAmountInKG!: number;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    OrderStatus: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "pending",
    },
    totalAmountInKG: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Order",
  }
);

export default Order;
