import Order from "../components/Order/OrderModel";
import Customer from "../components/Customer/CustomerModel";
import TeaProduct from "../components/TeaProduct/TeaProductModel";
import Supplier from "../components/Supplier/SupplierModel";
import OrderItem from "../components/OrderItem/OrderItemModel";

const db_associations = () => {
  // Todo: Let's define the associations between these models

  // Association between TeaProduct and Supplier
  Supplier.hasMany(TeaProduct, { foreignKey: "supplierId" });
  TeaProduct.belongsTo(Supplier, { foreignKey: "supplierId" });

  // Association between Customer and Order
  Customer.hasMany(Order, { foreignKey: "customerId" });
  Order.belongsTo(Customer, { foreignKey: "customerId" });

  // Association between Order and TeaProduct via a join table or through table

  Order.belongsToMany(TeaProduct, { through: OrderItem });
  TeaProduct.belongsToMany(Order, { through: OrderItem });
};

export default db_associations;
