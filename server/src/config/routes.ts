import { Router } from "express";
import SupplierRouter from "../components/Supplier/SupplierRoutes";

const router = Router();
router.use("/supplier", SupplierRouter);

export default router;
