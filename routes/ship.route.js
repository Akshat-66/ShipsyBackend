import express from "express";
import { getAllOrders, createNewOrder, updateOrder } from "../controllers/shipment.controller.js";
const router =express.Router();

router.post("/create", createNewOrder);
router.get("/all", getAllOrders);
router.patch("/update/:orderId", updateOrder);

export default router;