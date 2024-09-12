import { Sequelize, Dialect } from "sequelize";
import Customer from "../components/Customer/CustomerModel";
import Supplier from "../components/Supplier/SupplierModel";
import Order from "../components/Order/OrderModel";
import TeaProduct from "../components/TeaProduct/TeaProductModel";
import dotenv from "dotenv";
import OrderItem from "../components/OrderItem/OrderItemModel";
dotenv.config();

const sequelize = new Sequelize(
  String(process.env.DB_Name),
  String(process.env.DB_Username),
  String(process.env.DB_Password),
  {
    host: String(process.env.DB_HOST_Address),
    port: Number(process.env.DB_PORT),
    dialect: process.env.DB_Dialect as Dialect,
    logging: false,
  }
);

export default sequelize;
