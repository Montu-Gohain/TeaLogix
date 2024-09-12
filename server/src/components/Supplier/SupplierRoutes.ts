import { Router } from "express";
import {
  addSupplier,
  DeleteSupplier,
  EditSupplier,
  GetSuppliers,
} from "./SupplierControler";

const router = Router();

router.get("/list", GetSuppliers);
router.post("/add", addSupplier);
router.put("/edit", EditSupplier);
router.delete("/delete/:id", DeleteSupplier);

export default router;
