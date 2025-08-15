import express from "express";
import { getAllOrders, createNewOrder, updateOrder, deleteOrder } from "../controllers/shipment.controller.js";
const router =express.Router();

router.post("/create", createNewOrder);
router.get("/all", getAllOrders);
router.patch("/update/:orderId", updateOrder);
router.delete("/delete/:orderId", deleteOrder);

export default router;