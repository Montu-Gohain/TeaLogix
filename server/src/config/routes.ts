import { Router } from "express";
import SupplierRouter from "../components/Supplier/SupplierRoutes";
import TeaProductRouter from "../components/TeaProduct/TeaProductRoutes";

const router = Router();
router.use("/supplier", SupplierRouter);
router.use("/product", TeaProductRouter);

export default router;
