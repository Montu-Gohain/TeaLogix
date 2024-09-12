import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";
import { v4 as uuidV4 } from "uuid";

class Order extends Model {
  public id!: string;
  public customerId!: string; // FK to Customer
  public OrderStatus!: string; // "pending","completed"
  public totalAmountInKG!: number;
}

Order.init(
  {
    id: {
      type: DataTypes.STRING,
      defaultValue: uuidV4,
      primaryKey: true,
    },
    customerId: {
      type: DataTypes.STRING,
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
